import React from 'react';
import { FiGithub } from 'react-icons/fi';  // Or use: FaGithub from 'react-icons/fa'

function GitHubButton() {
  return (
    <a 
      href="https://github.com/ayush24katiyar/ChatBot-AI" 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-2 rounded bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-200 transition-colors shadow-md shadow-gray-300 dark:shadow-gray-900 hover:bg-gray-400 dark:hover:bg-gray-600 inline-flex items-center justify-center"
      aria-label="View on GitHub"
    >
      <FiGithub className="w-5 h-5 " />
    </a>
  );
}

export default GitHubButton;
