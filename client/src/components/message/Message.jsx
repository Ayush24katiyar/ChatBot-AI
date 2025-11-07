import React from 'react'
import { SparklesIcon } from '@heroicons/react/24/outline'

function Message({ message, isUser, isLoading }) {
  return (
    <div className={`mb-4 flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-2xl px-3 py-2 rounded-2xl ${
        isUser 
          ? 'bg-green-100 dark:bg-green-900/40' 
          : ''
      }`}>
        
        {isLoading ? (
          <div className="flex items-center gap-2">
            <SparklesIcon className="w-5 h-5 text-blue-500 animate-spin" />
            <span className="text-gray-600 dark:text-gray-400 text-sm">Thinking...</span>
          </div>
        ) : (
          <p className={`text-base leading-relaxed ${
            isUser 
              ? 'text-gray-900 dark:text-white font-medium' 
              : 'text-gray-700 dark:text-gray-200'
          }`}>
            {message}
          </p>
        )}
      </div>
    </div>
  )
}

export default Message
