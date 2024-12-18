import React, { useState } from 'react';
import { Clock, HelpCircle } from 'lucide-react';
import { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: string | null;
  onSelectAnswer: (answer: string) => void;
  showExplanation: boolean;
  onShowExplanation: () => void;
  timeSpent: number;
  onComplete?: (userInfo: { name: string; uniqueId: string; sessionId: string }) => void;
}

export function QuestionCard({
  question,
  selectedAnswer,
  onSelectAnswer,
  showExplanation,
  onShowExplanation,
  timeSpent,
  onComplete,
}: QuestionCardProps) {
  const [showUserInfoModal, setShowUserInfoModal] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '',
    uniqueId: '',
    sessionId: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete?.(userInfo);
    setShowUserInfoModal(false);
  };

  return (
    <div className="question-card no-select">
      <div className="w-full max-w-2xl bg-gray-900 rounded-lg shadow-xl p-6 space-y-6">
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Domain: {question.domain}</span>
          <div className="flex items-center gap-2 text-gray-400">
            <Clock size={16} />
            <span>{Math.floor(timeSpent / 60)}:{(timeSpent % 60).toString().padStart(2, '0')}</span>
          </div>
        </div>
        
        <h2 className="text-xl text-white font-semibold">{question.question}</h2>
        
        <div className="space-y-3">
          {question.options.map((option) => (
            <button
              key={option}
              onClick={() => onSelectAnswer(option)}
              className={`w-full p-4 rounded-lg text-left transition-colors ${
                selectedAnswer === option
                  ? selectedAnswer === question.correctAnswer
                    ? 'bg-green-600 text-white'
                    : 'bg-red-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {selectedAnswer && selectedAnswer !== question.correctAnswer && (
          <button
            onClick={onShowExplanation}
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
          >
            <HelpCircle size={16} />
            Need help understanding this?
          </button>
        )}

        {showExplanation && (
          <div className="mt-4 p-4 bg-gray-800 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">Explanation:</h3>
            <p className="text-gray-300">{question.explanation}</p>
          </div>
        )}

        {selectedAnswer && (
          <button
            onClick={() => setShowUserInfoModal(true)}
            className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Complete Test
          </button>
        )}

        {showUserInfoModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-gray-900 p-6 rounded-lg w-96">
              <h2 className="text-xl text-white font-semibold mb-4">Enter Your Information</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-400 mb-1">Name</label>
                  <input
                    type="text"
                    value={userInfo.name}
                    onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                    className="w-full bg-gray-800 text-white p-2 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-1">Unique ID</label>
                  <input
                    type="text"
                    value={userInfo.uniqueId}
                    onChange={(e) => setUserInfo({ ...userInfo, uniqueId: e.target.value })}
                    className="w-full bg-gray-800 text-white p-2 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-1">Session ID</label>
                  <input
                    type="text"
                    value={userInfo.sessionId}
                    onChange={(e) => setUserInfo({ ...userInfo, sessionId: e.target.value })}
                    className="w-full bg-gray-800 text-white p-2 rounded-lg"
                    required
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowUserInfoModal(false)}
                    className="flex-1 bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}