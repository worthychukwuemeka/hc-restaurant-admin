/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer';

const Menu = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    function getCurrentDate(): string {
      const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
      const today = new Date().toLocaleDateString('en-US', options).toUpperCase();
      return today;
    }

    setCurrentDate(getCurrentDate());
  }, []);

  return (
    <div>
      <body>
        <Sidebar />

        <Header />

        {/* Main content */}
        <main className="nxl-container">
          <div className="nxl-content">

            {/*Page header*/}
            <div className="page-header">
              <div className="page-header-left d-flex align-items-center">
                <div className="page-header-title">
                  <h5 className="m-b-10">Menu</h5>
                </div>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  <li className="breadcrumb-item">Menu</li>
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
                      <a
                        className="btn btn-icon btn-light-brand"
                        data-bs-toggle="dropdown"
                        data-bs-offset="0, 10"
                        data-bs-auto-close="outside"
                        href="#"
                      >
                        <i className="feather-filter me-2"></i>
                        <span>Filter By</span>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a href="javascript:void(0);" className="dropdown-item">
                          <span className="wd-7 ht-7 bg-primary rounded-circle d-inline-block me-3"></span>
                          <span>Citizen's Meals</span>
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                          <span className="wd-7 ht-7 bg-warning rounded-circle d-inline-block me-3"></span>
                          <span>Everyday Affordable Value Meals</span>
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                          <span className="wd-7 ht-7 bg-success rounded-circle d-inline-block me-3"></span>
                          <span>Pot Meals</span>
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                          <span className="wd-7 ht-7 bg-danger rounded-circle d-inline-block me-3"></span>
                          <span>Burgers & Sandwiches</span>
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                          <span className="wd-7 ht-7 bg-teal rounded-circle d-inline-block me-3"></span>
                          <span>Tasty Sides</span>
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                          <span className="wd-7 ht-7 bg-indigo rounded-circle d-inline-block me-3"></span>
                          <span>Packaging</span>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a href="javascript:void(0);" className="dropdown-item">
                          <span className="wd-7 ht-7 bg-warning rounded-circle d-inline-block me-3"></span>
                          <span>Drinks</span>
                        </a>
                      </div>
                    </div>
                    <a href="javascript:void(0);" className="btn btn-primary" data-bs-toggle="offcanvas" data-bs-target="#addNewItem">
                      <i className="feather-plus-circle me-2"></i>
                      <span>Add New Menu Item</span>
                    </a>
                  </div>
                </div>
                <div className="d-md-none d-flex align-items-center">
                  <a href="javascript:void(0)" className="page-header-right-open-toggle">
                    <i className="feather-align-right fs-20"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Sub-header */}
            <div className="bg-white py-3 border-bottom rounded-0 p-md-0 mb-0">
              <div className="d-md-none d-flex align-items-center justify-content-between">
                <a href="javascript:void(0)" className="page-content-left-open-toggle">
                  <i className="feather-align-left fs-20"></i>
                </a>
                <a href="javascript:void(0)" className="page-content-right-open-toggle">
                  <i className="feather-align-right fs-20"></i>
                </a>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="nav-tabs-wrapper page-content-left-sidebar-wrapper">
                  <div className="d-flex d-md-none">
                    <a href="javascript:void(0)" className="page-content-left-close-toggle">
                      <i className="feather-arrow-left me-2"></i>
                      <span>Back</span>
                    </a>
                  </div>
                  <ul className="nav nav-tabs nav-tabs-custom-style" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#allTab">All</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" data-bs-toggle="tab" data-bs-target="#breakfastTab">Breakfast</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" data-bs-toggle="tab" data-bs-target="#lunchTab">Lunch</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" data-bs-toggle="tab" data-bs-target="#dinnerTab">Dinner</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link" data-bs-toggle="tab" data-bs-target="#bulkMealTab">Bulk Meal</button>
                    </li>
                  </ul>
                </div>
                <div className="page-content-right-sidebar-wrapper">
                  <div className="d-flex d-md-none">
                    <a href="javascript:void(0)" className="page-content-right-close-toggle">
                      <i className="feather-arrow-left me-2"></i>
                      <span>Back</span>
                    </a>
                  </div>
                  <div className="proposal-action-btn">
                    <div className="d-md-none d-lg-flex">
                      <a href="proposal-edit.html" className="action-btn" data-bs-toggle="tooltip" title="Edit Menu Item">
                        <i className="feather-edit me-2"></i><span>Edit</span>
                      </a>
                    </div>
                    <div className="dropdown">
                      <a href="javascript:void(0);" className="action-btn dropdown-toggle c-pointer" data-bs-toggle="dropdown" data-bs-offset="0, 2" data-bs-auto-close="outside">Actions</a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a href="javascript:void(0);" className="dropdown-item">
                          <i className="feather-download-cloud me-3"></i>
                          <span>Download as PDF</span>
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                          <i className="feather-eye me-3"></i>
                          <span>View all Item Orders</span>
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                          <i className="feather-archive me-3"></i>
                          <span>Archive Item</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* All items tab */}
            <div className="main-content">
              <div className="tab-content">
                <div className="tab-pane fade active show" id='allTab'>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card stretch stretch-full">
                        <div className="card-header">
                          <h5 className="card-title">All Items</h5>
                          <div className="flex items-center space-x-2">
                            <input
                              type="text"
                              className="form-control w-48 p-2 border border-gray-300 rounded-md"
                              placeholder="Search Meals..."
                              aria-label="Search Meals"
                            />
                          </div>

                        </div>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-xxl-4 col-md-6">
                              <div className="card stretch stretch-full">
                                <div className="card-body">
                                  <div className="avatar-text rounded-2 mb-4">
                                    <img src="./assets/images/orders/14.jpg" alt="" className="img-fluid" />
                                  </div>
                                  <h6 className="fw-bold mb-3 text-truncate-1-line">Spicy Chicken Meal</h6>
                                  <p className="text-muted mb-4 text-truncate-3-line">
                                    A delicious and spicy chicken meal served with your choice of rice or fries.
                                  </p>
                                  <a
                                    href="javascript:void(0);"
                                    className="d-block fs-12 fw-bold text-dark text-capitalize text-spacing-1"
                                  >
                                    From &#8358;1,200
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-xxl-4 col-md-6">
                              <div className="card stretch stretch-full">
                                <div className="card-body">
                                  <div className="avatar-text rounded-2 mb-4">
                                    <img src="./assets/images/orders/12.jpg" alt="" className="img-fluid" />
                                  </div>
                                  <h6 className="fw-bold mb-3 text-truncate-1-line">ChickWizz Sandwich Meal</h6>
                                  <p className="text-muted mb-4 text-truncate-3-line">
                                    A tasty grilled chicken wrap with vegetables and a hint of BBQ sauce.
                                  </p>
                                  <a
                                    href="javascript:void(0);"
                                    className="d-block fs-12 fw-bold text-dark text-capitalize text-spacing-1"
                                  >
                                    From &#8358;3,000
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-xxl-4 col-md-6">
                              <div className="card stretch stretch-full">
                                <div className="card-body">
                                  <div className="avatar-text rounded-2 mb-4">
                                    <img src="./assets/images/orders/13.jpg" alt="" className="img-fluid" />
                                  </div>
                                  <h6 className="fw-bold mb-3 text-truncate-1-line">Grilled Chicken Wrap</h6>
                                  <p className="text-muted mb-4 text-truncate-3-line">
                                    A tasty grilled chicken wrap with vegetables and a hint of BBQ sauce.
                                  </p>
                                  <a
                                    href="javascript:void(0);"
                                    className="d-block fs-12 fw-bold text-dark text-capitalize text-spacing-1"
                                  >
                                    From &#8358;3,000
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div className="col-xxl-4 col-md-6">
                              <div className="card stretch stretch-full">
                                <div className="card-body">
                                  <div className="avatar-text rounded-2 mb-4">
                                    <img src="./assets/images/orders/11.jpg" alt="" className="img-fluid" />
                                  </div>
                                  <h6 className="fw-bold mb-3 text-truncate-1-line">Yam Fries Combo</h6>
                                  <p className="text-muted mb-4 text-truncate-3-line">
                                    A combo of crispy yam fries served with your choice of dip and side.
                                  </p>
                                  <a
                                    href="javascript:void(0);"
                                    className="d-block fs-12 fw-bold text-dark text-capitalize text-spacing-1"
                                  >
                                    From &#8358;1,200
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div className="col-xxl-4 col-md-6">
                              <div className="card stretch stretch-full">
                                <div className="card-body">
                                  <div className="avatar-text rounded-2 mb-4">
                                    <img src="./assets/images/orders/8.png" alt="" className="img-fluid" />
                                  </div>
                                  <h6 className="fw-bold mb-3 text-truncate-1-line">Chicken Rottisiere Bulk Meal</h6>
                                  <p className="text-muted mb-4 text-truncate-3-line">
                                    A bulk meal of crispy chicken rottisiere served with your choice of either fried or jollof rice and a pet drink.
                                  </p>
                                  <a
                                    href="javascript:void(0);"
                                    className="d-block fs-12 fw-bold text-dark text-capitalize text-spacing-1"
                                  >
                                    From &#8358;19,200
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Breakfast tab */}
                <div className="tab-pane fade" id='breakfastTab'>
                  <div className="col-lg-12">
                    <div className="card stretch stretch-full">
                      <div className="card-header">
                        <h5 className="card-title">Breakfast</h5>
                        <div className="flex items-center space-x-2">
                          <input
                            type="text"
                            className="form-control w-48 p-2 border border-gray-300 rounded-md"
                            placeholder="Search Meals..."
                            aria-label="Search Meals"
                          />
                        </div>

                      </div>
                      <div className="card-body">
                        <div className="row">

                          <div className="col-xxl-4 col-md-6">
                            <div className="card stretch stretch-full">
                              <div className="card-body">
                                <div className="avatar-text rounded-2 mb-4">
                                  <img src="./assets/images/orders/16.jpg" alt="" className="img-fluid" />
                                </div>
                                <h6 className="fw-bold mb-3 text-truncate-1-line">Classic Chicken Sandwich</h6>
                                <p className="text-muted mb-4 text-truncate-3-line">
                                  A classic chicken sandwich with fresh lettuce, tomatoes, and mayo in a soft bun.
                                </p>
                                <a
                                  href="javascript:void(0);"
                                  className="d-block fs-12 fw-bold text-dark text-capitalize text-spacing-1"
                                >
                                  From &#8358;2,400
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-xxl-4 col-md-6">
                            <div className="card stretch stretch-full">
                              <div className="card-body">
                                <div className="avatar-text rounded-2 mb-4">
                                  <img src="./assets/images/orders/12.jpg" alt="" className="img-fluid" />
                                </div>
                                <h6 className="fw-bold mb-3 text-truncate-1-line">ChickWizz Sandwich Meal</h6>
                                <p className="text-muted mb-4 text-truncate-3-line">
                                  A tasty grilled chicken wrap with vegetables and a hint of BBQ sauce.
                                </p>
                                <a
                                  href="javascript:void(0);"
                                  className="d-block fs-12 fw-bold text-dark text-capitalize text-spacing-1"
                                >
                                  From &#8358;3,000
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="col-xxl-4 col-md-6">
                            <div className="card stretch stretch-full">
                              <div className="card-body">
                                <div className="avatar-text rounded-2 mb-4">
                                  <img src="./assets/images/orders/11.jpg" alt="" className="img-fluid" />
                                </div>
                                <h6 className="fw-bold mb-3 text-truncate-1-line">Yam Fries Combo</h6>
                                <p className="text-muted mb-4 text-truncate-3-line">
                                  A combo of crispy yam fries served with your choice of dip and side.
                                </p>
                                <a
                                  href="javascript:void(0);"
                                  className="d-block fs-12 fw-bold text-dark text-capitalize text-spacing-1"
                                >
                                  From &#8358;1,200
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lunch tab */}
                <div className="tab-pane fade" id='lunchTab'>
                  <div className="row">
                    {/* All items tab */}
                    <div className="col-lg-12">
                      <div className="card stretch stretch-full">
                        <div className="card-header">
                          <h5 className="card-title">Lunch</h5>
                          <div className="flex items-center space-x-2">
                            <input
                              type="text"
                              className="form-control w-48 p-2 border border-gray-300 rounded-md"
                              placeholder="Search Meals..."
                              aria-label="Search Meals"
                            />
                          </div>

                        </div>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-xxl-4 col-md-6">
                              <div className="card stretch stretch-full">
                                <div className="card-body">
                                  <div className="avatar-text rounded-2 mb-4">
                                    <img src="./assets/images/orders/14.jpg" alt="" className="img-fluid" />
                                  </div>
                                  <h6 className="fw-bold mb-3 text-truncate-1-line">Spicy Chicken Meal</h6>
                                  <p className="text-muted mb-4 text-truncate-3-line">
                                    A delicious and spicy chicken meal served with your choice of rice or fries.
                                  </p>
                                  <a
                                    href="javascript:void(0);"
                                    className="d-block fs-12 fw-bold text-dark text-capitalize text-spacing-1"
                                  >
                                    From &#8358;1,200
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div className="col-xxl-4 col-md-6">
                              <div className="card stretch stretch-full">
                                <div className="card-body">
                                  <div className="avatar-text rounded-2 mb-4">
                                    <img src="./assets/images/orders/18.jpg" alt="" className="img-fluid" />
                                  </div>
                                  <h6 className="fw-bold mb-3 text-truncate-1-line">Jollof Rice & Chicken</h6>
                                  <p className="text-muted mb-4 text-truncate-3-line">
                                    A Nigerian favorite: Jollof rice served with perfectly fried/grilled/cooked chicken.
                                  </p>
                                  <a
                                    href="javascript:void(0);"
                                    className="d-block fs-12 fw-bold text-dark text-capitalize text-spacing-1"
                                  >
                                    From &#8358;4,000
                                  </a>
                                </div>
                              </div>
                            </div>


                            <div className="col-xxl-4 col-md-6">
                              <div className="card stretch stretch-full">
                                <div className="card-body">
                                  <div className="avatar-text rounded-2 mb-4">
                                    <img src="./assets/images/orders/17.jpg" alt="" className="img-fluid" />
                                  </div>
                                  <h6 className="fw-bold mb-3 text-truncate-1-line">Fried Rice & Chicken</h6>
                                  <p className="text-muted mb-4 text-truncate-3-line">
                                    Delicious fried rice paired with our signature grilled chicken.
                                  </p>
                                  <a
                                    href="javascript:void(0);"
                                    className="d-block fs-12 fw-bold text-dark text-capitalize text-spacing-1"
                                  >
                                    From &#8358;4,000
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dinner tab */}
                <div className="tab-pane fade" id='dinnerTab'>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card stretch stretch-full">
                        <div className="card-header">
                          <h5 className="card-title">Dinner</h5>
                          <div className="flex items-center space-x-2">
                            <input
                              type="text"
                              className="form-control w-48 p-2 border border-gray-300 rounded-md"
                              placeholder="Search Meals..."
                              aria-label="Search Meals"
                            />
                          </div>

                        </div>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-xxl-4 col-md-6">
                              <div className="card stretch stretch-full">
                                <div className="card-body">
                                  <div className="avatar-text rounded-2 mb-4">
                                    <img src="./assets/images/orders/14.jpg" alt="" className="img-fluid" />
                                  </div>
                                  <h6 className="fw-bold mb-3 text-truncate-1-line">Spicy Chicken Meal</h6>
                                  <p className="text-muted mb-4 text-truncate-3-line">
                                    A delicious and spicy chicken meal served with your choice of rice or fries.
                                  </p>
                                  <a
                                    href="javascript:void(0);"
                                    className="d-block fs-12 fw-bold text-dark text-capitalize text-spacing-1"
                                  >
                                    From &#8358;1,200
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div className="col-xxl-4 col-md-6">
                              <div className="card stretch stretch-full">
                                <div className="card-body">
                                  <div className="avatar-text rounded-2 mb-4">
                                    <img src="./assets/images/orders/18.jpg" alt="" className="img-fluid" />
                                  </div>
                                  <h6 className="fw-bold mb-3 text-truncate-1-line">Jollof Rice & Chicken</h6>
                                  <p className="text-muted mb-4 text-truncate-3-line">
                                    A Nigerian favorite: Jollof rice served with perfectly fried/grilled/cooked chicken.
                                  </p>
                                  <a
                                    href="javascript:void(0);"
                                    className="d-block fs-12 fw-bold text-dark text-capitalize text-spacing-1"
                                  >
                                    From &#8358;4,000
                                  </a>
                                </div>
                              </div>
                            </div>


                            <div className="col-xxl-4 col-md-6">
                              <div className="card stretch stretch-full">
                                <div className="card-body">
                                  <div className="avatar-text rounded-2 mb-4">
                                    <img src="./assets/images/orders/17.jpg" alt="" className="img-fluid" />
                                  </div>
                                  <h6 className="fw-bold mb-3 text-truncate-1-line">Fried Rice & Chicken</h6>
                                  <p className="text-muted mb-4 text-truncate-3-line">
                                    Delicious fried rice paired with our signature grilled chicken.
                                  </p>
                                  <a
                                    href="javascript:void(0);"
                                    className="d-block fs-12 fw-bold text-dark text-capitalize text-spacing-1"
                                  >
                                    From &#8358;4,000
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bulk Meal tab */}
                <div className="tab-pane fade" id='bulkMealTab'>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card stretch stretch-full">
                        <div className="card-header">
                          <h5 className="card-title">Bulk Meal</h5>
                          <div className="flex items-center space-x-2">
                            <input
                              type="text"
                              className="form-control w-48 p-2 border border-gray-300 rounded-md"
                              placeholder="Search Meals..."
                              aria-label="Search Meals"
                            />
                          </div>

                        </div>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-xxl-4 col-md-6">
                              <div className="card stretch stretch-full">
                                <div className="card-body">
                                  <div className="avatar-text rounded-2 mb-4">
                                    <img src="./assets/images/orders/19.jpg" alt="" className="img-fluid" />
                                  </div>
                                  <h6 className="fw-bold mb-3 text-truncate-1-line">Maxi Pot Lovers</h6>
                                  <p className="text-muted mb-4 text-truncate-3-line">
                                    A delicious and spicy chicken meal served with your choice of rice or fries and a sizzling pet drink of your choice.
                                  </p>
                                  <a
                                    href="javascript:void(0);"
                                    className="d-block fs-12 fw-bold text-dark text-capitalize text-spacing-1"
                                  >
                                    From &#8358;22,000
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div className="col-xxl-4 col-md-6">
                              <div className="card stretch stretch-full">
                                <div className="card-body">
                                  <div className="avatar-text rounded-2 mb-4">
                                    <img src="./assets/images/orders/18.jpg" alt="" className="img-fluid" />
                                  </div>
                                  <h6 className="fw-bold mb-3 text-truncate-1-line">Jollof Rice & Chicken</h6>
                                  <p className="text-muted mb-4 text-truncate-3-line">
                                    A Nigerian favorite: Jollof rice served with perfectly fried/grilled/cooked chicken.
                                  </p>
                                  <a
                                    href="javascript:void(0);"
                                    className="d-block fs-12 fw-bold text-dark text-capitalize text-spacing-1"
                                  >
                                    From &#8358;4,000
                                  </a>
                                </div>
                              </div>
                            </div>


                            <div className="col-xxl-4 col-md-6">
                              <div className="card stretch stretch-full">
                                <div className="card-body">
                                  <div className="avatar-text rounded-2 mb-4">
                                    <img src="./assets/images/orders/17.jpg" alt="" className="img-fluid" />
                                  </div>
                                  <h6 className="fw-bold mb-3 text-truncate-1-line">Fried Rice & Chicken</h6>
                                  <p className="text-muted mb-4 text-truncate-3-line">
                                    Delicious fried rice paired with our signature grilled chicken.
                                  </p>
                                  <a
                                    href="javascript:void(0);"
                                    className="d-block fs-12 fw-bold text-dark text-capitalize text-spacing-1"
                                  >
                                    From &#8358;4,000
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Menu items end*/}


          </div>
        </main>

        <Footer />

        {/* Add new menu item */}
        <div className="offcanvas offcanvas-end" tabIndex={-1} id="addNewItem">
          <div className="offcanvas-header ht-80 px-4 border-bottom border-gray-5">
            <div>
              <h2 className="fs-16 fw-bold text-truncate-1-line">Add New Menu Item</h2>
              <small className="fs-12 text-muted">Add a new menu item to be displayed on your storefront</small>
            </div>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="py-3 px-4 d-flex justify-content-between align-items-center border-bottom border-bottom-dashed border-gray-5 bg-gray-100">
            <div>
              <span className="fw-bold text-dark">Date:</span>
              <span className="fs-11 fw-medium text-muted">{currentDate}</span>
            </div>
            <div>
              <span className="fw-bold text-dark">Menu Item No:</span>
              <span className="fs-12 fw-bold text-primary c-pointer">#HC-CHR-0062524</span>
            </div>
          </div>
          <div className="offcanvas-body">
            <div className="form-group mb-4">
              <label className="form-label">Name of menu item <span className="text-danger">*</span></label>
              <input type="text" className="form-control" placeholder="E.g. Jollof rice meal" required />
            </div>
            <div className="form-group mb-4">
              <label className="form-label">Item Category <span className="text-danger">*</span></label>
              <select className="form-control" data-select2-selector="status">
                <option value="primary" data-bg="bg-primary">Breakfast</option>
                <option value="warning" data-bg="bg-warning">Lunch</option>
                <option value="teal" data-bg="bg-teal">Dinner</option>
                <option value="success" data-bg="bg-success">Bulk Meal</option>
              </select>
            </div>
            <div className="form-group mb-4">
              <label className="form-label">Item Price: <span className="text-danger">*</span></label>
              <input type="text" className="form-control" placeholder="E.g. &#8358;2,000" required />
            </div>
            <div className="form-group">
              <label className="form-label">Item Description:</label>
              <div data-editor-target="editor" className="ht-200"></div>
            </div>
            <div className="form-group mb-4">
              <label className="form-label">Item Tags <span className="text-danger">*</span></label>
              <select className="form-control" data-select2-selector="status">
                <option value="primary" data-bg="bg-primary">Citizen's Meals</option>
                <option value="warning" data-bg="bg-warning">Everyday Affordable Value Meals</option>
                <option value="success" data-bg="bg-success">Pot Meals</option>
                <option value="danger" data-bg="bg-danger" selected>Burgers & Sandwiches</option>
                <option value="teal" data-bg="bg-teal">Tasty Sides</option>
                <option value="indigo" data-bg="bg-indigo">Packaging</option>
                <option value="gray" data-bg="bg-gray-400">Drinks</option>
              </select>
            </div>
          </div>
          <div className="px-4 gap-2 d-flex align-items-center ht-80 border border-end-0 border-gray-2">
            <a href="javascript:void(0);" className="btn btn-primary w-50" data-alert-target="#alertMessage">Save Menu Item</a>
            <a href="javascript:void(0);" className="btn btn-danger w-50" data-bs-dismiss="offcanvas">Cancel</a>
          </div>
        </div>
      </body>
    </div>
  )
}

export default Menu