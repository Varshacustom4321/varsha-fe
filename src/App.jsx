import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './common/Header';
import Home from './pages/Home';
import RoutesUrls from './common/Routesurls';
import './css/App.css';

function App() {
  return (
    <div className='mainapp'>
      {/* Updated Router with basename for GitHub Pages */}
      <Router basename="/varsha-fe">
        <Header />
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home />} />
          
          {/* Dynamically rendered routes from RoutesUrls */}
          {RoutesUrls}
          
          {/* Optional: 404 catch-all route */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;