import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SalahTracker from './Components/SalahTracker';
import PrayerStatus from './Components/PrayerStatus';
import HomePage from './Components/HomePage'; 
import { PrayerStatusProvider } from './Components/PrayerStatusContext';
import "./App.css";

const App = () => {
  return (
    <PrayerStatusProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/salah-tracker" element={<SalahTracker />} />
          <Route path="/prayer-status" element={<PrayerStatus />} />
        </Routes>
      </Router>
    </PrayerStatusProvider>
  );
};

export default App;



