import './App.css'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Register from './components/register'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to={'/login'}>Login</Link> | 
        <Link to={'/register'}>Register</Link>
      </div>
      <Register />
    </BrowserRouter>
  )
}

export default App
