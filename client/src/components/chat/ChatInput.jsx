import React, { useState } from 'react';
import { PaperClipIcon, WrenchScrewdriverIcon, MicrophoneIcon } from '@heroicons/react/24/outline';

function ChatInput() {
  const [message, setMessage] = useState('');

  const handleKeyDown = (e) => {
    // Enter to submit, Shift+Enter for new line
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (message.trim()) {
        console.log('Sending message:', message);
        setMessage('');
      }
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative flex flex-col bg-white dark:bg-gray-800 rounded-3xl border border-gray-300 dark:border-gray-700 focus-within:border-gray-400 dark:focus-within:border-gray-600 transition-all shadow-lg shadow-gray-300 dark:shadow-gray-800">
        
        {/* Input field on top */}
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Describe your health ?"
          rows={1}
          className="grow bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 px-6 pt-5 pb-4 outline-none text-base resize-none rounded-t-3xl"
        />
        
        {/* Icon buttons below - NO BORDER */}
        <div className="flex items-center justify-between px-4 pb-3">
          {/* Left side icons */}
          <div className="flex items-center gap-1">
            <button 
              type="button" 
              className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-all"
              aria-label="Add"
            >
              <PaperClipIcon className="w-5 h-5" />
            </button>
            
            <button 
              type="button" 
              className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-all"
              aria-label="Tools"
            >
              <WrenchScrewdriverIcon className="w-5 h-5" />
            </button>
          </div>
          
          {/* Right side - Voice input */}
          <button 
            type="button" 
            className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-all"
            aria-label="Voice input"
          >
            <MicrophoneIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      {/* Helper text */}
      <p className="text-xs text-gray-400 dark:text-gray-500 text-center  mt-4">
        Press Enter to send, Shift + Enter for new line
      </p>
    </div>
  );
}

export default ChatInput;
