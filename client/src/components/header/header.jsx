import React from 'react'
import ToggleButton from '../theme_toggle/Toggle'

function Header() {
  return (
    <header className='flex justify-end items-center px-4 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white '>
        <ToggleButton />

    </header>
  )
}

export default Header