import { createContext, useContext, useEffect, useReducer } from 'react'
import appReducer from '../reducers/appReducer'
import { getPosts, getUsers, getProjects } from '../services/api'

const AppContext = createContext()

const initialState = {
  darkMode: true,
  users: [],
  posts: [],
  projects: [],
  loading: true,
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  useEffect(() => {
    const fetchData = async () => {
      const [usersData, postsData, projectsData] = await Promise.all([
        getUsers(),
        getPosts(),
        getProjects(),
      ])
      dispatch({ type: 'SET_DATA', payload: { users: usersData, posts: postsData, projects: projectsData } })
    }

    fetchData()
  }, [])

  const toggleDarkMode = () => {
    dispatch({ type: 'TOGGLE_DARK' })
  }

  return (
    <AppContext.Provider value={{ ...state, dispatch, toggleDarkMode }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
