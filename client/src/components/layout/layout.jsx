import React from 'react'
import Header from '../header/header'
import ChatInputContainer from '../chat/ChatInputContainer'
function Layout({children}) {
  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <main className="grow overflow-auto">
        {children}
      </main>

     
    </div>
  )
}

export default Layout