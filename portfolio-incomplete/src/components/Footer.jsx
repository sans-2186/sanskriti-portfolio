function Footer() {
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} Sanskriti Tiwari. All rights reserved.
      </p>
      <div className="footer-links">
        <a href="https://github.com/sans-2186" target="_blank" rel="noreferrer">GitHub</a>
        {'     '}
        <a href="https://www.linkedin.com/in/sanskriti-tiwari-ab300030b/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}

export default Footer;
