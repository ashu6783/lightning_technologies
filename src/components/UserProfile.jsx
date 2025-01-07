import React from 'react';
import { 
  BiUser, 
  BiBell, 
  BiBuildings,
  BiCog,
  BiQuestionMark,
  BiInfoCircle,
  BiLogOut
} from 'react-icons/bi';

const ProfileDropdown = () => {
  const menuItems = [
    { icon: <BiUser className="w-5 h-5" />, label: 'Profile' },
    { icon: <BiBell className="w-5 h-5" />, label: 'Notifications' },
    { icon: <BiBuildings className="w-5 h-5" />, label: 'Change Firm' },
    { icon: <BiCog className="w-5 h-5" />, label: 'Settings' },
    { icon: <BiQuestionMark className="w-5 h-5" />, label: 'Help/Support' },
    { icon: <BiInfoCircle className="w-5 h-5" />, label: 'About (Version Info)' },
    { icon: <BiLogOut className="w-5 h-5" />, label: 'Logout' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg w-64 py-2">
      <div className="text-gray-500 text-sm px-4 py-2">
        Profile dropdown
      </div>
      
      <div className="mt-1">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="w-full px-4 py-2 flex items-center gap-3 hover:bg-gray-100 text-gray-700 text-sm"
          >
            <div className="p-2 bg-gray-100 rounded-lg">
              {item.icon}
            </div>
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfileDropdown;