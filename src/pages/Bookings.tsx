/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'

function Bookings() {
  return (
    <div>
      <body>
        <Sidebar />

        <Header />

        <main className="nxl-container apps-notes">
          <div className="nxl-content without-header nxl-full-content">
            {/* Main content */}
            <div className="main-content d-flex">
              <div className="content-area" data-scrollbar-target="#psScrollbarInit">
                <div className="page-header">
                  <div className="page-header-left d-flex align-items-center gap-2">
                    <a href="javascript:void(0);" className="app-sidebar-open-trigger me-2">
                      <i className="feather-align-left fs-20"></i>
                    </a>
                    <h5 className="m-b-10">Bookings</h5>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item"><a href="/">Home</a></li>
                      <li className="breadcrumb-item">Bookings</li>
                    </ul>
                  </div>

                  <div className="page-header-right ms-auto">
                    <div className="hstack gap-2">
                      <div className="hstack">
                        <a href="javascript:void(0)" className="search-form-open-toggle">
                          <div className="avatar-text avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Search">
                            <i className="feather feather-search"></i>
                          </div>
                        </a>
                        <form className="search-form" style={{ display: 'none' }}>
                          <div className="search-form-inner">
                            <a href="javascript:void(0)" className="search-form-close-toggle">
                              <div className="avatar-text avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Search Close">
                                <i className="feather feather-arrow-left"></i>
                              </div>
                            </a>
                            <input type="search" className="py-3 px-0 border-0 w-100" id="notesSearch" placeholder="Search..." />
                          </div>
                        </form>
                      </div>
                      <a href="javascript:void(0)" className="d-none d-sm-flex">
                        <div className="avatar-text avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Newest">
                          <i className="feather feather-chevron-left"></i>
                        </div>
                      </a>
                      <a href="javascript:void(0)" className="d-none d-sm-flex">
                        <div className="avatar-text avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Oldest">
                          <i className="feather feather-chevron-right"></i>
                        </div>
                      </a>
                      <div className="dropdown d-none d-sm-flex">
                        <a href="javascript:void(0)" className="btn btn-light-brand btn-sm rounded-pill dropdown-toggle" data-bs-toggle="dropdown" data-bs-offset="0,23">
                          Filter By
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li><a className="dropdown-item" href="javascript:void(0)">Event Type</a></li>
                          <li><a className="dropdown-item" href="javascript:void(0)">Number of Guests <br />(Lowest to Highest)</a></li>
                          <li><a className="dropdown-item" href="javascript:void(0)">Number of Guests <br />(Highest to Highest)</a></li>
                          <li><a className="dropdown-item" href="javascript:void(0)">Time & Date of Event</a></li>
                          <li className="dropdown-divider"></li>
                          <li><a className="dropdown-item active" href="javascript:void(0)">Newest</a></li>
                          <li><a className="dropdown-item" href="javascript:void(0)">Oldest</a></li>
                          <li className="dropdown-divider"></li>
                          <li><a className="dropdown-item" href="javascript:void(0)">Ascending</a></li>
                          <li><a className="dropdown-item" href="javascript:void(0)">Descending</a></li>
                        </ul>
                      </div>
                      <div className="content-sidebar-header">
                        <a href="javascript:void(0);" className="btn btn-primary w-100" id="add-notes">
                          <i className="feather-plus me-2"></i>
                          <span>Add New Booking</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="content-area-body pb-0">
                  <div className="row note-has-grid" id="note-full-container">
                    <div className="col-xxl-4 col-xl-6 col-lg-4 col-sm-6 single-note-item all-category note-important note-tasks">
                      <div className="card card-body mb-4 stretch stretch-full">
                        <span className="side-stick"></span>
                        <img src="../assets/images/avatar/1.html" alt="" />
                        <h5 className="note-title text-truncate w-75 mb-1" data-noteheading="Anniversary Dinner">
                          Anniversary Dinner <i className="point bi bi-circle-fill ms-1 fs-7"></i>
                        </h5>
                        <p className="fs-11 text-muted note-date">
                          <span className="text-success" style={{ fontWeight: 600 }}>#BKID-124571</span> • 11 March 2025
                        </p>
                        <div className="note-content flex-grow-1">
                          <p className="text-muted note-inner-content text-truncate-3-line" data-notecontent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vitae iure, quo harum excepturi laudantium eum earum accusantium labore libero maiores illo soluta.">
                            I would like to make a reservation for a dinner date for my wife and I's anniversary dinner. We'd be inviting a few of our closest friends.
                          </p>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                          <small>Number of Guests: <span className="badge bg-soft-success text-success" style={{ fontWeight: 400 }}>25</span></small>
                          <span className="avatar-text avatar-sm"><i className="feather-star favourite-note"></i></span>
                          <div className="ms-auto">
                            <span className="avatar-text avatar-sm"><i className="feather-eye"></i></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xxl-4 col-xl-6 col-lg-4 col-sm-6 single-note-item all-category note-business note-tasks">
                      <div className="card card-body mb-4 stretch stretch-full">
                        <span className="side-stick"></span>
                        <h5 className="note-title text-truncate w-75 mb-1" data-noteheading="Company Board Meeting">
                          Company Board Meeting <i className="point bi bi-circle-fill ms-1 fs-7"></i>
                        </h5>
                        <p className="fs-11 text-muted note-date">
                          <span className="text-warning" style={{ fontWeight: 600 }}>#BKID-124572</span> • 11 March 2025
                        </p>
                        <div className="note-content flex-grow-1">
                          <p className="text-muted note-inner-content text-truncate-3-line" data-notecontent="Company board meeting to discuss next steps for our agency in the coming year. About 15 members would be present.">
                            Company board meeting to discuss next steps for our agency in the coming year. About 15 of our board members would be present.
                          </p>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                          <small>Number of Guests: <span className="badge bg-soft-warning text-warning" style={{ fontWeight: 400 }}>25</span></small>
                          <span className="avatar-text avatar-sm"><i className="feather-star favourite-note"></i></span>
                          <div className="ms-auto">
                            <span className="avatar-text avatar-sm"><i className="feather-eye"></i></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xxl-4 col-xl-6 col-lg-4 col-sm-6 single-note-item all-category note-social note-archive note-personal">
                      <div className="card card-body mb-4 stretch stretch-full">
                        <span className="side-stick"></span>
                        <h5 className="note-title text-truncate w-75 mb-1" data-noteheading="Joy Agu's 25th Birthday Bash">
                          Joy Agu's 25th Birthday Bash <i className="point bi bi-circle-fill ms-1 fs-7"></i>
                        </h5>
                        <p className="fs-11 text-muted note-date">19 October 2025</p>
                        <div className="note-content flex-grow-1">
                          <p className="text-muted note-inner-content text-truncate-3-line" data-notecontent="I would be celebrating my birthday with my family and friends. 30 guests in total.">
                            I would be celebrating my birthday with my family and friends. 30 guests in total.
                          </p>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                          <small>Number of Guests: <span className="badge bg-soft-danger text-danger" style={{ fontWeight: 400 }}>30</span></small>
                          <span className="avatar-text avatar-sm"><i className="feather-star favourite-note"></i></span>
                          <div className="ms-auto">
                            <span className="avatar-text avatar-sm"><i className="feather-eye"></i></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xxl-4 col-xl-6 col-lg-4 col-sm-6 single-note-item all-category note-social note-archive">
                      <div className="card card-body mb-4 stretch stretch-full">
                        <span className="side-stick"></span>
                        <h5 className="note-title text-truncate w-75 mb-1" data-noteheading="Google Dev Fest">
                          Google Dev Fest <i className="point bi bi-circle-fill ms-1 fs-7"></i>
                        </h5>
                        <p className="fs-11 text-muted note-date">01 September 2024</p>
                        <div className="note-content flex-grow-1">
                          <p className="text-muted note-inner-content text-truncate-3-line" data-notecontent="">
                            We would like to book your restaurant space for our Google Developers Festival hangout.
                          </p>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                          <small>
                            Number of Guests: <span className="badge bg-soft-dark text-dark" style={{ fontWeight: 400 }}>300</span>
                          </small>
                          <span className="avatar-text avatar-sm">
                            <i className="feather-star favourite-note"></i>
                          </span>
                          <div className="ms-auto">
                            <span className="avatar-text avatar-sm">
                              <i className="feather-eye"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xxl-4 col-xl-6 col-lg-4 col-sm-6 single-note-item all-category note-important note-archive">
                      <div className="card card-body mb-4 stretch stretch-full">
                        <span className="side-stick"></span>
                        <h5 className="note-title text-truncate w-75 mb-1" data-noteheading="Dinner for Two">
                          Dinner for Two <i className="point bi bi-circle-fill ms-1 fs-7"></i>
                        </h5>
                        <p className="fs-11 text-muted note-date">11 April 2025</p>
                        <div className="note-content flex-grow-1">
                          <p className="text-muted note-inner-content text-truncate-3-line" data-notecontent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vitae iure, quo harum excepturi laudantium eum earum accusantium labore libero maiores illo soluta.">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vitae iure, quo harum excepturi laudantium eum earum accusantium labore libero maiores illo soluta.
                          </p>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                          <small>
                            Number of Guests: <span className="badge bg-soft-success text-success" style={{ fontWeight: 400 }}>2</span>
                          </small>
                          <span className="avatar-text avatar-sm">
                            <i className="feather-star favourite-note"></i>
                          </span>
                          <div className="ms-auto">
                            <span className="avatar-text avatar-sm">
                              <i className="feather-eye"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xxl-4 col-xl-6 col-lg-4 col-sm-6 single-note-item all-category note-social note-works note-personal">
                      <div className="card card-body mb-4 stretch stretch-full">
                        <span className="side-stick"></span>
                        <h5 className="note-title text-truncate w-75 mb-1" data-noteheading="Meeting with Mr. Jojo">
                          Meeting with Mr. Jojo <i className="point bi bi-circle-fill ms-1 fs-7"></i>
                        </h5>
                        <p className="fs-11 text-muted note-date">19 October 2023</p>
                        <div className="note-content flex-grow-1">
                          <p className="text-muted note-inner-content text-truncate-3-line" data-notecontent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vitae iure, quo harum excepturi laudantium eum earum accusantium labore libero maiores illo soluta.">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vitae iure, quo harum excepturi laudantium eum earum accusantium labore libero maiores illo soluta.
                          </p>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                          <small>
                            Number of Guests: <span className="badge bg-soft-primary text-primary" style={{ fontWeight: 400 }}>5</span>
                          </small>
                          <span className="avatar-text avatar-sm">
                            <i className="feather-star favourite-note"></i>
                          </span>
                          <div className="ms-auto">
                            <span className="avatar-text avatar-sm">
                              <i className="feather-eye"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>



                  </div>
                </div>

                <Footer />
              </div>

            </div>
          </div>
        </main>
      </body>
    </div>
  )
}

export default Bookings