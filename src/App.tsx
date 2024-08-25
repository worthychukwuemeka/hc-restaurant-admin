import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Menu from './pages/Menu';
import Wallet from './pages/Wallet';
import Bookings from './pages/Bookings';
import Community from './pages/Community';
import HowToGuides from './pages/HowToGuides';
import Marketplace from './pages/Marketplace';
import Subscriptions from './pages/Subscriptions';
import RequestHelp from './pages/RequestHelp';
import Settings from './pages/Settings';
import RegisterRestaurant from './pages/RegisterRestaurant';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import VerifyOTP from './pages/VerifyOTP';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/community" element={<Community />} />
        <Route path="/how-to-guides" element={<HowToGuides />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/request-help" element={<RequestHelp />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/register-restaurant" element={<RegisterRestaurant />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
      </Routes>
    </Router>
  );
};

export default App;
