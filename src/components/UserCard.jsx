import { Link } from 'react-router-dom'

const UserCard = ({ user }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow hover:scale-105 transition">
      <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
        {user.name}
      </h3>
      <p className="text-gray-500 dark:text-gray-300">{user.role || 'Frontend Dev'}</p>
      <Link
        to={`/profile/${user.id}`}
        className="text-sm text-blue-500 hover:underline"
      >
        View Profile →
      </Link>
    </div>
  )
}

export default UserCard
