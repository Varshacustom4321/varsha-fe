import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './common/Header'
import Home from './pages/Home'
import RoutesUrls from './common/Routesurls'
import './css/App.css'

function App() {
  return (
    <div className='mainapp'>
      <Router>
        <Header />
        <Routes>
          {RoutesUrls}
        </Routes> 
      </Router>
    </div>
  )
}

export default App
