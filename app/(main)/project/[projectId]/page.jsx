import { getProject } from "@/actions/projects";
import { notFound } from "next/navigation";


export default async function ProjectPage({ params }) {
  const { projectId } = params;
  const project = await getProject(projectId);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto">
      {/* <SprintCreationForm/> */}

      {/* {project.sprints} */}
    </div>
  );
}