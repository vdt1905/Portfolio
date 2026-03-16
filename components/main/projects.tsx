import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";
import ScrollStack, { ScrollStackItem } from "@/components/sub/ScrollStack";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 z-[20] w-full"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        My Projects
      </h1>
      
      <div className="w-full max-w-[1000px] relative">
        <ScrollStack
          useWindowScroll={true}
          itemDistance={120}
          itemScale={0.05}
          itemStackDistance={40}
          baseScale={0.8}
          blurAmount={2}
        >
          {PROJECTS.map((project, idx) => (
            <ScrollStackItem key={idx} itemClassName="p-0 border-0 bg-transparent shadow-none w-full max-w-[800px] mx-auto">
              <ProjectCard
                src={project.image}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
};
