import React from 'react'
import Header from '../components/Header'
import Logos from '../components/Logos'
import AppFeatures from '../components/AppFeatures'
import Slider from '../components/Slider'
import AppTransfers from '../components/AppTransfers'
import Testimonials from '../components/Testimonials'
import Faq from '../components/Faq'
import Subscribe from '../components/Subscribe'

function Home() {
  return (
    <>
      <Header />
      <Logos />
      <AppFeatures />
      <Slider />
      <AppTransfers />
      <Testimonials />
      <Faq />
      <Subscribe />
    </>
  )
}

export default Home