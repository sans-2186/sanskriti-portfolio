import SectionTitle from "./SectionTitle";

const skills = {
  "Languages": ["Java", "C++", "Python", "JavaScript", "SQL"],
  "Frameworks & Libs": ["React", "Node.js", "Express", "Tailwind CSS"],
  "Tools & Tech": ["Git", "VS Code", "Unix/Linux", "Postman"]
};

function Skills() {
  return (
    <section className="section" id="skills">
      <SectionTitle eyebrow="My Skills" title="My base of knowledge" />
  
      <div className="skills-container">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skills-category">
            <h3 className="skills-category-title">{category}</h3>
            <ul className="chip-list">
              {items.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
