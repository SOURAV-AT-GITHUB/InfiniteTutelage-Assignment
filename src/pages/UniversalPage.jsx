import React, { useContext } from 'react'
import Header from '../components/Header'
import { smallScreenContext } from '../contexts/SmallScreenProvider'

function UniversalPage({activePage}) {
  const  {isOpen , setIsOpen} = useContext(smallScreenContext)
  return (
    <div className='h-screen  m-auto  self-center w-full  min-[900px]:w-10/12 text-right static  min-[900px]:absolute right-0' onClick={()=>{
      if(isOpen){
        setIsOpen(false)
      }
    }}>
        
        <Header title={activePage.slice(1)} activePage={activePage}/>
        <div className='h-3/4 text-5xl font-bold text-center items-center grid'>
        <h3 >Only dashboard page is live</h3>
        </div>

    </div>
  )
}

export default UniversalPage