import SectionTitle from "./SectionTitle";

const skills = {
  "Languages": ["Java", "C++", "Python", "MIPS", "JavaScript"],
  "Frameworks & Libs": ["React", "Node.js", "NLTK", "TensorFlow", "CSS"],
  "Data Analysis & Visualization": ["NumPy", "Matplotlib", "Seaborn", "Pandas"],
  "Tools & Tech": ["Git", "VS Code", "Linux", "MySQL"]
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
