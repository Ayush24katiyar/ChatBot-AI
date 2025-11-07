import React from 'react'
import Header from '../header/header'
import ChatInputContainer from '../chat/ChatInputContainer'
import Sidebar from '../sidebar/Sidebar'  // Fix: import from Sidebar.jsx, not folder

function Layout({ children }) {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar on the left */}
      <Sidebar />
      
      {/* Main content area */}
      <div className="flex flex-col grow">
        <Header />
        
        <main className="grow overflow-auto">
          {children}
        </main>
        
        {/* Input at the bottom */}
        <ChatInputContainer />
      </div>
    </div>
  )
}

export default Layout
