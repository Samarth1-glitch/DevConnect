import { Routes, Route } from 'react-router-dom'
import Feed from './pages/Feed'
import Profile from './pages/Profile'
import Projects from './pages/Projects'
import Connections from './pages/Connections'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/connections" element={<Connections />} />
      </Routes>
    </div>
  )
}

export default App
