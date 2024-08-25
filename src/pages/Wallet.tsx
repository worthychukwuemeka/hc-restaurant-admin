/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

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

            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Wallet