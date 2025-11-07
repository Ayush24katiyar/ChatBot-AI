import { useState } from 'react'
import './App.css'
import Layout from './components/layout/layout'
import WelcomeScreen from './components/welcome_text/WelcomeScreen'
import MessageArea from './components/message/MessageArea'

function App() {
  const [hasMessages, setHasMessages] = useState(false)
  const [messages, setMessages] = useState([])
  const [isLoadingBotResponse, setIsLoadingBotResponse] = useState(false)

  const addMessage = (text, sender) => {
    setMessages(prev => [...prev, { text, sender }])
  }

  const handleSendMessage = (text) => {
    // Add user message
    addMessage(text, 'user')
    
    if (!hasMessages) {
      setHasMessages(true)
    }

    // Simulate API call (replace with actual API call later)
    setIsLoadingBotResponse(true)
    
    setTimeout(() => {
      // Add bot response
      addMessage('Bot is overcooked pay us for better result !', 'bot')
      setIsLoadingBotResponse(false)
    }, 2000)
  }

  return (
    <Layout 
      hasMessages={hasMessages} 
      setHasMessages={setHasMessages}
      onSendMessage={handleSendMessage}
    >
      {!hasMessages && <WelcomeScreen />}
      {hasMessages && <MessageArea messages={messages} isLoadingBotResponse={isLoadingBotResponse} />}
    </Layout>
  )
}

export default App
