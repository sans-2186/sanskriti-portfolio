function Footer() {
  return (
    <footer className="site-footer">
      <p>
        {/* TODO: Add footer text with year, name, or links */}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
