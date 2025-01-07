import React from 'react';
import { BiBell } from "react-icons/bi";
import { FiUserPlus } from "react-icons/fi";
import { IoRefreshOutline } from "react-icons/io5";
import { IoDownloadOutline } from "react-icons/io5";
import { Card, CardHeader, CardTitle, CardContent } from './ui';

const NotificationPanel = () => {
  const notifications = [
    {
      icon: <BiBell className="w-5 h-5 text-gray-600" />,
      title: "You created a new Firm",
      time: "Just now"
    },
    {
      icon: <FiUserPlus className="w-5 h-5 text-gray-600" />,
      title: "New user registered.",
      time: "59 minutes ago"
    },
    {
      icon: <IoRefreshOutline className="w-5 h-5 text-gray-600" />,
      title: "Your subscription is renewed",
      time: "12 hours ago"
    },
    {
      icon: <IoDownloadOutline className="w-5 h-5 text-gray-600" />,
      title: "New Update has recieved",
      time: "3 days ago"
    }
  ];

  return (
    <Card className="w-80 bg-white shadow-lg">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Notifications</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notifications.map((notification, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="p-1 bg-gray-100 rounded-full">
                {notification.icon}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                <p className="text-xs text-gray-500">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationPanel;