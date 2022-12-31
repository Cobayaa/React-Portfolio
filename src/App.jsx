import React from 'react'
import Nav from '../src/components/nav/Nav'
import Header from './components/header/Header'
import About from './components/about/About'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Darkmode from './components/darkmode/Darkmode'
const App = () => {
  return (
    <>
    <Nav/>
    <Darkmode/>
    <Header/>
    <About/>
    <Services/>
    <Portfolio/>
    <Contact/>
    </>
  )
}

export default App