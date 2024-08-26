/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'

function Wallet() {
  return (
    <div>
      <Sidebar />

      <Header />

      {/* Main content */}
      <main className="nxl-container">
        <div className="nxl-content">

          {/*Page header*/}
          <div className="page-header">
            <div className="page-header-left d-flex align-items-center">
              <div className="page-header-title">
                <h5 className="m-b-10">Wallet</h5>
              </div>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item">Wallet</li>
              </ul>
            </div>
            <div className="page-header-right ms-auto">
              <div className="page-header-right-items">
                <div className="d-flex d-md-none">
                  <a href="javascript:void(0)" className="page-header-right-close-toggle">
                    <i className="feather-arrow-left me-2"></i>
                    <span>Back</span>
                  </a>
                </div>
                <div className="d-flex align-items-center gap-2 page-header-right-items-wrapper">
                  <div className="dropdown">
                    <a className="btn btn-icon btn-light-brand" data-bs-toggle="dropdown" data-bs-offset="0, 10"
                      data-bs-auto-close="outside">
                      <i className="feather-download-cloud me-2"></i>
                      <span>Download Table As</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="bi bi-filetype-pdf me-3"></i>
                        <span>PDF</span>
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="bi bi-filetype-csv me-3"></i>
                        <span>CSV</span>
                      </a>

                      <div className="dropdown-divider"></div>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="bi bi-printer me-3"></i>
                        <span>Print Table</span>
                      </a>
                    </div>
                  </div>

                  <div className="dropdown">
                    <a className="btn btn-icon btn-primary" data-bs-toggle="dropdown" data-bs-offset="0, 10"
                      data-bs-auto-close="outside">
                      <i className="feather-filter me-2"></i>
                      <span>Filter Table</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="feather-eye me-3"></i>
                        <span>All</span>
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="feather-send me-3"></i>
                        <span>Sent</span>
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="feather-book-open me-3"></i>
                        <span>Open</span>
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="feather-archive me-3"></i>
                        <span>Draft</span>
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="feather-bell me-3"></i>
                        <span>Revised</span>
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="feather-shield-off me-3"></i>
                        <span>Declined</span>
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="feather-check me-3"></i>
                        <span>Accepted</span>
                      </a>
                      <div className="dropdown-divider"></div>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="feather-briefcase me-3"></i>
                        <span>Leads</span>
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="feather-wifi-off me-3"></i>
                        <span>Expired</span>
                      </a>
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="feather-users me-3"></i>
                        <span>Customers</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="main-content">
            <div className="row">
              {/* Balance */}
              <div className="col-xxl-3 col-md-6">
                <div className="card stretch stretch-full">
                  <div className="card-body">
                    <div className="hstack justify-content-between">
                      <div>
                        <h4 className="text-success">₦300,215</h4>
                        <div className="text-muted">Store Balance</div>
                      </div>
                      <div className="text-end">
                        <i className="feather-eye fs-2"></i>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer bg-success py-3">
                    <div className="hstack justify-content-between">
                      <p className="text-white mb-0">2.9% change</p>
                      <div className="text-end">
                        <i className="feather-trending-up text-white"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Today's Earnings */}
              <div className="col-xxl-3 col-md-6">
                <div className="card stretch stretch-full">
                  <div className="card-body">
                    <div className="hstack justify-content-between">
                      <div>
                        <h4 className="text-warning">₦10,254</h4>
                        <div className="text-muted">Today Earnings</div>
                      </div>
                      <div className="text-end">
                        <i className="feather-pie-chart fs-2"></i>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer bg-warning py-3">
                    <div className="hstack justify-content-between">
                      <p className="text-white mb-0">3.6% change</p>
                      <div className="text-end">
                        <i className="feather-trending-down text-white"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Total Transactions */}
              <div className="col-xxl-3 col-md-6">
                <div className="card stretch stretch-full">
                  <div className="card-body">
                    <div className="hstack justify-content-between">
                      <div>
                        <h4 className="text-teal">214</h4>
                        <div className="text-muted">Total Transactions</div>
                      </div>
                      <div className="text-end">
                        <i className="feather-shopping-bag fs-2"></i>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer bg-teal py-3">
                    <div className="hstack justify-content-between">
                      <p className="text-white mb-0">2.3% change</p>
                      <div className="text-end">
                        <i className="feather-trending-up text-white"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Orders Received */}
              <div className="col-xxl-3 col-md-6">
                <div className="card stretch stretch-full">
                  <div className="card-body">
                    <div className="hstack justify-content-between">
                      <div>
                        <h4 className="text-danger">₦25,345</h4>
                        <div className="text-muted">Orders Received</div>
                      </div>
                      <div className="text-end">
                        <i className="feather-shopping-cart fs-2"></i>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer bg-primary py-3">
                    <div className="hstack justify-content-between">
                      <p className="text-white mb-0">4.2% change</p>
                      <div className="text-end">
                        <i className="feather-trending-down text-white"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="card stretch stretch-full">
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table table-hover" id="paymentList">
                        <thead>
                          <tr>
                            <th className="wd-30">
                              <div className="btn-group mb-1">
                                <div className="custom-control custom-checkbox ms-1">
                                  <input type="checkbox" className="custom-control-input" id="checkAllPayment" />
                                  <label className="custom-control-label" htmlFor="checkAllPayment"></label>
                                </div>
                              </div>
                            </th>
                            <th>Transaction ID</th>
                            <th>Client</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Reference No</th>
                            <th>Status</th>
                            <th className="text-end">Actions</th>
                          </tr>
                        </thead>

                        {/* Table body */}
                        <tbody>
                          {/* Item one */}
                          <tr className="single-item">
                            <td>
                              <div className="item-checkbox ms-1">
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input checkbox"
                                    id="checkBox_1"
                                  />
                                  <label className="custom-control-label" htmlFor="checkBox_1"></label>
                                </div>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="fw-bold">
                                #321456
                              </a>
                            </td>
                            <td>
                              <a href="javascript:void(0)" className="hstack gap-3">
                                <div className="avatar-image avatar-md">
                                  <img
                                    src="assets/images/avatar/14.png"
                                    alt="User Avatar"
                                    className="img-fluid"
                                  />
                                </div>
                                <div>
                                  <span className="text-truncate-1-line">Alexandra Della</span>
                                  <small className="fs-12 fw-normal text-muted">
                                    alex.della@outlook.com
                                  </small>
                                </div>
                              </a>
                            </td>
                            <td className="fw-bold text-dark">₦2,400</td>
                            <td>2024-04-25, 03:42PM</td>
                            <td>
                              <a href="javascript:void(0);">#SDEG4589SE1E</a>
                            </td>
                            <td>
                              <div className="badge bg-soft-success text-success">Completed</div>
                            </td>
                            <td>
                              <div className="hstack gap-2 justify-content-end">
                                <a href="/receipt" className="avatar-text avatar-md">
                                  <i className="feather feather-eye"></i>
                                </a>
                                <div className="dropdown">
                                  <a
                                    href="javascript:void(0)"
                                    className="avatar-text avatar-md"
                                    data-bs-toggle="dropdown"
                                    data-bs-offset="0,21"
                                  >
                                    <i className="feather feather-more-horizontal"></i>
                                  </a>
                                  <ul className="dropdown-menu">

                                    <li>
                                      <a className="dropdown-item printBTN" href="javascript:void(0)">
                                        <i className="feather feather-printer me-3"></i>
                                        <span>Print</span>
                                      </a>
                                    </li>
                                    <li className="dropdown-divider"></li>
                                    <li>
                                      <a className="dropdown-item" href="javascript:void(0)">
                                        <i className="feather feather-archive me-3"></i>
                                        <span>Archive</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="javascript:void(0)">
                                        <i className="feather feather-alert-octagon me-3"></i>
                                        <span>Report Spam</span>
                                      </a>
                                    </li>
                                    <li className="dropdown-divider"></li>

                                  </ul>
                                </div>
                              </div>
                            </td>
                          </tr>

                          {/* Item 2 */}
                          <tr className="single-item">
                            <td>
                              <div className="item-checkbox ms-1">
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input checkbox"
                                    id="checkBox_1"
                                  />
                                  <label className="custom-control-label" htmlFor="checkBox_1"></label>
                                </div>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="fw-bold">
                                #487329
                              </a>
                            </td>
                            <td>
                              <a href="javascript:void(0)" className="hstack gap-3">
                                <div className="avatar-image avatar-md">
                                  <img
                                    src="assets/images/avatar/2.png"
                                    alt="User Avatar"
                                    className="img-fluid"
                                  />
                                </div>
                                <div>
                                  <span className="text-truncate-1-line">Chinedu Okeke</span>
                                  <small className="fs-12 fw-normal text-muted">
                                    chinedu.okeke@gmail.com
                                  </small>
                                </div>
                              </a>
                            </td>
                            <td className="fw-bold text-dark">₦1,000</td>
                            <td>2024-04-25, 03:42PM</td>
                            <td>
                              <a href="javascript:void(0);">#HUP4589NGX1E</a>
                            </td>
                            <td>
                              <div className="badge bg-soft-warning text-warning">Pending</div>
                            </td>
                            <td>
                              <div className="hstack gap-2 justify-content-end">
                                <a href="/receipt" className="avatar-text avatar-md">
                                  <i className="feather feather-eye"></i>
                                </a>
                                <div className="dropdown">
                                  <a
                                    href="javascript:void(0)"
                                    className="avatar-text avatar-md"
                                    data-bs-toggle="dropdown"
                                    data-bs-offset="0,21"
                                  >
                                    <i className="feather feather-more-horizontal"></i>
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <a className="dropdown-item printBTN" href="javascript:void(0)">
                                        <i className="feather feather-printer me-3"></i>
                                        <span>Print</span>
                                      </a>
                                    </li>
                                    <li className="dropdown-divider"></li>
                                    <li>
                                      <a className="dropdown-item" href="javascript:void(0)">
                                        <i className="feather feather-archive me-3"></i>
                                        <span>Archive</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="javascript:void(0)">
                                        <i className="feather feather-alert-octagon me-3"></i>
                                        <span>Report Spam</span>
                                      </a>
                                    </li>
                                    <li className="dropdown-divider"></li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                          </tr>

                          {/* Item 3 */}
                          <tr className="single-item">
                            <td>
                              <div className="item-checkbox ms-1">
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input checkbox"
                                    id="checkBox_2"
                                  />
                                  <label className="custom-control-label" htmlFor="checkBox_2"></label>
                                </div>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="fw-bold">
                                #854762
                              </a>
                            </td>
                            <td>
                              <a href="javascript:void(0)" className="hstack gap-3">
                                <div className="avatar-image avatar-md">
                                  <img
                                    src="assets/images/avatar/8.png"
                                    alt="User Avatar"
                                    className="img-fluid"
                                  />
                                </div>
                                <div>
                                  <span className="text-truncate-1-line">Tim Mujong</span>
                                  <small className="fs-12 fw-normal text-muted">
                                    tim.mujong@icloud.com
                                  </small>
                                </div>
                              </a>
                            </td>
                            <td className="fw-bold text-dark">₦5,600</td>
                            <td>2024-04-25, 03:42PM</td>
                            <td>
                              <a href="javascript:void(0);">#NXCG7532TY2Z</a>
                            </td>
                            <td>
                              <div className="badge bg-soft-success text-success">Completed</div>
                            </td>
                            <td>
                              <div className="hstack gap-2 justify-content-end">
                                <a href="/receipt" className="avatar-text avatar-md">
                                  <i className="feather feather-eye"></i>
                                </a>
                                <div className="dropdown">
                                  <a
                                    href="javascript:void(0)"
                                    className="avatar-text avatar-md"
                                    data-bs-toggle="dropdown"
                                    data-bs-offset="0,21"
                                  >
                                    <i className="feather feather-more-horizontal"></i>
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <a className="dropdown-item printBTN" href="javascript:void(0)">
                                        <i className="feather feather-printer me-3"></i>
                                        <span>Print</span>
                                      </a>
                                    </li>
                                    <li className="dropdown-divider"></li>
                                    <li>
                                      <a className="dropdown-item" href="javascript:void(0)">
                                        <i className="feather feather-archive me-3"></i>
                                        <span>Archive</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="javascript:void(0)">
                                        <i className="feather feather-alert-octagon me-3"></i>
                                        <span>Report Spam</span>
                                      </a>
                                    </li>
                                    <li className="dropdown-divider"></li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                          </tr>

                          {/* Item 4 */}
                          <tr className="single-item">
                            <td>
                              <div className="item-checkbox ms-1">
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input checkbox"
                                    id="checkBox_2"
                                  />
                                  <label className="custom-control-label" htmlFor="checkBox_2"></label>
                                </div>
                              </div>
                            </td>
                            <td>
                              <a href="transaction-view.html" className="fw-bold">
                                #854763
                              </a>
                            </td>
                            <td>
                              <a href="javascript:void(0)" className="hstack gap-3">
                                <div className="avatar-image avatar-md">
                                  <img
                                    src="assets/images/avatar/10.png"
                                    alt="User Avatar"
                                    className="img-fluid"
                                  />
                                </div>
                                <div>
                                  <span className="text-truncate-1-line">Emeka Okoye</span>
                                  <small className="fs-12 fw-normal text-muted">
                                    emeka.okoye@gmail.com
                                  </small>
                                </div>
                              </a>
                            </td>
                            <td className="fw-bold text-dark">₦5,800</td>
                            <td>2024-04-25, 03:42PM</td>
                            <td>
                              <a href="javascript:void(0);">#NXTG8543AZ7P</a>
                            </td>
                            <td>
                              <div className="badge bg-soft-success text-success">Completed</div>
                            </td>
                            <td>
                              <div className="hstack gap-2 justify-content-end">
                                <a href="/receiptransaction-view.html" className="avatar-text avatar-md">
                                  <i className="feather feather-eye"></i>
                                </a>
                                <div className="dropdown">
                                  <a
                                    href="javascript:void(0)"
                                    className="avatar-text avatar-md"
                                    data-bs-toggle="dropdown"
                                    data-bs-offset="0,21"
                                  >
                                    <i className="feather feather-more-horizontal"></i>
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <a className="dropdown-item printBTN" href="javascript:void(0)">
                                        <i className="feather feather-printer me-3"></i>
                                        <span>Print</span>
                                      </a>
                                    </li>
                                    <li className="dropdown-divider"></li>
                                    <li>
                                      <a className="dropdown-item" href="javascript:void(0)">
                                        <i className="feather feather-archive me-3"></i>
                                        <span>Archive</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="javascript:void(0)">
                                        <i className="feather feather-alert-octagon me-3"></i>
                                        <span>Report Spam</span>
                                      </a>
                                    </li>
                                    <li className="dropdown-divider"></li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                          </tr>


                          {/* Item 5 */}
                          <tr className="single-item">
                            <td>
                              <div className="item-checkbox ms-1">
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input checkbox"
                                    id="checkBox_3"
                                  />
                                  <label className="custom-control-label" htmlFor="checkBox_3"></label>
                                </div>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="fw-bold">
                                #789654
                              </a>
                            </td>
                            <td>
                              <a href="javascript:void(0)" className="hstack gap-3">
                                <div className="avatar-image avatar-md">
                                  <img
                                    src="assets/images/avatar/7.png"
                                    alt="User Avatar"
                                    className="img-fluid"
                                  />
                                </div>
                                <div>
                                  <span className="text-truncate-1-line">Grace Emeka</span>
                                  <small className="fs-12 fw-normal text-muted">
                                    graceemeka@outlook.com
                                  </small>
                                </div>
                              </a>
                            </td>
                            <td className="fw-bold text-dark">₦3,500</td>
                            <td>2024-05-18, 10:15AM</td>
                            <td>
                              <a href="javascript:void(0);">#RTYU8743KO2L</a>
                            </td>
                            <td>
                              <div className="badge bg-soft-danger text-danger">Reversed</div>
                            </td>
                            <td>
                              <div className="hstack gap-2 justify-content-end">
                                <a href="/receipt" className="avatar-text avatar-md">
                                  <i className="feather feather-eye"></i>
                                </a>
                                <div className="dropdown">
                                  <a
                                    href="javascript:void(0)"
                                    className="avatar-text avatar-md"
                                    data-bs-toggle="dropdown"
                                    data-bs-offset="0,21"
                                  >
                                    <i className="feather feather-more-horizontal"></i>
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <a className="dropdown-item printBTN" href="javascript:void(0)">
                                        <i className="feather feather-printer me-3"></i>
                                        <span>Print</span>
                                      </a>
                                    </li>
                                    <li className="dropdown-divider"></li>
                                    <li>
                                      <a className="dropdown-item" href="javascript:void(0)">
                                        <i className="feather feather-archive me-3"></i>
                                        <span>Archive</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="javascript:void(0)">
                                        <i className="feather feather-alert-octagon me-3"></i>
                                        <span>Report Spam</span>
                                      </a>
                                    </li>
                                    <li className="dropdown-divider"></li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                          </tr>

                          {/* Item 6 */}
                          <tr className="single-item">
                            <td>
                              <div className="item-checkbox ms-1">
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input checkbox"
                                    id="checkBox_2"
                                  />
                                  <label className="custom-control-label" htmlFor="checkBox_2"></label>
                                </div>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="fw-bold">
                                #784512
                              </a>
                            </td>
                            <td>
                              <a href="javascript:void(0)" className="hstack gap-3">
                                <div className="avatar-image avatar-md">
                                  <img
                                    src="assets/images/avatar/6.png"
                                    alt="User Avatar"
                                    className="img-fluid"
                                  />
                                </div>
                                <div>
                                  <span className="text-truncate-1-line">Adanna Okeke</span>
                                  <small className="fs-12 fw-normal text-muted">
                                    adanna.okeke@example.com
                                  </small>
                                </div>
                              </a>
                            </td>
                            <td className="fw-bold text-dark">₦3,800</td>
                            <td>2024-05-10, 02:15PM</td>
                            <td>
                              <a href="javascript:void(0);">#DFTG4598HY6B</a>
                            </td>
                            <td>
                              <div className="badge bg-soft-success text-success">Completed</div>
                            </td>
                            <td>
                              <div className="hstack gap-2 justify-content-end">
                                <a href="/receipt" className="avatar-text avatar-md">
                                  <i className="feather feather-eye"></i>
                                </a>
                                <div className="dropdown">
                                  <a
                                    href="javascript:void(0)"
                                    className="avatar-text avatar-md"
                                    data-bs-toggle="dropdown"
                                    data-bs-offset="0,21"
                                  >
                                    <i className="feather feather-more-horizontal"></i>
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <a className="dropdown-item printBTN" href="javascript:void(0)">
                                        <i className="feather feather-printer me-3"></i>
                                        <span>Print</span>
                                      </a>
                                    </li>
                                    <li className="dropdown-divider"></li>
                                    <li>
                                      <a className="dropdown-item" href="javascript:void(0)">
                                        <i className="feather feather-archive me-3"></i>
                                        <span>Archive</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="javascript:void(0)">
                                        <i className="feather feather-alert-octagon me-3"></i>
                                        <span>Report Spam</span>
                                      </a>
                                    </li>
                                    <li className="dropdown-divider"></li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                          </tr>


                          {/* Item 7 */}
                          <tr className="single-item">
                            <td>
                              <div className="item-checkbox ms-1">
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input checkbox"
                                    id="checkBox_7"
                                  />
                                  <label className="custom-control-label" htmlFor="checkBox_7"></label>
                                </div>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="fw-bold">
                                #325678
                              </a>
                            </td>
                            <td>
                              <a href="javascript:void(0)" className="hstack gap-3">
                                <div className="avatar-image avatar-md">
                                  <img
                                    src="assets/images/avatar/13.png"
                                    alt="User Avatar"
                                    className="img-fluid"
                                  />
                                </div>
                                <div>
                                  <span className="text-truncate-1-line">Emeka Udo</span>
                                  <small className="fs-12 fw-normal text-muted">emeka.udo@mail.com</small>
                                </div>
                              </a>
                            </td>
                            <td className="fw-bold text-dark">₦3,000</td>
                            <td>2024-05-01, 11:30AM</td>
                            <td>
                              <a href="javascript:void(0);">#XWER1234UY7</a>
                            </td>
                            <td>
                              <div className="badge bg-soft-warning text-warning">Processing</div>
                            </td>
                            <td>
                              <div className="hstack gap-2 justify-content-end">
                                <a href="/receipt" className="avatar-text avatar-md">
                                  <i className="feather feather-eye"></i>
                                </a>
                                <div className="dropdown">
                                  <a
                                    href="javascript:void(0)"
                                    className="avatar-text avatar-md"
                                    data-bs-toggle="dropdown"
                                    data-bs-offset="0,21"
                                  >
                                    <i className="feather feather-more-horizontal"></i>
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <a className="dropdown-item printBTN" href="javascript:void(0)">
                                        <i className="feather feather-printer me-3"></i>
                                        <span>Print</span>
                                      </a>
                                    </li>
                                    <li className="dropdown-divider"></li>
                                    <li>
                                      <a className="dropdown-item" href="javascript:void(0)">
                                        <i className="feather feather-archive me-3"></i>
                                        <span>Archive</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="javascript:void(0)">
                                        <i className="feather feather-alert-octagon me-3"></i>
                                        <span>Report Spam</span>
                                      </a>
                                    </li>
                                    <li className="dropdown-divider"></li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                          </tr>

                          {/* Item 8 */}
                          <tr className="single-item">
                            <td>
                              <div className="item-checkbox ms-1">
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input checkbox"
                                    id="checkBox_8"
                                  />
                                  <label className="custom-control-label" htmlFor="checkBox_8"></label>
                                </div>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="fw-bold">
                                #328456
                              </a>
                            </td>
                            <td>
                              <a href="javascript:void(0)" className="hstack gap-3">
                                <div className="avatar-image avatar-md">
                                  <img
                                    src="assets/images/avatar/12.png"
                                    alt="User Avatar"
                                    className="img-fluid"
                                  />
                                </div>
                                <div>
                                  <span className="text-truncate-1-line">Ngozi Okeke</span>
                                  <small className="fs-12 fw-normal text-muted">ngozi.okeke@mail.com</small>
                                </div>
                              </a>
                            </td>
                            <td className="fw-bold text-dark">₦1,800</td>
                            <td>2024-05-02, 02:15PM</td>
                            <td>
                              <a href="javascript:void(0);">#ZXYW1234LK9</a>
                            </td>
                            <td>
                              <div className="badge bg-soft-danger text-danger">Cancelled</div>
                            </td>
                            <td>
                              <div className="hstack gap-2 justify-content-end">
                                <a href="/receipt" className="avatar-text avatar-md">
                                  <i className="feather feather-eye"></i>
                                </a>
                                <div className="dropdown">
                                  <a
                                    href="javascript:void(0)"
                                    className="avatar-text avatar-md"
                                    data-bs-toggle="dropdown"
                                    data-bs-offset="0,21"
                                  >
                                    <i className="feather feather-more-horizontal"></i>
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <a className="dropdown-item printBTN" href="javascript:void(0)">
                                        <i className="feather feather-printer me-3"></i>
                                        <span>Print</span>
                                      </a>
                                    </li>
                                    <li className="dropdown-divider"></li>
                                    <li>
                                      <a className="dropdown-item" href="javascript:void(0)">
                                        <i className="feather feather-archive me-3"></i>
                                        <span>Archive</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="javascript:void(0)">
                                        <i className="feather feather-alert-octagon me-3"></i>
                                        <span>Report Spam</span>
                                      </a>
                                    </li>
                                    <li className="dropdown-divider"></li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                          </tr>

                          {/* Item 9 */}
                          <tr className="single-item">
                            <td>
                              <div className="item-checkbox ms-1">
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input checkbox"
                                    id="checkBox_9"
                                  />
                                  <label className="custom-control-label" htmlFor="checkBox_9"></label>
                                </div>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="fw-bold">
                                #324789
                              </a>
                            </td>
                            <td>
                              <a href="javascript:void(0)" className="hstack gap-3">
                                <div className="avatar-image avatar-md">
                                  <img
                                    src="assets/images/avatar/15.png"
                                    alt="User Avatar"
                                    className="img-fluid"
                                  />
                                </div>
                                <div>
                                  <span className="text-truncate-1-line">Ifeanyi Chukwu</span>
                                  <small className="fs-12 fw-normal text-muted">ifeanyi.chukwu@mail.com</small>
                                </div>
                              </a>
                            </td>
                            <td className="fw-bold text-dark">₦4,200</td>
                            <td>2024-05-03, 05:00PM</td>
                            <td>
                              <a href="javascript:void(0);">#YXZT9876MN4</a>
                            </td>
                            <td>
                              <div className="badge bg-soft-warning text-warning">Processing</div>
                            </td>
                            <td>
                              <div className="hstack gap-2 justify-content-end">
                                <a href="/receipt" className="avatar-text avatar-md">
                                  <i className="feather feather-eye"></i>
                                </a>
                                <div className="dropdown">
                                  <a
                                    href="javascript:void(0)"
                                    className="avatar-text avatar-md"
                                    data-bs-toggle="dropdown"
                                    data-bs-offset="0,21"
                                  >
                                    <i className="feather feather-more-horizontal"></i>
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <a className="dropdown-item printBTN" href="javascript:void(0)">
                                        <i className="feather feather-printer me-3"></i>
                                        <span>Print</span>
                                      </a>
                                    </li>
                                    <li className="dropdown-divider"></li>
                                    <li>
                                      <a className="dropdown-item" href="javascript:void(0)">
                                        <i className="feather feather-archive me-3"></i>
                                        <span>Archive</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="javascript:void(0)">
                                        <i className="feather feather-alert-octagon me-3"></i>
                                        <span>Report Spam</span>
                                      </a>
                                    </li>
                                    <li className="dropdown-divider"></li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                          </tr>

                          {/* Item 10 */}
                          <tr className="single-item">
                            <td>
                              <div className="item-checkbox ms-1">
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input checkbox"
                                    id="checkBox_10"
                                  />
                                  <label className="custom-control-label" htmlFor="checkBox_10"></label>
                                </div>
                              </div>
                            </td>
                            <td>
                              <a href="#" className="fw-bold">
                                #327654
                              </a>
                            </td>
                            <td>
                              <a href="javascript:void(0)" className="hstack gap-3">
                                <div className="avatar-image avatar-md">
                                  <img
                                    src="assets/images/avatar/17.png"
                                    alt="User Avatar"
                                    className="img-fluid"
                                  />
                                </div>
                                <div>
                                  <span className="text-truncate-1-line">Aisha Bello</span>
                                  <small className="fs-12 fw-normal text-muted">aisha.bello@mail.com</small>
                                </div>
                              </a>
                            </td>
                            <td className="fw-bold text-dark">₦5,500</td>
                            <td>2024-05-04, 08:45AM</td>
                            <td>
                              <a href="javascript:void(0);">#WERT9876KL2</a>
                            </td>
                            <td>
                              <div className="badge bg-soft-danger text-danger">Cancelled</div>
                            </td>
                            <td>
                              <div className="hstack gap-2 justify-content-end">
                                <a href="/receipt" className="avatar-text avatar-md">
                                  <i className="feather feather-eye"></i>
                                </a>
                                <div className="dropdown">
                                  <a
                                    href="javascript:void(0)"
                                    className="avatar-text avatar-md"
                                    data-bs-toggle="dropdown"
                                    data-bs-offset="0,21"
                                  >
                                    <i className="feather feather-more-horizontal"></i>
                                  </a>
                                  <ul className="dropdown-menu">
                                    <li>
                                      <a className="dropdown-item printBTN" href="javascript:void(0)">
                                        <i className="feather feather-printer me-3"></i>
                                        <span>Print</span>
                                      </a>
                                    </li>
                                    <li className="dropdown-divider"></li>
                                    <li>
                                      <a className="dropdown-item" href="javascript:void(0)">
                                        <i className="feather feather-archive me-3"></i>
                                        <span>Archive</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="javascript:void(0)">
                                        <i className="feather feather-alert-octagon me-3"></i>
                                        <span>Report Spam</span>
                                      </a>
                                    </li>
                                    <li className="dropdown-divider"></li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                          </tr>


                        </tbody>

                      </table>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  )
}

export default Wallet