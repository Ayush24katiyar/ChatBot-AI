import React from 'react'
import ChatInput from './ChatInput'

function ChatInputContainer({ onSendMessage }) {
  return (
    <div className="w-full px-4 py-6 bg-gray-50 dark:bg-gray-900">
      <ChatInput onSendMessage={onSendMessage} />
    </div>
  )
}

export default ChatInputContainer
