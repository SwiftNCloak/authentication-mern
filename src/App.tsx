import './App.css'
import { BrowserRouter, Route, Link } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to={'/login'}>Login</Link> | 
        <Link to={'/register'}>Register</Link>
      </div>
    </BrowserRouter>
  )
}

export default App
