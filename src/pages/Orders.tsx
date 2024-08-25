/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'

function Orders() {
  return (
    <div>
      <body>
        <Sidebar />

        <Header />

        <main className="nxl-container">
          <div className="nxl-content">
            <div className="page-header">
              <div className="page-header-left d-flex align-items-center">
                <div className="page-header-title">
                  <h5 className="m-b-10">Orders</h5>
                </div>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  <li className="breadcrumb-item">Orders</li>
                </ul>
              </div>
            </div>

            <div className="main-content">
              <div className="row">
                {/* Today's Sales */}
                <div className="col-xxl-2 col-lg-4 col-md-6">
                  <div className="card stretch stretch-full">
                    <div className="card-body">
                      <p className="fs-11 fw-semibold text-uppercase text-muted">Total Sales</p>
                      <h4><span className="counter">200</span></h4>
                      <div className="hstack gap-2 mt-3">
                        <span className="fs-11 text-success badge bg-gray-100">
                          <i className="feather-trending-up fs-12 me-1"></i>
                          <span>56.67%</span>
                        </span>
                        <span className="fs-11 text-muted">Up from last week</span>
                      </div>
                    </div>
                  </div>
                </div>



                {/* Total Orders */}
                <div className="col-xxl-2 col-lg-4 col-md-6">
                  <div className="card stretch stretch-full">
                    <div className="card-body">
                      <p className="fs-11 fw-semibold text-uppercase text-muted">Total Orders</p>
                      <h4><span className="counter">67</span></h4>
                      <div className="hstack gap-2 mt-3">
                        <span className="fs-11 text-danger badge bg-gray-100">
                          <i className="feather-trending-down fs-12 me-1"></i>
                          <span>23.47%</span>
                        </span>
                        <span className="fs-11 text-muted">Down from last week</span>
                      </div>
                    </div>
                  </div>
                </div>


                {/* Order's Revenue */}
                <div className="col-xxl-2 col-lg-4 col-md-6">
                  <div className="card stretch stretch-full">
                    <div className="card-body">
                      <p className="fs-11 fw-semibold text-uppercase text-muted">Total Inventory</p>
                      <h4><span className="counter">200</span> Products</h4>
                      <div className="hstack gap-2 mt-3">
                        <span className="fs-11 text-warning badge bg-soft-warning">
                          <i className="feather-alert-circle fs-12"></i>
                        </span>
                        <span className="fs-11 text-muted">Number of products in stock</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Orders display */}
                <div className="content-area">
                  <div className="content-area-header mt-30">
                    <div className="page-header-left d-flex align-items-center gap-2">
                      <h5 className="fw-bolder mb-0">Orders</h5>
                      <div className="dropdown">
                        <a href="javascript:void(0)" className="btn btn-light-brand dropdown-toggle" data-bs-toggle="dropdown" data-bs-offset="0,18">Sort By</a>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li><a className="dropdown-item" href="javascript:void(0)">Completed</a></li>
                          <li><a className="dropdown-item" href="javascript:void(0)">In Progress</a></li>
                          <li><a className="dropdown-item" href="javascript:void(0)">Cancelled</a></li>
                        </ul>
                      </div>

                    </div>
                    <div className="page-header-right ms-auto">
                      <div className="hstack gap-2">
                        <div className="hstack">
                          <a href="javascript:void(0)" className="search-form-open-toggle">
                            <div className="avatar-text avatar-md" data-bs-toggle="tooltip"
                              data-bs-trigger="hover" title="Search">
                              <i className="feather feather-search"></i>
                            </div>
                          </a>
                          <form className="search-form" style={{ display: 'none' }}>
                            <div className="search-form-inner">
                              <a href="javascript:void(0)" className="search-form-close-toggle">
                                <div className="avatar-text avatar-md" data-bs-toggle="tooltip"
                                  data-bs-trigger="hover" title="Search Close">
                                  <i className="feather feather-arrow-left"></i>
                                </div>
                              </a>
                              <input type="search" className="py-3 px-0 border-0 w-100" id="notesSearch"
                                placeholder="Search..." />
                            </div>
                          </form>
                        </div>
                        <a href="javascript:void(0)" className="d-none d-sm-flex">
                          <div className="avatar-text avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover"
                            title="Previous">
                            <i className="feather feather-chevron-left"></i>
                          </div>
                        </a>
                        <a href="javascript:void(0)" className="d-none d-sm-flex">
                          <div className="avatar-text avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover"
                            title="Next">
                            <i className="feather feather-chevron-right"></i>
                          </div>
                        </a>
                        <div className="dropdown d-none d-sm-flex">
                          <a href="javascript:void(0)"
                            className="btn btn-light-brand btn-sm rounded-pill dropdown-toggle"
                            data-bs-toggle="dropdown" data-bs-offset="0,23">Filter by</a>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li><a className="dropdown-item" href="javascript:void(0)">Time & Date</a></li>
                            <li><a className="dropdown-item" href="javascript:void(0)">Week</a></li>
                            <li><a className="dropdown-item" href="javascript:void(0)">Month</a></li>
                            <li><a className="dropdown-item" href="javascript:void(0)">Year</a></li>
                            <li className="dropdown-divider"></li>
                            <li><a className="dropdown-item active" href="javascript:void(0)">Newest</a></li>
                            <li><a className="dropdown-item" href="javascript:void(0)">Oldest</a></li>
                            <li className="dropdown-divider"></li>
                            <li><a className="dropdown-item" href="javascript:void(0)">Ascending</a></li>
                            <li><a className="dropdown-item" href="javascript:void(0)">Descending</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div><br />

                  {/* Order boxes */}
                  <div className="row">
                    {/* Order 1 */}
                    <div className="col-xxl-4 col-md-6 d-xxl-none">
                      <div className="card mb-4 stretch stretch-full">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between storage-icon-name">
                            <div className="d-flex align-items-center">
                              <div className="avatar-image avatar-lg rounded">
                                <img src="assets/images/orders/10.jpg" className="img-fluid" alt="" />
                              </div>
                              <div className="d-block ms-3">
                                <a href="javascript:void(0)" className="fs-13 fw-bold d-block text-truncate-1-line"
                                  data-bs-toggle="offcanvas" data-bs-target="#fileFolderDetailsOffcanvas">
                                  Refuel Max Meal
                                </a>
                                <small className="fw-normal text-muted text-truncate-1-line">
                                  ORD#001: <span style={{ fontWeight: 700 }}>Adebowale Akinwale</span>
                                </small>
                              </div>
                            </div>
                            <div className="dropdown">
                              <a href="javascript:void(0)" className="avatar-text avatar-sm" data-bs-toggle="dropdown">
                                <i className="feather-more-vertical"></i>
                              </a>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <a href="javascript:void(0)" className="dropdown-item" data-bs-toggle="offcanvas"
                                    data-bs-target="#fileFolderDetailsOffcanvas">
                                    <i className="feather-info me-3"></i>
                                    <span>Order Details</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0)" className="dropdown-item file-download">
                                    <i className="feather-download me-3"></i>
                                    <span>Download Data</span>
                                  </a>
                                </li>
                                <li className="dropdown-divider"></li>
                                <li>
                                  <a href="javascript:void(0)" className="dropdown-item successAlertMessage">
                                    <i className="feather-star me-3"></i>
                                    <span>View Feedback</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="mt-4 storage-status">
                            <div className="d-flex justify-content-between align-items-center mb-1">
                              <h2 className="fs-10 fw-bold text-uppercase tx-spacing-1 mb-0">Status</h2>
                              <div className="fs-10 text-muted text-uppercase">
                                <span className="text-truncate-1-line">In Progress</span>
                              </div>
                            </div>
                            <div className="progress ht-5">
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: '60%' }}
                              ></div>
                            </div>

                            <div className="d-flex align-items-center mt-2">
                              <div className="me-1">
                                <i className="feather-clock fs-10 text-muted"></i>
                              </div>
                              <div className="fs-11 fw-normal text-muted text-truncate-1-line">
                                Rider has picked up the order
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Order 2 */}
                    <div className="col-xxl-4 col-md-6 d-xxl-none">
                      <div className="card mb-4 stretch stretch-full">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between storage-icon-name">
                            <div className="d-flex align-items-center">
                              <div className="avatar-image avatar-lg rounded">
                                <img src="assets/images/orders/10.jpg" className="img-fluid" alt="" />
                              </div>
                              <div className="d-block ms-3">
                                <a href="javascript:void(0)" className="fs-13 fw-bold d-block text-truncate-1-line"
                                  data-bs-toggle="offcanvas" data-bs-target="#fileFolderDetailsOffcanvas">
                                  Refuel Max Meal
                                </a>
                                <small className="fw-normal text-muted text-truncate-1-line">
                                  ORD#002: <span style={{ fontWeight: 700 }}>Cynthia Joseph</span>
                                </small>
                              </div>
                            </div>
                            <div className="dropdown">
                              <a href="javascript:void(0)" className="avatar-text avatar-sm" data-bs-toggle="dropdown">
                                <i className="feather-more-vertical"></i>
                              </a>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <a href="javascript:void(0)" className="dropdown-item" data-bs-toggle="offcanvas"
                                    data-bs-target="#fileFolderDetailsOffcanvas">
                                    <i className="feather-info me-3"></i>
                                    <span>Order Details</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0)" className="dropdown-item file-download">
                                    <i className="feather-download me-3"></i>
                                    <span>Download Data</span>
                                  </a>
                                </li>
                                <li className="dropdown-divider"></li>
                                <li>
                                  <a href="javascript:void(0)" className="dropdown-item successAlertMessage">
                                    <i className="feather-star me-3"></i>
                                    <span>View Feedback</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="mt-4 storage-status">
                            <div className="d-flex justify-content-between align-items-center mb-1">
                              <h2 className="fs-10 fw-bold text-uppercase tx-spacing-1 mb-0">Status</h2>
                              <div className="fs-10 text-muted text-uppercase">
                                <span className="text-truncate-1-line">Delivered</span>
                              </div>
                            </div>
                            <div className="progress ht-5">
                              <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: '100%' }}
                              ></div>
                            </div>

                            <div className="d-flex align-items-center mt-2">
                              <div className="me-1">
                                <i className="feather-clock fs-10 text-muted"></i>
                              </div>
                              <div className="fs-11 fw-normal text-muted text-truncate-1-line">
                                The order has been delivered
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Order 3 */}
                    <div className="col-xxl-4 col-md-6 d-xxl-none">
                      <div className="card mb-4 stretch stretch-full">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between storage-icon-name">
                            <div className="d-flex align-items-center">
                              <div className="avatar-image avatar-lg rounded">
                                <img src="assets/images/orders/10.jpg" className="img-fluid" alt="" />
                              </div>
                              <div className="d-block ms-3">
                                <a href="javascript:void(0)" className="fs-13 fw-bold d-block text-truncate-1-line"
                                  data-bs-toggle="offcanvas" data-bs-target="#fileFolderDetailsOffcanvas">
                                  Refuel Max Meal
                                </a>
                                <small className="fw-normal text-muted text-truncate-1-line">
                                  ORD#003: <span style={{ fontWeight: 700 }}>Adebowale Akinwale</span>
                                </small>
                              </div>
                            </div>
                            <div className="dropdown">
                              <a href="javascript:void(0)" className="avatar-text avatar-sm" data-bs-toggle="dropdown">
                                <i className="feather-more-vertical"></i>
                              </a>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <a href="javascript:void(0)" className="dropdown-item" data-bs-toggle="offcanvas"
                                    data-bs-target="#fileFolderDetailsOffcanvas">
                                    <i className="feather-info me-3"></i>
                                    <span>Order Details</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0)" className="dropdown-item file-download">
                                    <i className="feather-download me-3"></i>
                                    <span>Download Data</span>
                                  </a>
                                </li>
                                <li className="dropdown-divider"></li>
                                <li>
                                  <a href="javascript:void(0)" className="dropdown-item successAlertMessage">
                                    <i className="feather-star me-3"></i>
                                    <span>View Feedback</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="mt-4 storage-status">
                            <div className="d-flex justify-content-between align-items-center mb-1">
                              <h2 className="fs-10 fw-bold text-uppercase tx-spacing-1 mb-0">Status</h2>
                              <div className="fs-10 text-muted text-uppercase">
                                <span className="text-truncate-1-line">In Progress</span>
                              </div>
                            </div>
                            <div className="progress ht-5">
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: '60%' }}
                              ></div>
                            </div>

                            <div className="d-flex align-items-center mt-2">
                              <div className="me-1">
                                <i className="feather-clock fs-10 text-muted"></i>
                              </div>
                              <div className="fs-11 fw-normal text-muted text-truncate-1-line">
                                Rider has picked up the order
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Order 4 */}
                    <div className="col-xxl-4 col-md-6 d-xxl-none">
                      <div className="card mb-4 stretch stretch-full">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between storage-icon-name">
                            <div className="d-flex align-items-center">
                              <div className="avatar-image avatar-lg rounded">
                                <img src="assets/images/orders/11.jpg" className="img-fluid" alt="" />
                              </div>
                              <div className="d-block ms-3">
                                <a href="javascript:void(0)" className="fs-13 fw-bold d-block text-truncate-1-line"
                                  data-bs-toggle="offcanvas" data-bs-target="#fileFolderDetailsOffcanvas">
                                  Yam Fries Meal
                                </a>
                                <small className="fw-normal text-muted text-truncate-1-line">
                                  ORD#004: <span style={{ fontWeight: 700 }}>Grace Emeka</span>
                                </small>
                              </div>
                            </div>
                            <div className="dropdown">
                              <a href="javascript:void(0)" className="avatar-text avatar-sm" data-bs-toggle="dropdown">
                                <i className="feather-more-vertical"></i>
                              </a>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <a href="javascript:void(0)" className="dropdown-item" data-bs-toggle="offcanvas"
                                    data-bs-target="#fileFolderDetailsOffcanvas">
                                    <i className="feather-info me-3"></i>
                                    <span>Order Details</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0)" className="dropdown-item file-download">
                                    <i className="feather-download me-3"></i>
                                    <span>Download Data</span>
                                  </a>
                                </li>
                                <li className="dropdown-divider"></li>
                                <li>
                                  <a href="javascript:void(0)" className="dropdown-item successAlertMessage">
                                    <i className="feather-star me-3"></i>
                                    <span>View Feedback</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="mt-4 storage-status">
                            <div className="d-flex justify-content-between align-items-center mb-1">
                              <h2 className="fs-10 fw-bold text-uppercase tx-spacing-1 mb-0">Status</h2>
                              <div className="fs-10 text-muted text-uppercase">
                                <span className="text-truncate-1-line">In Progress</span>
                              </div>
                            </div>
                            <div className="progress ht-5">
                              <div
                                className="progress-bar bg-warning"
                                role="progressbar"
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: '40%' }}
                              ></div>
                            </div>

                            <div className="d-flex align-items-center mt-2">
                              <div className="me-1">
                                <i className="feather-clock fs-10 text-muted"></i>
                              </div>
                              <div className="fs-11 fw-normal text-muted text-truncate-1-line">
                                The store is preparing the order
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Order 5 */}
                    <div className="col-xxl-4 col-md-6 d-xxl-none">
                      <div className="card mb-4 stretch stretch-full">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between storage-icon-name">
                            <div className="d-flex align-items-center">
                              <div className="avatar-image avatar-lg rounded">
                                <img src="assets/images/orders/6.jpeg" className="img-fluid" alt="" />
                              </div>
                              <div className="d-block ms-3">
                                <a href="javascript:void(0)" className="fs-13 fw-bold d-block text-truncate-1-line"
                                  data-bs-toggle="offcanvas" data-bs-target="#fileFolderDetailsOffcanvas">
                                  Weekend Combo Deal
                                </a>
                                <small className="fw-normal text-muted text-truncate-1-line">
                                  ORD#005: <span style={{ fontWeight: 700 }}>Tim Mujong</span>
                                </small>
                              </div>
                            </div>
                            <div className="dropdown">
                              <a href="javascript:void(0)" className="avatar-text avatar-sm" data-bs-toggle="dropdown">
                                <i className="feather-more-vertical"></i>
                              </a>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <a href="javascript:void(0)" className="dropdown-item" data-bs-toggle="offcanvas"
                                    data-bs-target="#fileFolderDetailsOffcanvas">
                                    <i className="feather-info me-3"></i>
                                    <span>Order Details</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0)" className="dropdown-item file-download">
                                    <i className="feather-download me-3"></i>
                                    <span>Download Data</span>
                                  </a>
                                </li>
                                <li className="dropdown-divider"></li>
                                <li>
                                  <a href="javascript:void(0)" className="dropdown-item successAlertMessage">
                                    <i className="feather-star me-3"></i>
                                    <span>View Feedback</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="mt-4 storage-status">
                            <div className="d-flex justify-content-between align-items-center mb-1">
                              <h2 className="fs-10 fw-bold text-uppercase tx-spacing-1 mb-0">Status</h2>
                              <div className="fs-10 text-muted text-uppercase">
                                <span className="text-truncate-1-line">Delivered</span>
                              </div>
                            </div>
                            <div className="progress ht-5">
                              <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: '100%' }}
                              ></div>
                            </div>

                            <div className="d-flex align-items-center mt-2">
                              <div className="me-1">
                                <i className="feather-clock fs-10 text-muted"></i>
                              </div>
                              <div className="fs-11 fw-normal text-muted text-truncate-1-line">
                                The order has been delivered
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Order 6 */}
                    <div className="col-xxl-4 col-md-6 d-xxl-none">
                      <div className="card mb-4 stretch stretch-full">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between storage-icon-name">
                            <div className="d-flex align-items-center">
                              <div className="avatar-image avatar-lg rounded">
                                <img src="assets/images/orders/2.jpg" className="img-fluid" alt="" />
                              </div>
                              <div className="d-block ms-3">
                                <a href="javascript:void(0)" className="fs-13 fw-bold d-block text-truncate-1-line"
                                  data-bs-toggle="offcanvas" data-bs-target="#fileFolderDetailsOffcanvas">
                                  Chickwizz Meal
                                </a>
                                <small className="fw-normal text-muted text-truncate-1-line">
                                  ORD#006: <span style={{ fontWeight: 700 }}>Ebube Mujong</span>
                                </small>
                              </div>
                            </div>
                            <div className="dropdown">
                              <a href="javascript:void(0)" className="avatar-text avatar-sm" data-bs-toggle="dropdown">
                                <i className="feather-more-vertical"></i>
                              </a>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <a href="javascript:void(0)" className="dropdown-item" data-bs-toggle="offcanvas"
                                    data-bs-target="#fileFolderDetailsOffcanvas">
                                    <i className="feather-info me-3"></i>
                                    <span>Order Details</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0)" className="dropdown-item file-download">
                                    <i className="feather-download me-3"></i>
                                    <span>Download Data</span>
                                  </a>
                                </li>
                                <li className="dropdown-divider"></li>
                                <li>
                                  <a href="javascript:void(0)" className="dropdown-item successAlertMessage">
                                    <i className="feather-star me-3"></i>
                                    <span>View Feedback</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="mt-4 storage-status">
                            <div className="d-flex justify-content-between align-items-center mb-1">
                              <h2 className="fs-10 fw-bold text-uppercase tx-spacing-1 mb-0">Status</h2>
                              <div className="fs-10 text-muted text-uppercase">
                                <span className="text-truncate-1-line">Cancelled</span>
                              </div>
                            </div>
                            <div className="progress ht-5">
                              <div
                                className="progress-bar bg-danger"
                                role="progressbar"
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: '10%' }}
                              ></div>
                            </div>

                            <div className="d-flex align-items-center mt-2">
                              <div className="me-1">
                                <i className="feather-clock fs-10 text-muted"></i>
                              </div>
                              <div className="fs-11 fw-normal text-muted text-truncate-1-line">
                                The customer cancelled the order
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Top selling products */}
                  <div className="col-xxl-4">
                    <div className="card stretch stretch-full">
                      <div className="card-header">
                        <h5 className="card-title">Top Selling Products</h5>

                        <div className="page-header-right ms-auto">
                          <div className="page-header-right-items">
                            <div className="d-flex d-md-none">
                              <a href="javascript:void(0)" className="page-header-right-close-toggle">
                                <i className="feather-arrow-left me-2"></i>
                                <span>Back</span>
                              </a>
                            </div>
                            <div className="d-flex align-items-center gap-2 page-header-right-items-wrapper">
                              <div id="reportrange" className="reportrange-picker d-flex align-items-center">
                                <span className="reportrange-picker-field"></span>
                              </div>
                              <div className="dropdown filter-dropdown">
                                <a
                                  className="btn btn-md btn-light-brand"
                                  data-bs-toggle="dropdown"
                                  data-bs-offset="0, 10"
                                  data-bs-auto-close="outside"
                                >
                                  <i className="feather-filter me-2"></i>
                                  <span>Filter By</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <div className="dropdown-item">
                                    <div className="custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="Role" checked />
                                      <label className="custom-control-label c-pointer" htmlFor="Role">Name</label>
                                    </div>
                                  </div>
                                  <div className="dropdown-item">
                                    <div className="custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="Team" checked />
                                      <label className="custom-control-label c-pointer" htmlFor="Team">Type</label>
                                    </div>
                                  </div>
                                  <div className="dropdown-item">
                                    <div className="custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="Email" checked />
                                      <label className="custom-control-label c-pointer" htmlFor="Email">Date Ordered</label>
                                    </div>
                                  </div>
                                  <div className="dropdown-item">
                                    <div className="custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="Member" checked />
                                      <label className="custom-control-label c-pointer" htmlFor="Member">Amount Ordered</label>
                                    </div>
                                  </div>
                                  
                                  <div className="dropdown-divider"></div>
                                  
                                  <a href="javascript:void(0);" className="dropdown-item">
                                    <i className="feather-filter me-3"></i>
                                    <span>Manage Filters</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="d-md-none d-flex align-items-center">
                            <a href="javascript:void(0)" className="page-header-right-open-toggle">
                              <i className="feather-align-right fs-20"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body p-0">
                        <div className="table-responsive">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td>
                                  <div className="hstack gap-3">
                                    <div className="avatar-image avatar-lg rounded">
                                      <img className='img-fluid' src="assets/images/orders/11.jpg" alt="" />
                                    </div>
                                    <div>
                                      <a href="javascript:void(0);" className="d-block">Yam Fries Combo</a>
                                      <span className="fs-12 text-muted">Meal</span>
                                    </div>
                                  </div>
                                </td>
                                <td>₦1,200</td>
                                <td className="text-end">50 sold</td>
                              </tr>

                              <tr>
                                <td>
                                  <div className="hstack gap-3">
                                    <div className="avatar-image avatar-lg rounded">
                                      <img className='img-fluid' src="assets/images/orders/11.jpg" alt="" />
                                    </div>
                                    <div>
                                      <a href="javascript:void(0);" className="d-block">Yam Fries Combo</a>
                                      <span className="fs-12 text-muted">Meal</span>
                                    </div>
                                  </div>
                                </td>
                                <td>₦1,200</td>
                                <td className="text-end">50 sold</td>
                              </tr>

                              <tr>
                                <td>
                                  <div className="hstack gap-3">
                                    <div className="avatar-image avatar-lg rounded">
                                      <img className='img-fluid' src="assets/images/orders/11.jpg" alt="" />
                                    </div>
                                    <div>
                                      <a href="javascript:void(0);" className="d-block">Yam Fries Combo</a>
                                      <span className="fs-12 text-muted">Meal</span>
                                    </div>
                                  </div>
                                </td>
                                <td>₦1,200</td>
                                <td className="text-end">50 sold</td>
                              </tr>

                              <tr>
                                <td>
                                  <div className="hstack gap-3">
                                    <div className="avatar-image avatar-lg rounded">
                                      <img className='img-fluid' src="assets/images/orders/11.jpg" alt="" />
                                    </div>
                                    <div>
                                      <a href="javascript:void(0);" className="d-block">Yam Fries Combo</a>
                                      <span className="fs-12 text-muted">Meal</span>
                                    </div>
                                  </div>
                                </td>
                                <td>₦1,200</td>
                                <td className="text-end">50 sold</td>
                              </tr>

                              <tr>
                                <td>
                                  <div className="hstack gap-3">
                                    <div className="avatar-image avatar-lg rounded">
                                      <img className='img-fluid' src="assets/images/orders/11.jpg" alt="" />
                                    </div>
                                    <div>
                                      <a href="javascript:void(0);" className="d-block">Yam Fries Combo</a>
                                      <span className="fs-12 text-muted">Meal</span>
                                    </div>
                                  </div>
                                </td>
                                <td>₦1,200</td>
                                <td className="text-end">50 sold</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br/>

                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </main>
      </body>
    </div>
  )
}

export default Orders