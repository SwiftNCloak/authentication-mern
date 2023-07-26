import './App.css'
import { BrowserRouter, Route, Link } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to={'/login'}></Link>
        <Link to={'/register'}></Link>
      </div>
    </BrowserRouter>
  )
}

export default App
