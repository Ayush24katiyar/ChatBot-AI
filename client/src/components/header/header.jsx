import React from 'react'
import ToggleButton from '../toggle_button/Toggle'
import GitHubButton from '../toggle_button/github'

function Header() {
  return (
    <header className='flex justify-end items-center px-4 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white '>
       <div className="space-x-3">
        
        <GitHubButton  />

        <ToggleButton />
        </div> 
    </header>
  )
}

export default Header