import React from 'react';

function WelcomeScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-2 px-4 ">
      <h1 className="text-6xl font-extralight dark:text-white text-white ">
        <span className='text-gray-900 dark:text-white  '>
            Pulse
            </span>
            
            <span className="text-blue-500 font-light  ">AI</span>
      </h1>
      <p className="text-gray-400 text-base">
        What's bothering you today ?
      </p>
    </div>
  );
}

export default WelcomeScreen;
