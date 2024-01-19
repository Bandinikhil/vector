import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Table from './Table'

const Dashboard = () => {
  return (
    <>
    <div className='flex flex-col'>
    <Header/>
    <div className='flex'>    
    <Sidebar/>
    {/* <Table/> */}
    </div>
   
    </div>
   
    </>
  )
}

export default Dashboard