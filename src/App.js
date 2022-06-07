import React, { createContext, useState } from 'react';
import './style.css';

import Home from './components/Home';
import Profile from './components/Profile';
import Explore from './components/Explore';
import Messages from './components/Messages';
import News from './components/News';
import Notifications from './components/Notifications';
import Sports from './components/Sports';
import Videos from './components/Videos';
import More from './components/More';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const ThemeContext = createContext({
  color: 'darkslategrey',
  changeColor: (color) => {},
});

export const ThemeProvider = ({ children }) => {
  const [color, setColor] = useState('darkslategrey');

  const changeColor = (color) => {
    setColor(color);
  };

  return (
    <ThemeContext.Provider value={{ color: color, changeColor: changeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/news" element={<News />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/more" element={<More />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
