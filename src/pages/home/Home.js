import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'

import './home.scss'
import Widgets from '../../components/widgets/Widgets'

const Home = () => {
  return (
    <div className='home'>
    <Sidebar/>
    <div className="homeContainer">
    <Navbar />
    <div className='widgets'>
    <Widgets type="users"/>
    <Widgets type="orders"/>
    <Widgets type="earning"/>
    <Widgets type="balance"/>
    </div>
    </div>
    </div>
  )
}

export default Home