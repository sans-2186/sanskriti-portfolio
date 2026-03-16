function Hero() {
  return (
    <section className="hero section" id="home">
      <nav className="top-nav" aria-label="Primary">
        <a href="#home" className="brand">
          Mentee Portfolio
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contacts">Contacts</a>
        </div>
      </nav>
      <div className="hero-content">
        <p className="eyebrow">ACM Mentor Program!</p>
        <h1>Sanskriti Tiwari</h1>
        <p>
          I build things with code and make sense of things with data
        </p>
      </div>
    </section>
  );
}

export default Hero;
