/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'

function Bookings() {
  return (
    <div>
      <body>
        {/* Sidebar */}
        <Sidebar />

        {/* Header */}
        <Header />

        {/* Main container */}
        <main className="nxl-container apps-container apps-calendar">
          <div className="nxl-content without-header nxl-full-content">

            <div className="main-content d-flex">
              <div className="content-sidebar content-sidebar-xl" data-scrollbar-target="#psScrollbarInit">
                <div className="content-sidebar-header bg-white sticky-top hstack justify-content-between">
                  <h4 className="fw-bolder mb-0">Bookings</h4>
                  <a href="javascript:void(0);" className="app-sidebar-close-trigger d-flex">
                    <i className="feather-x"></i>
                  </a>
                </div>
                <div className="content-sidebar-header">
                  <a href="javascript:void(0);" id="btn-new-schedule" className="btn btn-primary w-100" data-toggle="modal">
                    <i className="feather-calendar me-2"></i>
                    <span>Add New Booking</span>
                  </a>
                </div>
                <div className="content-sidebar-body">
                  <h2 className="px-4 fs-10 fw-bold text-uppercase my-4 text-muted text-spacing-1 text-truncate-1-line">
                    Events & Schedules
                  </h2>

                  {/* BEGIN: [Events] */}
                  <div className="p-4 border-top c-pointer single-item schedule-item">
                    <div className="d-flex align-items-start">
                      <div className="wd-50 ht-50 bg-soft-success text-success lh-1 d-flex align-items-center justify-content-center flex-column rounded-2 schedule-date">
                        <span className="fs-18 fw-bold mb-1 d-block">25</span>
                        <span className="fs-10 text-semibold text-uppercase d-block">Aug</span>
                      </div>
                      <div className="ms-3 schedule-body">
                        <div className="text-dark">
                          <h6 className="fw-bold my-1 text-truncate-1-line">Corporate Workshop</h6>
                          <span className="fs-11 fw-normal text-muted">10:00am - 1:00pm, Main Hall</span>
                          <p className="fs-12 fw-normal text-muted my-3 text-truncate-2-line">
                            Interactive workshop focused on team-building and leadership skills. Open to all employees.
                          </p>
                        </div>
                        <div className="img-group lh-0 ms-3 justify-content-start">
                          <a href="javascript:void(0)" className="avatar-image avatar-sm" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Alex Johnson">
                            <img src="assets/images/avatar/2.png" className="img-fluid" alt="image" />
                          </a>
                          <a href="javascript:void(0)" className="avatar-image avatar-sm" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Emily Davis">
                            <img src="assets/images/avatar/3.png" className="img-fluid" alt="image" />
                          </a>
                          <a href="javascript:void(0)" className="avatar-image avatar-sm" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Michael Lee">
                            <img src="assets/images/avatar/4.png" className="img-fluid" alt="image" />
                          </a>
                          <small>150 Guests</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BEGIN: [Events] */}
                  <div className="p-4 border-top c-pointer single-item schedule-item">
                    <div className="d-flex align-items-start">
                      <div className="wd-50 ht-50 bg-soft-indigo text-indigo lh-1 d-flex align-items-center justify-content-center flex-column rounded-2 schedule-date">
                        <span className="fs-18 fw-bold mb-1 d-block">30</span>
                        <span className="fs-10 text-semibold text-uppercase d-block">Aug</span>
                      </div>
                      <div className="ms-3 schedule-body">
                        <div className="text-dark">
                          <h6 className="fw-bold my-1 text-truncate-1-line">Wedding Reception</h6>
                          <span className="fs-11 fw-normal text-muted">6:00pm - 11:00pm, Banquet Room</span>
                          <p className="fs-12 fw-normal text-muted my-3 text-truncate-2-line">
                            Celebrating the union of Jane and John. Evening of dining and dancing.
                          </p>
                        </div>
                        <div className="img-group lh-0 ms-3 justify-content-start">
                          <a href="javascript:void(0)" className="avatar-image avatar-sm" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Sarah White">
                            <img src="assets/images/avatar/5.png" className="img-fluid" alt="image" />
                          </a>
                          <a href="javascript:void(0)" className="avatar-image avatar-sm" data-bs-toggle="tooltip" data-bs-trigger="hover" title="David Smith">
                            <img src="assets/images/avatar/6.png" className="img-fluid" alt="image" />
                          </a>
                          <small>200 Guests</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BEGIN: [Events] */}
                  <div className="p-4 border-top c-pointer single-item schedule-item">
                    <div className="d-flex align-items-start">
                      <div className="wd-50 ht-50 bg-soft-warning text-warning lh-1 d-flex align-items-center justify-content-center flex-column rounded-2 schedule-date">
                        <span className="fs-18 fw-bold mb-1 d-block">02</span>
                        <span className="fs-10 text-semibold text-uppercase d-block">Sep</span>
                      </div>
                      <div className="ms-3 schedule-body">
                        <div className="text-dark">
                          <h6 className="fw-bold my-1 text-truncate-1-line">Birthday Celebration</h6>
                          <span className="fs-11 fw-normal text-muted">1:00pm - 4:00pm, Private Lounge</span>
                          <p className="fs-12 fw-normal text-muted my-3 text-truncate-2-line">
                            Celebrating Lisa’s 30th birthday with a fun-filled afternoon of games and cake.
                          </p>
                        </div>
                        <div className="img-group lh-0 ms-3 justify-content-start">
                          <a href="javascript:void(0)" className="avatar-image avatar-sm" data-bs-toggle="tooltip" data-bs-trigger="hover" title="John Doe">
                            <img src="assets/images/avatar/2.png" className="img-fluid" alt="image" />
                          </a>
                          <a href="javascript:void(0)" className="avatar-image avatar-sm" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Anna Bell">
                            <img src="assets/images/avatar/3.png" className="img-fluid" alt="image" />
                          </a>
                          <small>50 Guests</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BEGIN: [Events] */}
                  <div className="p-4 border-top c-pointer single-item schedule-item">
                    <div className="d-flex align-items-start">
                      <div className="wd-50 ht-50 bg-soft-danger text-danger lh-1 d-flex align-items-center justify-content-center flex-column rounded-2 schedule-date">
                        <span className="fs-18 fw-bold mb-1 d-block">15</span>
                        <span className="fs-10 text-semibold text-uppercase d-block">Sep</span>
                      </div>
                      <div className="ms-3 schedule-body">
                        <div className="text-dark">
                          <h6 className="fw-bold my-1 text-truncate-1-line">Anniversary Dinner</h6>
                          <span className="fs-11 fw-normal text-muted">7:00pm - 10:00pm, VIP Room</span>
                          <p className="fs-12 fw-normal text-muted my-3 text-truncate-2-line">
                            Celebrating 10 years of marriage with an elegant dinner and live music.
                          </p>
                        </div>
                        <div className="img-group lh-0 ms-3 justify-content-start">
                          <a href="javascript:void(0)" className="avatar-image avatar-sm" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Michael Brown">
                            <img src="assets/images/avatar/4.png" className="img-fluid" alt="image" />
                          </a>
                          <a href="javascript:void(0)" className="avatar-image avatar-sm" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Laura Green">
                            <img src="assets/images/avatar/5.png" className="img-fluid" alt="image" />
                          </a>
                          <small>80 Guests</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* BEGIN: [Events] */}
                  <div className="p-4 border-top c-pointer single-item schedule-item">
                    <div className="d-flex align-items-start">
                      <div className="wd-50 ht-50 bg-soft-teal text-teal lh-1 d-flex align-items-center justify-content-center flex-column rounded-2 schedule-date">
                        <span className="fs-18 fw-bold mb-1 d-block">22</span>
                        <span className="fs-10 text-semibold text-uppercase d-block">Sep</span>
                      </div>
                      <div className="ms-3 schedule-body">
                        <div className="text-dark">
                          <h6 className="fw-bold my-1 text-truncate-1-line">Charity Gala</h6>
                          <span className="fs-11 fw-normal text-muted">8:00pm - 12:00am, Grand Ballroom</span>
                          <p className="fs-12 fw-normal text-muted my-3 text-truncate-2-line">
                            A grand gala to raise funds for local charities. Elegant attire required.
                          </p>
                        </div>
                        <div className="img-group lh-0 ms-3 justify-content-start">
                          <a href="javascript:void(0)" className="avatar-image avatar-sm" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Emily Johnson">
                            <img src="assets/images/avatar/6.png" className="img-fluid" alt="image" />
                          </a>
                          <a href="javascript:void(0)" className="avatar-image avatar-sm" data-bs-toggle="tooltip" data-bs-trigger="hover" title="James Williams">
                            <img src="assets/images/avatar/7.png" className="img-fluid" alt="image" />
                          </a>
                          <small>300 Guests</small>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>


              <div className="content-area" data-scrollbar-target="#psScrollbarInit">
                <div className="content-area-header sticky-top">
                  <div className="page-header-left d-flex align-items-center gap-2">
                    <a href="javascript:void(0);" className="app-sidebar-open-trigger me-2">
                      <i className="feather-align-left fs-20"></i>
                    </a>
                    <div id="menu" className="d-flex align-items-center justify-content-between">
                      <div className="d-flex calendar-action-btn">
                        <div className="dropdown me-1">
                          <button id="dropdownMenu-calendarType"
                            className="dropdown-toggle calendar-dropdown-btn" type="button"
                            data-bs-toggle="dropdown" data-bs-auto-close="outside"
                            data-bs-offset="0,17">
                            <i id="calendarTypeIcon" className="feather-grid calendar-icon fs-12 me-1"></i>
                            <span id="calendarTypeName">Sort By</span>
                          </button>
                          <ul className="dropdown-menu" role="menu"
                            aria-labelledby="dropdownMenu-calendarType">
                            <li role="presentation">
                              <div className="dropdown-item c-pointer" role="menuitem"
                                data-action="toggle-daily">
                                <i className="feather-list calendar-icon me-3"></i>
                                <span>Daily</span>
                              </div>
                            </li>
                            <li role="presentation">
                              <div className="dropdown-item c-pointer" role="menuitem"
                                data-action="toggle-weekly">
                                <i className="feather-umbrella calendar-icon me-3"></i>
                                <span>Weekly</span>
                              </div>
                            </li>
                            <li role="presentation">
                              <div className="dropdown-item c-pointer" role="menuitem"
                                data-action="toggle-weeks2">
                                <i className="feather-sliders calendar-icon me-3"></i>
                                <span>Weeks (2)</span>
                              </div>
                            </li>
                            <li role="presentation">
                              <div className="dropdown-item" role="menuitem" data-action="toggle-weeks3">
                                <i className="feather-framer calendar-icon me-3"></i>
                                <span>Weeks (3)</span>
                              </div>
                            </li>
                            <li role="presentation">
                              <div className="dropdown-item c-pointer" role="menuitem"
                                data-action="toggle-monthly">
                                <i className="feather-grid calendar-icon me-3"></i>
                                <span>Monthly</span>
                              </div>
                            </li>
                            <li role="presentation" className="dropdown-divider"></li>
                            <li role="presentation">
                              <div className="dropdown-item" role="menuitem"
                                data-action="toggle-workweek">
                                <div className="custom-control custom-checkbox">
                                  <input type="checkbox"
                                    className="custom-control-input chalendar-checkbox"
                                    id="viewWeekendsSchedules" value="toggle-workweek"
                                    defaultChecked />
                                  <label className="custom-control-label c-pointer"
                                    htmlFor="viewWeekendsSchedules">
                                    <span className="fs-12 fw-bold">Show Weekends</span>
                                  </label>
                                </div>
                              </div>
                            </li>
                            <li role="presentation">
                              <div className="dropdown-item" role="menuitem"
                                data-action="toggle-start-day-1">
                                <div className="custom-control custom-checkbox">
                                  <input type="checkbox"
                                    className="custom-control-input chalendar-checkbox"
                                    id="viewStartSchedules" value="toggle-start-day-1" />
                                  <label className="custom-control-label c-pointer"
                                    htmlFor="viewStartSchedules">
                                    <span className="fs-12 fw-bold">Start Week on Monday</span>
                                  </label>
                                </div>
                              </div>
                            </li>
                            <li role="presentation">
                              <div className="dropdown-item" role="menuitem"
                                data-action="toggle-narrow-weekend">
                                <div className="custom-control custom-checkbox">
                                  <input type="checkbox"
                                    className="custom-control-input chalendar-checkbox"
                                    id="viewNarrowerSchedules" value="toggle-narrow-weekend" />
                                  <label className="custom-control-label c-pointer"
                                    htmlFor="viewNarrowerSchedules">
                                    <span className="fs-12 fw-bold">Narrower than weekdays</span>
                                  </label>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="menu-navi d-none d-sm-flex">
                          <button type="button" className="move-today" data-action="move-today">
                            <i className="feather-clock calendar-icon me-1 fs-12"
                              data-action="move-today"></i>
                            <span>Today</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="page-header-right ms-auto">
                    <div className="hstack gap-2">
                      <div id="renderRange" className="render-range d-none d-sm-flex"></div>
                      <div className="btn-group gap-1 menu-navi" role="group">
                        <button type="button" className="avatar-text avatar-md move-day"
                          data-action="move-prev">
                          <i className="feather-chevron-left fs-12" data-action="move-prev"></i>
                        </button>
                        <button type="button" className="avatar-text avatar-md move-day"
                          data-action="move-next">
                          <i className="feather-chevron-right fs-12" data-action="move-next"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-area-body p-0">
                  <div id="tui-calendar-init"></div>
                </div>
                {/* [ Footer ] start */}
                <Footer />
                {/* [ Footer ] end */}
              </div>

            </div>
          </div>
        </main>
      </body>
    </div>
  )
}

export default Bookings