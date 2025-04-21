import { useAppContext } from '../context/AppContext'
import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

const PostCard = ({ post }) => {
  const { users, dispatch } = useAppContext()
  const user = users.find((u) => u.id === post.userId)

  const handleLike = () => {
    dispatch({ type: 'LIKE_POST', payload: post.id })
  }

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 shadow-lg p-5 rounded-md transition-all"
      whileHover={{ scale: 1.02 }}
    >
      <div className="mb-2">
        <h2 className="font-bold text-lg">{user?.name}</h2>
        <p className="text-sm text-gray-500">{user?.role || 'Developer'}</p>
      </div>
      <p className="text-gray-800 dark:text-gray-200">{post.content}</p>
      <div className="flex justify-between items-center mt-4">
        <button
          className="flex items-center space-x-2 text-red-500 hover:scale-105 transition"
          onClick={handleLike}
        >
          <FaHeart /> <span>{post.likes}</span>
        </button>
        <span className="text-xs text-gray-500 dark:text-gray-400">#{post.tag}</span>
      </div>
    </motion.div>
  )
}

export default PostCard
