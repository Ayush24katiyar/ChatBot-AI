import { useState } from 'react';
import { 
  Bars3Icon, 
  PlusIcon,
  Cog6ToothIcon 
} from '@heroicons/react/24/outline';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`${isOpen ? 'w-64' : 'w-16'} h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 flex flex-col`}>
      
      {/* Header with toggle */}
      <div className="p-4 flex items-center justify-between">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          aria-label="Toggle Sidebar"
        >
          <Bars3Icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </button>
        
        {isOpen && (
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <PlusIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
        )}
      </div>

      {/* Empty space (for future features) */}
      <div className="grow" />

      {/* Bottom Settings */}
      {isOpen && (
        <div className="p-3 border-t border-gray-200 dark:border-gray-700">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <Cog6ToothIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            <span className="text-sm text-gray-700 dark:text-gray-300">Settings</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
