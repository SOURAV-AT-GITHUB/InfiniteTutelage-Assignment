import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import React, { useState } from 'react'
import UniversalPage from './pages/UniversalPage'


function App() {

  const [activePage, setActivePage] = useState(null)
  const CurrentRouteLogger = () => {
    const location = useLocation();
  
    React.useEffect(() => {
      // console.log('Current route:', location.pathname);
      setActivePage(location.pathname)
    }, [location]);
  
    return null;
  };
  return (
    <div>
      <Navbar activePage={activePage}/>
      <CurrentRouteLogger/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/*' element={<UniversalPage/>}/>
      </Routes>
    </div>
  )
}

export default App
