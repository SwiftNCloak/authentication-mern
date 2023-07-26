import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Register from './components/register'

function App() {
  return (
    <Router>
      <div>
        <Link to={'/'}>Home</Link> |
        <Link to={'/login'}>Login</Link> | 
        <Link to={'/register'}>Register</Link>
      </div>
      <Routes>
        <Route path="/register" element = {< Register />} />
      </Routes>
      <hr />
    </Router>
  )
}

export default App
