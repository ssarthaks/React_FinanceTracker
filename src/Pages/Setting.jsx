import React, { useState, useEffect } from "react";
import { useTrans } from "../Context/FinanceContext";

function Setting() {
  const [theme, setTheme] = useState("light");
  const [notifications, setNotifications] = useState(true);

  const handleSave = (event) => {
    event.preventDefault();
    alert("Your Preferences have been saved");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-center font-bold text-indigo-600 text-xl">
        User Settings
      </h1>
      <form className="space-y-4" onSubmit={handleSave}>
        <div className="flex flex-col space-y-2">
          <label htmlFor="theme" className="font-medium text-gray-700">
            Theme
          </label>
          <select
            id="theme"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <input
            id="notifications"
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            className="h-5 w-5"
          />
          <label htmlFor="notifications" className="font-medium text-gray-700">
            Enable Notifications
          </label>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
}

export default Setting;
