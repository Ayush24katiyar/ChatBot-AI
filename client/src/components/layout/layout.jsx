import React from 'react'
import Header from '../header/header'
import ChatInputContainer from '../chat/ChatInputContainer'
import Sidebar from '../sidebar/Sidebar'

function Layout({ children, hasMessages, setHasMessages, onSendMessage }) {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      
      <div className="flex flex-col grow">
        <Header />
        
        <main className={`overflow-auto ${
          hasMessages 
            ? 'grow' 
            : 'grow flex items-center justify-center'
        }`}>
          {children}
        </main>
        
        <ChatInputContainer 
          setHasMessages={setHasMessages}
          onSendMessage={onSendMessage}
        />
      </div>
    </div>
  )
}

export default Layout
