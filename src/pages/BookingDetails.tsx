/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'

function BookingDetails() {
  return (
    <div>
      <Sidebar />

      <Header />

      <main className="nxl-container">
        <div className="nxl-content">
          {/* Page header starts */}
          <div className="page-header">
            <div className="page-header-left d-flex align-items-center">
              <div className="page-header-title">
                <h5 className="m-b-10">Booking Details</h5>
              </div>
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Dashboard</a></li>
                <li className="breadcrumb-item"><a href="/bookings">Bookings</a></li>
                <li className="breadcrumb-item">Booking Details</li>
              </ul>
            </div>
          </div>

          {/* Booking details content */}
          <div className="main-content">
            <div className="row">
              <div className="col-xxl-8">
                <div className="card stretch stretch-full">
                  <div className="card-body">
                    <div className="mb-4 text-center">
                      <div className="wd-150 ht-150 mx-auto mb-3 position-relative">
                        <div className="avatar-image wd-150 ht-150 border border-5 border-gray-3">
                          <img src="assets/images/rest-1.png" alt="" className="img-fluid" />
                        </div>
                        <div className="wd-10 ht-10 text-success rounded-circle position-absolute translate-middle" style={{ top: '76%', right: '10px' }}>
                          <i className="bi bi-patch-check-fill"></i>
                        </div>
                      </div>
                      <div className="mb-4">
                        <a href="javascript:void(0);" className="fs-14 fw-bold d-block">Company Board Meeting</a>
                        <a href="javascript:void(0);" className="fs-12 fw-normal text-muted d-block">Tim Mujong • #BKID-124572</a>
                      </div>
                      <div className="fs-12 fw-normal text-muted text-center d-flex flex-wrap gap-3 mb-4 pb-2">
                        <div className="flex-fill py-3 px-4 rounded-1 d-none d-sm-block border border-dashed border-gray-5">
                          <i className="feather-clock"></i><h6 className="fs-15 fw-bolder">Date & Time</h6>
                          <p className="fs-12 text-muted mb-0">11th October, 2024 • 12:30PM</p>
                        </div>
                        <div className="flex-fill py-3 px-4 rounded-1 d-none d-sm-block border border-dashed border-gray-5">
                          <i className="feather-file-text"></i><h6 className="fs-15 fw-bolder">Space Booked</h6>
                          <p className="fs-12 text-muted mb-3 text-truncate-2-line">Main Conference Hall</p>
                        </div>
                        <div className="flex-fill py-3 px-4 rounded-1 d-none d-sm-block border border-dashed border-gray-5">
                          <i className="feather-users"></i><h6 className="fs-15 fw-bolder">Number of Guests</h6>
                          <p className="fs-12 text-muted mb-0">36 Guests</p>
                        </div>
                      </div>
                    </div>
                    <ul className="list-unstyled mb-4">
                      <li className="hstack justify-content-between mb-4">
                        <span className="text-muted fw-medium hstack gap-3">
                          <i className="feather-map-pin"></i>Location
                        </span>
                        <a href="javascript:void(0);" className="float-end">Conference Room, Colors by Royal Cafe, Wuse II</a>
                      </li>
                      <li className="hstack justify-content-between mb-4">
                        <span className="text-muted fw-medium hstack gap-3">
                          <i className="feather-phone"></i>Phone
                        </span>
                        <a href="javascript:void(0);" className="float-end">+234(0)-703-258-9645</a>
                      </li>
                      <li className="hstack justify-content-between mb-4">
                        <span className="text-muted fw-medium hstack gap-3">
                          <i className="feather-mail"></i>Email
                        </span>
                        <a href="javascript:void(0);" className="float-end">timmy.mujong@outlook.com</a>
                      </li>
                      <li className="hstack justify-content-between mb-0">
                        <span className="text-muted fw-medium hstack gap-3">
                          <i className="feather-tag"></i>Event Type
                        </span>
                        <a href="javascript:void(0);" className="float-end bg-soft-warning badge text-warning">Company Meeting</a>
                      </li>
                    </ul>
                    <div className="d-flex gap-2 text-center pt-4">
                      <a href="javascript:void(0);" className="w-50 btn btn-light-brand">
                        <i className="feather-download-cloud me-2"></i>
                        <span>Download Details</span>
                      </a>
                      <a href="javascript:void(0);" className="w-50 btn btn-primary">
                        <i className="feather-edit me-2"></i>
                        <span>Edit Booking</span>
                      </a>
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

export default BookingDetails