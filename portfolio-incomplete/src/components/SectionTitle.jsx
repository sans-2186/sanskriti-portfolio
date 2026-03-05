function SectionTitle({ eyebrow, title }) {
  return (
    <header className="section-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </header>
  );
}

export default SectionTitle;
