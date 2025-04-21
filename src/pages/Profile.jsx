import { useParams } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import PostCard from '../components/PostCard'
import Loader from '../components/Loader'

const Profile = () => {
  const { id } = useParams()
  const { users, posts, loading } = useAppContext()

  const user = users.find((u) => u.id === id)
  const userPosts = posts.filter((p) => p.userId === id)

  if (loading) return <Loader />

  if (!user) {
    return (
      <div className="text-center py-10 text-red-500">
        <p>User not found.</p>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
        <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">{user.name}</h2>
        <p className="text-gray-600 dark:text-gray-300">{user.role}</p>
        <p className="mt-2 text-sm">{user.bio || 'This user has not added a bio yet.'}</p>
      </div>

      <h3 className="text-lg font-semibold mb-3">Posts by {user.name}</h3>
      {userPosts.length ? (
        userPosts.map((post) => <PostCard key={post.id} post={post} />)
      ) : (
        <p className="text-gray-500">No posts yet.</p>
      )}
    </div>
  )
}

export default Profile
