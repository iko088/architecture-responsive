import React from 'react'
import Landingpage from './LandingPage/Landingpage'
import About from './LandingPage/About'
import Mission from './LandingPage/Mission'
import Projects from './LandingPage/Projects'
import Form from './LandingPage/Form'

const MainHome = () => {
  return (
    <div>
      <Landingpage/>
      <About/>
      <Mission/>
      <Projects/>
      <Form/>
    </div>
  )
}

export default MainHome
