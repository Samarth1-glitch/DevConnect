import { useAppContext } from '../context/AppContext'
import PostCard from '../components/PostCard'
import Loader from '../components/Loader'

const Feed = () => {
  const { posts, loading } = useAppContext()

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Developer Feed</h2>
      {loading ? (
        <Loader />
      ) : (
        <div className="space-y-4">
          {posts.length > 0 ? (
            posts.map((post) => <PostCard key={post.id} post={post} />)
          ) : (
            <p className="text-center text-gray-500">No posts found.</p>
          )}
        </div>
      )}
    </div>
  )
}

export default Feed
