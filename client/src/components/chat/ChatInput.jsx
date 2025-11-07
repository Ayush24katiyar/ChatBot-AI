import React, { useState } from 'react'
import { PaperClipIcon, WrenchScrewdriverIcon, MicrophoneIcon } from '@heroicons/react/24/outline'

function ChatInput({ onSendMessage }) {
  const [message, setMessage] = useState('')

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (message.trim()) {
        onSendMessage(message)
        setMessage('')
      }
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex flex-col bg-white dark:bg-gray-800 rounded-3xl border border-gray-300 dark:border-gray-700 focus-within:border-gray-400 dark:focus-within:border-gray-600 shadow-lg shadow-gray-300 dark:shadow-gray-800">
        
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Describe your health ?"
          rows={1}
          className="grow bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 px-6 pt-5 pb-4 outline-none text-base resize-none rounded-t-3xl"
        />
        
        <div className="flex items-center justify-between px-4 pb-3">
          <div className="flex items-center gap-1">
            <button type="button" className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-all">
              <PaperClipIcon className="w-5 h-5" />
            </button>
            <button type="button" className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-all">
              <WrenchScrewdriverIcon className="w-5 h-5" />
            </button>
          </div>
          <button type="button" className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-all">
            <MicrophoneIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <p className="text-xs text-gray-400 dark:text-gray-500 text-center mt-4">
        Press Enter to send, Shift + Enter for new line
      </p>
    </div>
  )
}

export default ChatInput
