import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { BsSun, BsMoon } from 'react-icons/bs';

const Settings = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen p-6 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Settings</h1>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg ${
              theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {theme === 'dark' ? <BsSun size={20} /> : <BsMoon size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;