import { Route } from 'react-router-dom'
import Home from '../pages/Home'
import Services from '../pages/Serivices'
import Amc from '../pages/Amc'
import About from '../pages/About'
import Terms from '../pages/Terms'

const RoutesUrls = [
  
    <Route key="/" path="/" element={<Home />} />,
    <Route key="/services" path="/services" element={<Services />} />,
    <Route key="/amc" path="/amc" element={<Amc />} />,
    <Route key="/about" path="/about" element={<About />} />,
    <Route key='/terms' path='/terms' element={<Terms />} />

]

export default RoutesUrls