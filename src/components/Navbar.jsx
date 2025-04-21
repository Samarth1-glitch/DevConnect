import { Link, useLocation } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import { FaMoon, FaSun } from 'react-icons/fa'

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useAppContext()
  const location = useLocation()

  const navItems = [
    { name: 'Feed', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Connections', path: '/connections' },
  ]

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-100 dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-600 dark:text-white">DevConnect</h1>
      <div className="flex items-center space-x-6">
        {navItems.map(({ name, path }) => (
          <Link
            key={name}
            to={path}
            className={`text-sm font-medium transition ${
              location.pathname === path
                ? 'text-blue-500 dark:text-blue-400'
                : 'text-gray-600 dark:text-gray-300'
            } hover:text-blue-600`}
          >
            {name}
          </Link>
        ))}
        <button
          onClick={toggleDarkMode}
          className="p-2 text-xl text-yellow-500 dark:text-white hover:scale-105 transition"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
