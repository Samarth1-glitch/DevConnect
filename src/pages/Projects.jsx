import { useAppContext } from '../context/AppContext'
import ProjectCard from '../components/ProjectCard'
import Loader from '../components/Loader'

const Projects = () => {
  const { projects, loading } = useAppContext()

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Developer Projects</h2>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {projects.length ? (
            projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <p className="text-center text-gray-500">No projects found.</p>
          )}
        </div>
      )}
    </div>
  )
}

export default Projects
