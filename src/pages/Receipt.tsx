import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'

function Invoice() {
    return (
        <div>
            <body>
                {/* Sidebar */}
                <Sidebar />

                {/* Header */}
                <Header />

                {/* Main container */}
                <main className="nxl-container">
                    <div className="nxl-content">
                        {/* Page Header */}
                        <div className="page-header">
                            <div className="page-header-left d-flex align-items-center">
                                <div className="page-header-title">
                                    <h5 className="m-b-10">Receipt</h5>
                                </div>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                                    <li className="breadcrumb-item"><a href="/wallet">Wallet</a></li>
                                    <li className="breadcrumb-item">View Receipt</li>
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
                                </div>
                                <div className="d-md-none d-flex align-items-center">
                                    <a href="javascript:void(0)" className="page-header-right-open-toggle">
                                        <i className="feather-align-right fs-20"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Main container for invoice */}
                        <div className="main-content container-lg">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card invoice-container">
                                        <div className="card-header">
                                            <div>
                                                <h2 className="fs-16 fw-700 text-truncate-1-line mb-0 mb-sm-1">Payment Receipt</h2>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center">
                                                <a href="#" className="d-flex me-1" data-alert-target="invoicSendMessage">
                                                    <div className="avatar-text avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Send Invoice">
                                                        <i className="feather feather-send"></i>
                                                    </div>
                                                </a>
                                                <a href="#" className="d-flex me-1 printBTN">
                                                    <div className="avatar-text avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Print Invoice">
                                                        <i className="feather feather-printer"></i>
                                                    </div>
                                                </a>
                                                <a href="#" className="d-flex me-1 file-download">
                                                    <div className="avatar-text avatar-md" data-bs-toggle="tooltip" data-bs-trigger="hover" title="Download Invoice">
                                                        <i className="feather feather-download"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="card-body p-0">
                                            <div className="px-4 pt-4">
                                                <div className="d-sm-flex align-items-center justify-content-between">
                                                    <div>
                                                        <div className="avatar-image avatar-md">
                                                            <img src="./assets/images/logo-abbr.png" alt="" />
                                                        </div>
                                                        <div className="fs-24 fw-bolder font-montserrat-alt text-uppercase">Chicken Republic</div>
                                                        <address className="text-muted">
                                                            P.O. Box 900210,<br />
                                                            Ademola Adetokunbo Crescent, Wuse II<br />
                                                            VAT No: 2617 348 2752
                                                        </address>
                                                        <div className="d-flex gap-2">
                                                            <a href="#" className="avatar-text avatar-sm">
                                                                <i className="feather-facebook"></i>
                                                            </a>
                                                            <a href="#" className="avatar-text avatar-sm">
                                                                <i className="feather-twitter"></i>
                                                            </a>
                                                            <a href="#" className="avatar-text avatar-sm">
                                                                <i className="feather-instagram"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="lh-lg pt-3 pt-sm-0">
                                                        <h2 className="fs-4 fw-bold text-primary">Receipt</h2>
                                                        <div>
                                                            <span className="fw-bold text-dark">Transaction ID:</span>
                                                            <span className="fw-bold text-primary">#HC-CFR-369852</span>
                                                        </div>
                                                        <div>
                                                            <span className="fw-bold text-dark">Payment Date:</span>
                                                            <span className="text-muted">26 AUG, 2024</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="border-dashed" />
                                            <div className="px-4 py-sm-5">
                                                <div className="d-sm-flex gap-4 justify-content-center">
                                                    <div className="text-sm-end">
                                                        <h2 className="fs-16 fw-bold text-dark mb-3">Receipt For</h2>
                                                        <address className="text-muted lh-lg">
                                                            Grace Emeka<br />
                                                            Wuse II, Abuja PO Box 900218<br />
                                                            VAT No: 295 3932 6119<br />
                                                            Nigeria
                                                        </address>
                                                    </div>
                                                    <div className="border-end border-end-dashed border-gray-500 d-none d-sm-block"></div>
                                                    <div className="mt-4 mt-sm-0">
                                                        <h2 className="fs-16 fw-bold text-dark mb-3">Payment Details:</h2>
                                                        <div className="text-muted lh-lg">
                                                            <div>
                                                                <span className="text-muted">Total Due:</span>
                                                                <span className="fw-bold text-dark">₦1,000</span>
                                                            </div>
                                                            <div>
                                                                <span className="text-muted">Payout Status:</span>
                                                                <span className="fw-bold text-warning">Pending</span>
                                                            </div>
                                                            <div>
                                                                <span className="text-muted">Card Holder:</span>
                                                                <span className="fw-bold text-dark">Grace Emeka</span>
                                                            </div>
                                                            <div>
                                                                <span className="text-muted">Payment Method:</span>
                                                                <span className="fw-bold text-dark">Bank Transfer</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="border-dashed mt-0" />
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th>Ordered From</th>
                                                            <th>Item(s) Purchased</th>
                                                            <th>QTY</th>
                                                            <th></th>
                                                            <th>Amount</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <a href="#" className="hstack gap-3">
                                                                    <div className="avatar-image avatar-md">
                                                                        <img src="assets/images/vendors/4.png" alt="" className="img-fluid" />
                                                                    </div>
                                                                    <div>
                                                                        <span className="text-truncate-1-line">Chicken Republic, Wuse II</span>
                                                                    </div>
                                                                </a>
                                                            </td>
                                                            <td><a href="#">Jollof Rice Combo Meal</a></td>
                                                            <td>2</td>
                                                            <td></td>
                                                            <td className="text-dark fw-semibold">₦1,000.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={3}></td>
                                                            <td className="fw-semibold text-dark bg-gray-100 text-lg-end">Sub Total</td>
                                                            <td className="fw-bold text-dark bg-gray-100">+ ₦2,150.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={3}></td>
                                                            <td className="fw-semibold text-dark bg-gray-100 text-lg-end">Discount (CFR2024 - 15%)</td>
                                                            <td className="fw-bold text-success bg-gray-100">- ₦800.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={3}></td>
                                                            <td className="fw-semibold text-dark bg-gray-100 text-lg-end">Estimated Tax (12.5%)</td>
                                                            <td className="fw-bold text-dark bg-gray-100">+ ₦50.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={3}></td>
                                                            <td className="fw-semibold text-dark bg-gray-100 text-lg-end">Total Amount</td>
                                                            <td className="fw-bolder text-dark bg-gray-100">= ₦3,120.00</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <hr className="border-dashed mt-0" />
                                            <div className="px-4">
                                                <div className="alert alert-dismissible p-4 mt-3 alert-soft-warning-message" role="alert">
                                                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                                    <p className="mb-0">
                                                        <strong>NOTES:</strong> Thank you for your purchase! If you have any questions, please contact us at info@hupchop.com.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="px-4 pt-4 d-sm-flex align-items-center justify-content-between">
                                                <div className="mb-5 mb-sm-0">
                                                    <h6 className="fs-13 fw-bold mb-3">Terms & Condition :</h6>
                                                    <ul className="list-unstyled lh-lg fs-12">
                                                        <li># Payment should be made 30 minutes from when this receipt was issued.</li>
                                                        <li># Customers can pay either by cash, debit card, USSD, or bank transfer.</li>
                                                        <li># This is a computer-generated receipt and does not require a physical signature.</li>
                                                    </ul>
                                                </div>
                                                <div className="text-center">
                                                    <img src="assets/images/general/signature.png" className="img-fluid wd-100" alt="image" />
                                                    <h6 className="fs-13 fw-bold mt-2">Account Manager</h6>
                                                    <p className="fs-11 fw-semibold text-muted">26 MAY 2024, 10:35PM</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

export default Invoice