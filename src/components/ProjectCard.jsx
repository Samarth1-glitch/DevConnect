import { motion } from 'framer-motion'

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md"
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
        {project.title}
      </h3>
      <p className="text-gray-700 dark:text-gray-200 mt-2">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        className="inline-block mt-3 text-sm text-blue-500 hover:underline"
      >
        View Project →
      </a>
    </motion.div>
  )
}

export default ProjectCard
