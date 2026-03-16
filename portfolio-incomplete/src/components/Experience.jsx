import SectionTitle from "./SectionTitle";

function Experience() {
  const experiences = [
    {
      role: "Lead Student Borrowing Assistant",
      company: "ILL Department, University of North Texas",
      period: "March 2025 – June 2025",
      description: "Managed high-volume data workflows for 100+ weekly interlibrary loan requests, optimizing material routing efficiency and ensuring 100% accuracy in resource tracking.",
    },
    // Add more objects here as you get more experience!
  ];

  return (
    <section className="section" id="experience">
      <SectionTitle eyebrow="Experience" title="Work History" />
      <div className="timeline-container">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <p className="company-name">{exp.company} | <span>{exp.period}</span></p>
              <p className="exp-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;