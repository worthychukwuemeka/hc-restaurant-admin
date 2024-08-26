/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { AlignLeft, ArrowRight, ArrowLeft } from 'react-feather'

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Get the current hour
  const currentHour = new Date().getHours();

  // Determine the greeting based on the time of day
  let greeting = '';
  if (currentHour < 12) {
    greeting = 'Good morning';
  } else if (currentHour < 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }



  return (
    <div>
      <header className="nxl-header">
        <div className="header-wrapper">
          <div className="header-left d-flex align-items-center gap-4">
            <a href="#" onClick={toggleSidebar} className="nxl-head-mobile-toggler" id="mobile-collapse">
              <div className="hamburger hamburger--arrowturn">
                <div className="hamburger-box">
                  <div className="hamburger-inner"></div>
                </div>
              </div>
            </a>

            {/* [Start] nxl-navigation-toggle */}
            <div className="nxl-navigation-toggle">
              <a
                href="#"
                id="menu-mini-button"
                style={{ display: isSidebarOpen ? 'none' : 'block' }}
                onClick={toggleSidebar}
              >
                <i className="feather-align-left"></i>
              </a>
              <a
                href="#"
                id="menu-expend-button"
                style={{ display: isSidebarOpen ? 'block' : 'none' }}
                onClick={toggleSidebar}
              >
                <i className="feather-arrow-right"></i>
              </a>
            </div>
            {/* [End] nxl-navigation-toggle */}


            <div className="p-4">
              <h4>
                {greeting}, <span style={{ color: 'red' }}>Chicken Republic</span>
              </h4>
            </div>

          </div>

          <div className="header-right ms-auto">
            <div className="d-flex align-items-center">
              <div className="dropdown nxl-h-item nxl-header-search">
                <a href="#" className="nxl-head-link me-0" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                  <i className="feather-search"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-end nxl-h-dropdown nxl-search-dropdown">
                  <div className="input-group search-form">
                    <span className="input-group-text">
                      <i className="feather-search fs-6 text-muted"></i>
                    </span>
                    <input type="text" className="form-control search-input-field" placeholder="Search...." />
                    <span className="input-group-text">
                      <button type="button" className="btn-close"></button>
                    </span>
                  </div>
                  <div className="dropdown-divider mt-0"></div>
                  <div className="search-items-wrapper">
                    <div className="searching-for px-4 py-2">
                      <p className="fs-11 fw-medium text-muted">I'm searching for...</p>
                      <div className="d-flex flex-wrap gap-1"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dropdown nxl-h-item">
                <a
                  className="nxl-head-link me-3"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  data-bs-auto-close="outside"
                >
                  <i className="feather-bell"></i>
                  <span className="badge bg-danger nxl-h-badge">3</span>
                </a>
                <div className="dropdown-menu dropdown-menu-end nxl-h-dropdown nxl-notifications-menu">
                  <div className="d-flex justify-content-between align-items-center notifications-head">
                    <h6 className="fw-bold text-dark mb-0">Notifications</h6>
                    <a
                      href="javascript:void(0);"
                      className="fs-11 text-success text-end ms-auto"
                      data-bs-toggle="tooltip"
                      title="Mark all as Read"
                    >
                      <i className="feather-check"></i>
                      <span>Mark all as Read</span>
                    </a>
                  </div>
                  <div className="notifications-item">
                    <img src="assets/images/avatar/22.png" alt="" className="rounded me-3 border" />
                    <div className="notifications-desc">
                      <a href="javascript:void(0);" className="font-body text-truncate-2-line">
                        <span className="fw-semibold text-dark">New Order Received</span> A new order has been placed in your restaurant.
                      </a>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="notifications-date text-muted border-bottom border-bottom-dashed">5 minutes ago</div>
                        <div className="d-flex align-items-center float-end gap-2">
                          <a
                            href="javascript:void(0);"
                            className="d-block wd-8 ht-8 rounded-circle bg-gray-300"
                            data-bs-toggle="tooltip"
                            title="Mark as Read"
                          ></a>
                          <a href="javascript:void(0);" className="text-danger" data-bs-toggle="tooltip" title="Remove">
                            <i className="feather-x fs-12"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="notifications-item">
                    <img src="assets/images/avatar/21.png" alt="" className="rounded me-3 border" />
                    <div className="notifications-desc">
                      <a href="javascript:void(0);" className="font-body text-truncate-2-line">
                        <span className="fw-semibold text-dark">Inventory Low</span> Your stock for the ingredient "Tomatoes" is running low.
                      </a>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="notifications-date text-muted border-bottom border-bottom-dashed">20 minutes ago</div>
                        <div className="d-flex align-items-center float-end gap-2">
                          <a
                            href="javascript:void(0);"
                            className="d-block wd-8 ht-8 rounded-circle bg-gray-300"
                            data-bs-toggle="tooltip"
                            title="Mark as Read"
                          ></a>
                          <a href="javascript:void(0);" className="text-danger" data-bs-toggle="tooltip" title="Remove">
                            <i className="feather-x fs-12"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="notifications-item">
                    <img src="assets/images/avatar/23.png" alt="" className="rounded me-3 border" />
                    <div className="notifications-desc">
                      <a href="javascript:void(0);" className="font-body text-truncate-2-line">
                        <span className="fw-semibold text-dark">Staff Shift Update</span> Your staff member "John Doe" has updated their shift.
                      </a>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="notifications-date text-muted border-bottom border-bottom-dashed">45 minutes ago</div>
                        <div className="d-flex align-items-center float-end gap-2">
                          <a
                            href="javascript:void(0);"
                            className="d-block wd-8 ht-8 rounded-circle bg-gray-300"
                            data-bs-toggle="tooltip"
                            title="Mark as Read"
                          ></a>
                          <a href="javascript:void(0);" className="text-danger" data-bs-toggle="tooltip" title="Remove">
                            <i className="feather-x fs-12"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center notifications-footer">
                    <a href="javascript:void(0);" className="fs-13 fw-semibold text-dark">All Notifications</a>
                  </div>
                </div>
              </div>



              <div className="nxl-h-item dark-light-theme">
                <a href="javascript:void(0);" className="nxl-head-link me-0 dark-button">
                  <i className="feather-moon"></i>
                </a>
                <a href="javascript:void(0);" className="nxl-head-link me-0 light-button" style={{ display: 'none' }}>
                  <i className="feather-sun"></i>
                </a>
              </div>

              <div className="dropdown nxl-h-item">
                <a href="javascript:void(0);" data-bs-toggle="dropdown" role="button" data-bs-auto-close="outside">
                  <img src="assets/images/vendors/4.png" style={{ width: '40px', height: '40px' }} alt="user-image" className="img-fluid user-avtar me-0" />
                </a>
                <div className="dropdown-menu dropdown-menu-end nxl-h-dropdown nxl-user-dropdown">
                  <div className="dropdown-header">
                    <div className="d-flex align-items-center">
                      <img src="assets/images/vendors/4.png" style={{ width: '40px', height: '40px' }} alt="user-image" className="img-fluid user-avtar" />
                      <div>
                        <h6 className="text-dark mb-0">
                          Chicken Republic <span className="badge bg-soft-danger text-danger ms-1">Fast Food</span>
                        </h6>
                        <span className="fs-10 fw-medium text-muted">Ademola Adetokunbo Crescent, Wuse II</span>
                      </div>
                    </div>
                  </div>
                  <a href="javascript:void(0);" className="dropdown-item" data-bs-toggle="dropdown">
                    <span className="hstack">
                      <i
                        className="wd-10 ht-10 border border-2 border-gray-1 bg-success rounded-circle me-2"></i>
                      <span>Active</span>
                    </span>
                    <i className="feather-chevron-right ms-auto me-0"></i>
                  </a>
                  <div className="dropdown-menu">

                    <a href="javascript:void(0);" className="dropdown-item">
                      <span className="hstack">
                        <i
                          className="wd-10 ht-10 border border-2 border-gray-1 bg-success rounded-circle me-2"></i>
                        <span>Active</span>
                      </span>
                    </a>
                    <a href="javascript:void(0);" className="dropdown-item">
                      <span className="hstack">
                        <i
                          className="wd-10 ht-10 border border-2 border-gray-1 bg-danger rounded-circle me-2"></i>
                        <span>Inactive</span>
                      </span>
                    </a>
                    <a href="javascript:void(0);" className="dropdown-item">
                      <span className="hstack">
                        <i
                          className="wd-10 ht-10 border border-2 border-gray-1 bg-warning rounded-circle me-2"></i>
                        <span>Disabled</span>
                      </span>
                    </a>

                  </div>
                  <div className="dropdown-divider"></div>
                  <a href="javascript:void(0);" className="dropdown-item">
                    <i className="feather-user"></i>
                    <span>Store Details</span>
                  </a>
                  <a href="javascript:void(0);" className="dropdown-item">
                    <i className="feather-settings"></i>
                    <span>Account Settings</span>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a href="auth-login-minimal.html" className="dropdown-item">
                    <i className="feather-log-out"></i>
                    <span>Logout</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header