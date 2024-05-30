import { useState } from 'react'
import { Nav  ,Hero , Footer } from './Component'
import './App.css'
import Memory from './Component/Memory'
import Explore from './Component/Explore'
import Advertise from './Component/Advertise'
import Pricings from './Component/Pricings'
import Banner from './Component/Banner'
import Newslatter from './Component/NewsLatter'



import { hero } from './data/myData'
import { navlinks } from './data/myData'
import { memory } from './data/myData'
import { placesAPI } from './data/myData'
import { brands } from './data/myData'
import { pricingapi } from './data/myData'
import { bannerAPI } from './data/myData'
import { footerAPI } from './data/myData'







function App() {


  return (
       <>
        <Nav navlinks ={navlinks}></Nav>
        <Hero hero ={hero} ></Hero>
        <Memory memory={memory}></Memory>
        <Explore title="Explore The Beauty of India" placesAPI={placesAPI}  ></Explore>
        <Advertise brands={brands} ></Advertise>
        <Pricings pricingapi={pricingapi}></Pricings>
        <Banner bannerAPI={bannerAPI}></Banner>
        <Newslatter></Newslatter>
        <Footer  footerAPI={footerAPI}  ></Footer>
      
       
       
       </>
  )
}

export default App
