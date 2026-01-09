// src/components/Projects.jsx
import SectionWrapper from "../layout/SectionWrapper.jsx";
import ProjectImage from "./ProjectImage.jsx";
import ContentCard from "../layout/ContentCard.jsx";

export default function Projects({ projects, analyticsSource = "projects" }) {
  return (
    <SectionWrapper id="projects" title="Projects">
      <ol className="group/list">
        {projects.map((prj, index) => (
          <li key={index} className="mb-12">
            <ContentCard
              link={prj.link}
              title={prj.title}
              description={prj.description}
              tags={prj.technologies}
              analyticsSource={analyticsSource}
            >
              <ProjectImage
                imageName={prj.image} // e.g., "course-card.png" from JSON
                alt={prj.title}
                className="sm:col-span-2 mb-6 w-full h-auto rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30"
              />
            </ContentCard>
          </li>
        ))}
      </ol>
    </SectionWrapper>
  );
}
