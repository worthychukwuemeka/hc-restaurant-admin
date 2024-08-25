import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'

function Dashboard() {
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
                  <h5 className="m-b-10">Dashboard</h5>
                </div>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  <li className="breadcrumb-item">Dashboard</li>
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
                        <span>Filter</span>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <div className="dropdown-item">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="Role" checked />
                            <label className="custom-control-label c-pointer" htmlFor="Role">Role</label>
                          </div>
                        </div>
                        <div className="dropdown-item">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="Team" checked />
                            <label className="custom-control-label c-pointer" htmlFor="Team">Team</label>
                          </div>
                        </div>
                        <div className="dropdown-item">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="Email" checked />
                            <label className="custom-control-label c-pointer" htmlFor="Email">Email</label>
                          </div>
                        </div>
                        <div className="dropdown-item">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="Member" checked />
                            <label className="custom-control-label c-pointer" htmlFor="Member">Member</label>
                          </div>
                        </div>
                        <div className="dropdown-item">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="Recommendation" checked />
                            <label className="custom-control-label c-pointer" htmlFor="Recommendation">Recommendation</label>
                          </div>
                        </div>
                        <div className="dropdown-divider"></div>
                        <a href="javascript:void(0);" className="dropdown-item">
                          <i className="feather-plus me-3"></i>
                          <span>Create New</span>
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                          <i className="feather-filter me-3"></i>
                          <span>Manage Filter</span>
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

            <div className="main-content">
              <div className="row">
                {/* Customers Card */}
                <div className="col-xxl-3 col-md-6">
                  <div className="card card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="me-3">
                        <h5 className="fs-4">1,234</h5>
                        <span className="text-muted">Customers</span>
                      </div>
                      <div className="avatar-text avatar-lg bg-primary text-white rounded">
                        <i className="feather-users"></i>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Orders Card */}
                <div className="col-xxl-3 col-md-6">
                  <div className="card card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="me-3">
                        <h5 className="fs-4">567</h5>
                        <span className="text-muted">Orders</span>
                      </div>
                      <div className="avatar-text avatar-lg bg-success text-white rounded">
                        <i className="feather-shopping-cart"></i>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Revenue Card */}
                <div className="col-xxl-3 col-md-6">
                  <div className="card card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="me-3">
                        <h5 className="fs-4">₦96,485</h5>
                        <span className="text-muted">Revenue</span>
                      </div>
                      <div className="avatar-text avatar-lg bg-warning text-white rounded">
                        <span style={{fontSize: '20px'}}>&#8358;</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Growth Card */}
                <div className="col-xxl-3 col-md-6">
                  <div className="card card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="me-3">
                        <h5 className="fs-4">8.2%</h5>
                        <span className="text-muted">Growth</span>
                      </div>
                      <div className="avatar-text avatar-lg bg-teal text-white rounded">
                        <i className="feather-bar-chart"></i>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sales Performance Chart */}
                <div className="col-xxl-6">
                  <div className="card stretch stretch-full">
                    <div className="card-header">
                      <h5 className="card-title">Sales Performance</h5>
                      <div className="card-header-action">
                        <div className="d-flex align-items-center gap-2 page-header-right-items-wrapper">
                          <div id="reportrange" className="reportrange-picker d-flex align-items-center">
                            <span className="reportrange-picker-field"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body custom-card-action">
                      <div id="visitors-overview-statistics-chart"></div>
                    </div>
                  </div>
                </div>

                {/* Begin orders */}
                <div className="col-xxl-4 col-lg-6">
                  <div className="card stretch stretch-full">
                    <div className="card-header">
                      <h5 className="card-title">Orders</h5>
                      <div className="card-header-action">
                        {/* Optional action buttons can be added here */}
                      </div>
                    </div>
                    <div className="card-body custom-card-action">
                      {/* Order Item 1 */}
                      <div className="d-flex align-items-center">
                        <div className="avatar-image me-3">
                          <img src="../assets/images/orders/5.jpg" className="rounded-circle img-fluid" alt="image" />
                        </div>
                        <div className="d-flex align-items-center justify-content-between border-3 border-start border-success rounded w-100">
                          <div className="mx-3">
                            <a href="javascript:void(0);" className="fw-semibold mb-1 text-truncate-1-line">Fried Rice Combo Meal</a>
                            <div className="fs-12 fw-normal text-muted text-truncate-1-line">ORD#001: <span style={{ fontWeight: '700' }}>Adebayo Adeniyi</span></div>
                          </div>
                          <a href="javascript:void(0);" className="badge bg-soft-success text-success">Delivered</a>
                        </div>
                      </div>
                      <hr className="border-dashed my-3" />

                      {/* Order Item 2 */}
                      <div className="d-flex align-items-center">
                        <div className="avatar-image me-3">
                          <img src="../assets/images/orders/5.jpg" className="rounded-circle img-fluid" alt="image" />
                        </div>
                        <div className="d-flex align-items-center justify-content-between border-3 border-start border-success rounded w-100">
                          <div className="mx-3">
                            <a href="javascript:void(0);" className="fw-semibold mb-1 text-truncate-1-line">
                              Yam Fries Meal
                            </a>
                            <div className="fs-12 fw-normal text-muted text-truncate-1-line">ORD#002: <span style={{ fontWeight: '700' }}>Tim Mujong</span></div>
                          </div>
                          <a href="javascript:void(0);" className="badge bg-soft-success text-success">Delivered</a>
                        </div>
                      </div>
                      <hr className="border-dashed my-3" />

                      {/* Order Item 3 */}
                      <div className="d-flex align-items-center">
                        <div className="avatar-image me-3">
                          <img src="../assets/images/orders/5.jpg" className="rounded-circle img-fluid" alt="image" />
                        </div>
                        <div className="d-flex align-items-center justify-content-between border-3 border-start border-danger rounded w-100">
                          <div className="mx-3">
                            <a href="javascript:void(0);" className="fw-semibold mb-1 text-truncate-1-line">
                              Chicken Rottissiere Meal
                            </a>
                            <div className="fs-12 fw-normal text-muted text-truncate-1-line">
                              ORD#003: <span style={{ fontWeight: '700' }}>Ngozi Nwankwo</span>
                            </div>
                          </div>
                          <a href="javascript:void(0);" className="badge bg-soft-danger text-danger">Cancelled</a>
                        </div>
                      </div>
                      <hr className="border-dashed my-3" />

                      {/* Order Item 4 */}
                      <div className="d-flex align-items-center">
                        <div className="avatar-image me-3">
                          <img src="../assets/images/orders/5.jpg" className="rounded-circle img-fluid" alt="image" />
                        </div>
                        <div className="d-flex align-items-center justify-content-between border-3 border-start border-warning rounded w-100">
                          <div className="mx-3">
                            <a href="javascript:void(0);" className="fw-semibold mb-1 text-truncate-1-line">
                              Yam & Chicken Combo Meal
                            </a>
                            <div className="fs-12 fw-normal text-muted text-truncate-1-line">ORD#004: <span style={{ fontWeight: '700' }}>Ifeoma Eze</span></div>
                          </div>
                          <a href="javascript:void(0);" className="badge bg-soft-warning text-warning">In progress</a>
                        </div>
                      </div>
                      <hr className="border-dashed my-3" />

                      {/* Order Item 5 */}
                      <div className="d-flex align-items-center">
                        <div className="avatar-image me-3">
                          <img src="../assets/images/orders/5.jpg" className="rounded-circle img-fluid" alt="image" />
                        </div>
                        <div className="d-flex align-items-center justify-content-between border-3 border-start border-success rounded w-100">
                          <div className="mx-3">
                            <a href="javascript:void(0);" className="fw-semibold mb-1 text-truncate-1-line">Refuel Max Meal</a>
                            <div className="fs-12 fw-normal text-muted text-truncate-1-line">ORD#005: <span style={{ fontWeight: '700' }}>Bola Akinwale</span></div>
                          </div>
                          <a href="javascript:void(0);" className="badge bg-soft-success text-success">Delivered</a>
                        </div>
                      </div>
                      <hr className="border-dashed my-3" />

                      {/* Order Item 6 */}
                      <div className="d-flex align-items-center mb-2">
                        <div className="avatar-image me-3">
                          <img src="../assets/images/orders/5.jpg" className="rounded-circle img-fluid" alt="image" />
                        </div>
                        <div className="d-flex align-items-center justify-content-between border-3 border-start border-warning rounded w-100">
                          <div className="mx-3">
                            <a href="javascript:void(0);" className="fw-semibold mb-1 text-truncate-1-line">Refuel Promo Max Meal</a>
                            <div className="fs-12 fw-normal text-muted text-truncate-1-line">ORD#006: <span style={{ fontWeight: '700' }}>Grace Emeka</span></div>
                          </div>
                          <a href="javascript:void(0);" className="badge bg-soft-warning text-warning">In Progress</a>
                        </div>
                      </div>
                    </div>
                    <a href="/orders" className="card-footer fs-11 fw-bold text-uppercase text-center">View All</a>
                  </div>
                </div>
                {/* End orders */}


                {/* Traffic by location */}
                <div className="col-xxl-4 col-lg-6">
                  <div className="card stretch stretch-full">
                    <div className="card-header">
                      <h5 className="card-title">Traffic By Location</h5>
                      <div className="card-header-action">
                        <div className="card-header-btn">
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div id="click-by-country-donut" className="d-flex align-items-center justify-content-center"></div>
                      <hr className="border-dashed mt-1 mb-3" />
                      <div className="hstack justify-content-between">
                        <div className="hstack">
                          <div className="me-3">
                            <i className="fi fi-ng"></i> {/* Replace with appropriate icon */}
                          </div>
                          <a href="javascript:void(0);">
                            <span>Lagos</span>
                            <i className="feather feather-link-2 fs-10 ms-1"></i>
                          </a>
                        </div>
                        <div className="text-success">
                          <i className="feather-chevron-up fs-12 me-1"></i>
                          27.12%
                        </div>
                      </div>
                      <hr className="border-dashed my-3" />
                      <div className="hstack justify-content-between">
                        <div className="hstack">
                          <div className="me-3">
                            <i className="fi fi-ng"></i> {/* Replace with appropriate icon */}
                          </div>
                          <a href="javascript:void(0);">
                            <span>Abuja</span>
                            <i className="feather feather-link-2 fs-10 ms-1"></i>
                          </a>
                        </div>
                        <div className="text-success">
                          <i className="feather-chevron-up fs-12 me-1"></i>
                          36.81%
                        </div>
                      </div>
                      <hr className="border-dashed my-3" />
                      <div className="hstack justify-content-between">
                        <div className="hstack">
                          <div className="me-3">
                            <i className="fi fi-ng"></i> {/* Replace with appropriate icon */}
                          </div>
                          <a href="javascript:void(0);">
                            <span>Benin City</span>
                            <i className="feather feather-link-2 fs-10 ms-1"></i>
                          </a>
                        </div>
                        <div className="text-success">
                          <i className="feather-chevron-up fs-12 me-1"></i>
                          76.57%
                        </div>
                      </div>

                      <hr className="border-dashed my-3" />
                      <div className="hstack justify-content-between">
                        <div className="hstack">
                          <div className="me-3">
                            <i className="fi fi-ng"></i> {/* Replace with appropriate icon */}
                          </div>
                          <a href="javascript:void(0);">
                            <span>Others</span>
                            <i className="feather feather-link-2 fs-10 ms-1"></i>
                          </a>
                        </div>
                        <div className="text-danger">
                          <i className="feather-chevron-down fs-12 me-1"></i>
                          12.34%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



              </div>
            </div>
          </div>

          <Footer />
        </main>
      </body>
    </div>
  )
}

export default Dashboard