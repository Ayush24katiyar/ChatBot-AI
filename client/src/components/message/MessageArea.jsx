import React, { useRef, useEffect } from 'react'
import Message from './Message'

function MessageArea({ messages, isLoadingBotResponse }) {
  const endRef = useRef(null)

  // Auto scroll to bottom
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoadingBotResponse])

  return (
    <div className="flex-1 overflow-y-auto px-4">
      {/* Messages container - matches input width */}
      <div className="w-full max-w-3xl mx-auto">
        {messages.map((msg, idx) => (
          <Message 
            key={idx} 
            message={msg.text} 
            isUser={msg.sender === 'user'}
            isLoading={false}
          />
        ))}
        
        {/* Show loading state while waiting for bot response */}
        {isLoadingBotResponse && (
          <Message 
            message=""
            isUser={false}
            isLoading={true}
          />
        )}
        
        <div ref={endRef} />
      </div>
    </div>
  )
}

export default MessageArea
