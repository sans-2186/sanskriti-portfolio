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
        </div>
      </nav>
      <div className="hero-content">
        <p className="eyebrow">ACM Mentor Program!</p>
        <h1>Mr. Peechi</h1>
        <p>
          This portfolio is meant as a starting point for something great!
        </p>
      </div>
    </section>
  );
}

export default Hero;
