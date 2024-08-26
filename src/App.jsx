import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import React, { useEffect, useState } from 'react'
import UniversalPage from './pages/UniversalPage'

import { useMediaQuery } from '@chakra-ui/react'


function App() {

  const [activePage, setActivePage] = useState('/')
  const [isSmallScreen] = useMediaQuery('(max-width: 900px)')
  const CurrentRouteLogger = () => {
    const location = useLocation();
    useEffect(() => {
      setActivePage(location.pathname)
    }, [location]);
    return null;
  };
  return (
    <>
      <Navbar activePage={activePage} isSmallScreen={isSmallScreen}/>
      <CurrentRouteLogger/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/*' element={<UniversalPage activePage={activePage.slice(1)} />}/>

      </Routes>
    </>
  )
}

export default App
