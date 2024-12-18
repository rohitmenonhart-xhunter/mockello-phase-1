import React, { useState, useEffect } from 'react';
import { database } from './lib/firebase';
import { ref, push } from 'firebase/database';
import { QuestionCard } from './components/QuestionCard';
import { ProgressBar } from './components/ProgressBar';
import { DomainSelection } from './components/DomainSelection';
import { questions } from './data/questions';
import { Brain } from 'lucide-react';
import { useQuestionTracking } from './hooks/useQuestionTracking';
import { Domain } from './types';
import { AuthScreen } from './components/AuthScreen';
import { fullscreenUtils } from './utils/fullscreen';
import { preventCopyPaste } from './utils/fullscreen';

interface UserInfo {
  name: string;
  uniqueId: string;
  sessionId: string;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessKey, setAccessKey] = useState<string | null>(null);
  const [selectedDomain, setSelectedDomain] = useState<Domain | null>(null);
  const [completedDomains, setCompletedDomains] = useState<Domain[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const { questionResults, trackAnswer } = useQuestionTracking();

  const currentDomainQuestions = selectedDomain ? questions[selectedDomain] || [] : [];

  const handleDomainSelect = (domain: Domain) => {
    if (!questions[domain] || questions[domain].length === 0) {
      alert('Questions for this domain are coming soon!');
      return;
    }
    
    setSelectedDomain(domain);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setTimeSpent(0);
    setQuestionStartTime(Date.now());
  };

  const handleAnswerSelect = (answer: string) => {
    if (!selectedDomain || !currentDomainQuestions[currentQuestionIndex]) return;

    const currentQuestion = currentDomainQuestions[currentQuestionIndex];
    const isCorrect = answer === currentQuestion.correctAnswer;
    const questionTimeSpent = Math.floor((Date.now() - questionStartTime) / 1000);

    trackAnswer(
      currentQuestion.id,
      currentQuestion.domain,
      isCorrect,
      questionTimeSpent,
      currentQuestion.question
    );

    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentDomainQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setQuestionStartTime(Date.now());
    }
  };

  const handleCompleteTraining = async (userInfo: UserInfo) => {
    if (!selectedDomain || !accessKey) return;

    const results = {
      userInfo: {
        ...userInfo,
        accessKey,
      },
      domain: selectedDomain,
      timestamp: Date.now(),
      totalTimeSpent: timeSpent,
      results: Array.from(questionResults.values()).map(result => ({
        ...result,
        performance: {
          correct: result.isCorrect,
          attempts: result.attempts,
          timeSpent: result.timeSpent
        }
      })),
      summary: {
        correctAnswers: Array.from(questionResults.values()).filter(r => r.isCorrect).length,
        totalQuestions: currentDomainQuestions.length,
        struggledQuestions: Array.from(questionResults.values())
          .filter(r => !r.isCorrect || r.attempts > 1)
          .map(r => ({
            question: r.question,
            domain: r.domain,
            attempts: r.attempts,
            timeSpent: r.timeSpent
          }))
      }
    };

    try {
      const progressRef = ref(
        database, 
        `progress/${accessKey}/${userInfo.name}/${userInfo.uniqueId}/${userInfo.sessionId}`
      );
      await push(progressRef, results);
      setCompletedDomains(prev => [...prev, selectedDomain]);
      setSelectedDomain(null);
      alert('Domain completed! Progress saved successfully.');
    } catch (error) {
      console.error('Error saving progress:', error);
      alert('Failed to save progress. Please try again.');
    }
  };

  const handleFullscreenChange = () => {
    if (!fullscreenUtils.isFullscreen()) {
      setIsAuthenticated(false);
      setAccessKey(null);
      alert('Fullscreen mode exited. You need to login again.');
    }
  };

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    preventCopyPaste();
  }, []);

  const handleAuthenticate = (uniqueKey: string) => {
    setIsAuthenticated(true);
    setAccessKey(uniqueKey);
  };

  if (!isAuthenticated) {
    return <AuthScreen onAuthenticate={handleAuthenticate} />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-8">
          <Brain className="w-8 h-8 mr-2 text-blue-500" />
          <h1 className="text-3xl font-bold">⭐ Mockello ⭐ : Aptitude Training round</h1>
        </div>

        {!selectedDomain ? (
          <DomainSelection
            onSelectDomain={handleDomainSelect}
            selectedDomain={selectedDomain}
            completedDomains={completedDomains}
          />
        ) : currentDomainQuestions.length > 0 ? (
          <>
            <div className="mb-8">
              <ProgressBar
                current={currentQuestionIndex + 1}
                total={currentDomainQuestions.length}
              />
              <p className="text-center mt-2 text-gray-400">
                Question {currentQuestionIndex + 1} of {currentDomainQuestions.length}
              </p>
            </div>

            <div className="flex justify-center mb-8">
              <QuestionCard
                question={currentDomainQuestions[currentQuestionIndex]}
                selectedAnswer={selectedAnswer}
                onSelectAnswer={handleAnswerSelect}
                showExplanation={showExplanation}
                onShowExplanation={() => setShowExplanation(true)}
                timeSpent={timeSpent}
                onComplete={handleCompleteTraining}
              />
            </div>

            <div className="flex justify-center gap-4">
              {selectedAnswer && (
                <button
                  onClick={handleNextQuestion}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  disabled={currentQuestionIndex === currentDomainQuestions.length - 1}
                >
                  Next Question
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="text-center text-gray-400">
            <p>Questions for this domain are coming soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;