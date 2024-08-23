import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import CRMPage from './pages/CRMPage'
import TradingSection from './components/TradingSection'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/crm' element={<CRMPage/>}/>
        <Route path='/test' element={<TradingSection/>}/>
      </Routes>
    </div>
  )
}

export default App
