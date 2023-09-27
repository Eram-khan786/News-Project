import React from 'react'
import Hero from '../components/Hero'
import Fetch from '../components/Fetch'

const Home = () => {
  return (
    <div style={{minHeight:"100vh"}}>
        <Hero/>
        <Fetch/>
    </div>
  )
}

export default Home