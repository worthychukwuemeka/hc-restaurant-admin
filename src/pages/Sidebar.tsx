import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaHome, 
  FaBox, 
  FaBookOpen, 
  FaWallet, 
  FaCalendarAlt, 
  FaUsers, 
  FaBook, 
  FaShoppingCart, 
  FaCreditCard, 
  FaQuestionCircle, 
  FaCog, 
  FaSignOutAlt 
} from 'react-icons/fa';

function Sidebar() {
  const location = useLocation();

  // Function to determine if a link is active
  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-pink-100 text-red-500 font-bold' : '';
  };

  return (
    <div className="sidebar">
      <nav className="nxl-navigation">
        <div className="navbar-wrapper">
          <div className="m-header">
            <Link to="/" className="b-brand">
              {/* ========   change your logo here   ============ */}
              <img src="assets/images/logo-full.png" alt="Logo" className="logo logo-lg" />
              <img src="assets/images/logo-abbr.png" alt="Logo" className="logo logo-sm" />
            </Link>
          </div>
          <div className="navbar-content">
            <ul className="nxl-navbar">
              <li className="nxl-item nxl-caption">
                <label>Storefront Panels</label>
              </li>
              <li className="nxl-item nxl-hasmenu">
                <Link to="/dashboard" className={`nxl-link ${isActive('/dashboard')}`}>
                  <span className="nxl-micon"><FaHome /></span>
                  <span className="nxl-mtext">Dashboard</span>
                </Link>
              </li>
              <li className="nxl-item nxl-hasmenu">
                <Link to="/orders" className={`nxl-link ${isActive('/orders')}`}>
                  <span className="nxl-micon"><FaBox /></span>
                  <span className="nxl-mtext">Orders</span>
                </Link>
              </li>
              <li className="nxl-item nxl-hasmenu">
                <Link to="/menu" className={`nxl-link ${isActive('/menu')}`}>
                  <span className="nxl-micon"><FaBookOpen /></span>
                  <span className="nxl-mtext">Menu</span>
                </Link>
              </li>
              <li className="nxl-item nxl-hasmenu">
                <Link to="/wallet" className={`nxl-link ${isActive('/wallet')}`}>
                  <span className="nxl-micon"><FaWallet /></span>
                  <span className="nxl-mtext">Wallet</span>
                </Link>
              </li>

              <li className="nxl-item nxl-caption">
                <label>Storefront Pages</label>
              </li>
              <li className="nxl-item nxl-hasmenu">
                <Link to="/bookings" className={`nxl-link ${isActive('/bookings')}`}>
                  <span className="nxl-micon"><FaCalendarAlt /></span>
                  <span className="nxl-mtext">Bookings</span>
                </Link>
              </li>
              <li className="nxl-item nxl-hasmenu">
                <Link to="/community" className={`nxl-link ${isActive('/community')}`}>
                  <span className="nxl-micon"><FaUsers /></span>
                  <span className="nxl-mtext">Community</span>
                </Link>
              </li>
              <li className="nxl-item nxl-hasmenu">
                <Link to="/howto-guides" className={`nxl-link ${isActive('/howto-guides')}`}>
                  <span className="nxl-micon"><FaBook /></span>
                  <span className="nxl-mtext">HowTo Guides</span>
                </Link>
              </li>
              <li className="nxl-item nxl-hasmenu">
                <Link to="/marketplace" className={`nxl-link ${isActive('/marketplace')}`}>
                  <span className="nxl-micon"><FaShoppingCart /></span>
                  <span className="nxl-mtext">Marketplace</span>
                </Link>
              </li>
              <li className="nxl-item nxl-hasmenu">
                <Link to="/subscriptions" className={`nxl-link ${isActive('/subscriptions')}`}>
                  <span className="nxl-micon"><FaCreditCard /></span>
                  <span className="nxl-mtext">Subscriptions</span>
                </Link>
              </li>

              <li className="nxl-item nxl-caption">
                <label>Help & Settings</label>
              </li>
              <li className="nxl-item nxl-hasmenu">
                <Link to="/request-help" className={`nxl-link ${isActive('/request-help')}`}>
                  <span className="nxl-micon"><FaQuestionCircle /></span>
                  <span className="nxl-mtext">Request Help</span>
                </Link>
              </li>
              <li className="nxl-item nxl-hasmenu">
                <Link to="/settings" className={`nxl-link ${isActive('/settings')}`}>
                  <span className="nxl-micon"><FaCog /></span>
                  <span className="nxl-mtext">Settings</span>
                </Link>
              </li>
              <li className="nxl-item nxl-caption">
                <label>Logout</label>
              </li>
              <li className="nxl-item nxl-hasmenu">
                <Link to="/logout" className={`nxl-link ${isActive('/logout')}`}>
                  <span className="nxl-micon"><FaSignOutAlt /></span>
                  <span className="nxl-mtext">Sign Out</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
