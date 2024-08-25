import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="fs-11 text-muted fw-medium text-uppercase mb-0 copyright">
        <span>Copyright ©</span>
        {currentYear} Hupchop.
      </p>
      <div className="d-flex align-items-center gap-4">
        <a href="javascript:void(0);" className="fs-11 fw-semibold text-uppercase">Help</a>
        <a href="javascript:void(0);" className="fs-11 fw-semibold text-uppercase">Terms</a>
        <a href="javascript:void(0);" className="fs-11 fw-semibold text-uppercase">Privacy</a>
      </div>
    </footer>
  );
};

export default Footer;
