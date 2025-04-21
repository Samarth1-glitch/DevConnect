import { useAppContext } from '../context/AppContext'
import UserCard from '../components/UserCard'
import Loader from '../components/Loader'

const Connections = () => {
  const { users, loading } = useAppContext()

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Your Connections</h2>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {users.length ? (
            users.map((user) => <UserCard key={user.id} user={user} />)
          ) : (
            <p className="text-center text-gray-500">No connections yet.</p>
          )}
        </div>
      )}
    </div>
  )
}

export default Connections
