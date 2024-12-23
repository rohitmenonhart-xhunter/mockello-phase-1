import React, { useState } from 'react';
import { Brain } from 'lucide-react';
import { fullscreenUtils } from '../utils/fullscreen';

interface AuthScreenProps {
  onAuthenticate: (uniqueKey: string) => void;
}

const VALID_KEYS = [
  '8870846032', '9791442861', '7598944272', '9080961281', 
  '9566492386', '9176214100', '9025631192', '7200881812', 
  '6369380752', '7639444173', '7550067124', '9345611197', 
  '8072193558', '7200992100', '9080137719', '6374707065', 
  '7695808615' ,'7550000805'
];


export function AuthScreen({ onAuthenticate }: AuthScreenProps) {
  const [uniqueKey, setUniqueKey] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedKey = uniqueKey.trim().toUpperCase();
    
    if (VALID_KEYS.includes(trimmedKey)) {
      try {
        await fullscreenUtils.requestFullscreen(document.documentElement);
        onAuthenticate(trimmedKey);
      } catch (error) {
        setError('Fullscreen mode is required. Please allow fullscreen and try again.');
      }
    } else {
      setError('Invalid access key. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="mb-6 text-yellow-400 text-sm text-center">
          <p>⚠️ Important Notice ⚠️</p>
          <p>1:This test requires fullscreen mode. Exiting fullscreen will end your session.</p>
          <p>2:Students should 1st undergo the GENERAL APTITUDE questions and then their CORE questions.</p>
          <p>3:It's recommended for students to complete all the questions in a particular domain before tapping on "complete test" .</p>

        </div>
        <div className="flex flex-col items-center mb-8">
          <Brain className="w-12 h-12 text-blue-500 mb-4" />
          <h1 className="text-3xl font-bold text-white text-center">
            ⭐ MOCKELLO ⭐
          </h1>
          <p className="text-gray-400 mt-2">Aptitude Training Platform - Phase 1</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-400 mb-2">Access Key</label>
            <input
              type="text"
              value={uniqueKey}
              onChange={(e) => {
                setUniqueKey(e.target.value);
                setError('');
              }}
              className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              placeholder="Enter your access key"
              required
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Enter Platform
          </button>
        </form>
      </div>
    </div>
  );
} 
