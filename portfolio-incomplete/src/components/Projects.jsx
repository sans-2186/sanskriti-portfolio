import { useMemo, useState } from "react";
import SectionTitle from "./SectionTitle";

function Projects({ items }) {
  const tags = useMemo(() => {
    // This looks at all your projects and collects every tech used
    const allTech = items.flatMap(project => project.techStack);
    // 'Set' removes the duplicates so you don't have two "React" buttons
    return ["All", ...new Set(allTech)];
  }, [items]);

  // TODO: Track the selected filter.
  const [activeTag, setActiveTag] = useState("All");

  // TODO: Filter projects by activeTag ("All" should show every project).
  const visibleProjects = useMemo(() => {
    return activeTag === "All" 
      ? items 
      : items.filter((project) => project.techStack.includes(activeTag));
  }, [activeTag, items]);

  return (
    <section className="section" id="projects">
      <SectionTitle eyebrow="Projects" title="Some of my work" />

      <div className="filter-row" role="toolbar" aria-label="Filter projects">
        {tags.map((tag) => (
          <button
            type="button"
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={activeTag === tag ? "filter active" : "filter"}
            aria-pressed={activeTag === tag}
          >
            {/* TODO: Render filter button label */}
            {tag}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {visibleProjects.map((project) => (
          <article className="project-card" key={project.title}>
            {/* TODO: Render project preview image and accessible alt text */}
            <img src={project.image} alt="" />
            <div className="project-content">
              {/* TODO: Render project title and description */}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="chip-list small">
                {project.techStack.map((tech) => (
                  <li key={`${project.title}-${tech}`}>
                    {tech}
                  </li>
                ))}
              </ul>
              <a href={project.link} target="_blank" rel="noreferrer noopener">View Project</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
