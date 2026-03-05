import { useMemo, useState } from "react";
import SectionTitle from "./SectionTitle";

function Projects({ items }) {
  // TODO: Derive a unique tag list from project tech stacks and include "All".
  const tags = useMemo(() => {
    // TODO: Replace with logic that collects and deduplicates tags.
    return ["All"];
  }, [items]);

  // TODO: Track the selected filter.
  const [activeTag, setActiveTag] = useState("All");

  // TODO: Filter projects by activeTag ("All" should show every project).
  const visibleProjects = items;
  // TODO: Replace with filter logic:
  // const visibleProjects =
  //   activeTag === "All"
  //     ? items
  //     : items.filter((project) => project.techStack.includes(activeTag));

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
              <h3></h3>
              <p></p>
              <ul className="chip-list small">
                {project.techStack.map((tech) => (
                  <li key={`${project.title}-${tech}`}>
                    {/* TODO: Render each tech label */}
                  </li>
                ))}
              </ul>
              {/* TODO: Add project link text and href target */}
              <a href={project.link} target="_blank" rel="noreferrer noopener"></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
