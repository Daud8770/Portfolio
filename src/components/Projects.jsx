import { projectsData } from "../data/projectsData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-16 bg-[#0a0a0c] text-white">
      <div className="max-w-[1420px] mx-auto">
        
        {/* Section Heading */}
        <div className="mb-12">
          <p className="text-orange-500 text-sm font-semibold uppercase tracking-wider">
            My Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-1">
            Featured <span className="text-orange-500">Projects</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((item) => (
            <ProjectCard key={item.id} project={item} />
          ))}
        </div>

      </div>
    </section>
  );
}