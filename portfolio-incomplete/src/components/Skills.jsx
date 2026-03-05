import SectionTitle from "./SectionTitle";

const skills = ["DemoSkill"];

function Skills() {
  return (
    <section className="section" id="skills">
      {/* TODO: Update eyebrow and title props */}
      <SectionTitle eyebrow="My skills" title="My base of knowledge" />
      <ul className="chip-list">
        {/* TODO: Map over the skills array and render each as a list item */}
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
    </section>
  );
}

export default Skills;
