import { useState } from 'react'
import './App.css'
import Layout from './components/layout/layout'
import  WelcomeScreen  from './components/welcome_text/WelcomeScreen'

function App() {
  return (
    <Layout>
      {/* Welcome message - centered */}
      <WelcomeScreen />
    </Layout>
  )
}

export default App
