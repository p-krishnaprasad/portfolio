import { MdArrowOutward } from "react-icons/md";
import SectionWrapper from "../layout/SectionWrapper.jsx";
import ContentCard from "../layout/ContentCard.jsx";

export default function Experience({
  experiences,
  analyticsSource = "experiences",
}) {
  return (
    <SectionWrapper id="experience" title="Experience">
      <ol className="group/list">
        {experiences.map((exp, index) => (
          <li key={index} className="mb-12">
            <ContentCard
              link={exp.companyLink}
              title={`${exp.role} · ${exp.company}`}
              description={exp.description}
              tags={exp.technologies}
              analyticsSource={analyticsSource}
            >
              <header
                className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                aria-label={exp.period}
              >
                {exp.period}
              </header>
            </ContentCard>
          </li>
        ))}
      </ol>
    </SectionWrapper>
  );
}
