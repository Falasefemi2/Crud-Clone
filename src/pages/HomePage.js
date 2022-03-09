import React from 'react'
import AppRating from '../components/AppRating/AppRating'
import Brand from '../components/Brand/Brand'
import Header from '../components/common/Header/Header'
import CredExperience from '../components/CredExperience/CredExperience'
import CredSecurity from '../components/CredSecurity/CredSecurity'
import CredStory from '../components/CredStory/CredStory'
import FeelSpecial from '../components/FeelSpecial/FeelSpecial'
import HeroSection from '../components/HeroSection'
import MobileScroll from '../components/MobileScroll/MobileScroll'
import ProductShowCase from '../components/ProductShowCase/ProductShowCase'
import WindowPeak from '../components/WindowPeak/WindowPeak'
    
const HomePage = () => {
  return (
    <>
    <Header />
    <HeroSection />
    <ProductShowCase />
    <FeelSpecial />
    <Brand />
    <CredExperience />
    <MobileScroll />
    <div className="non-mobile">
    <WindowPeak />
    </div>
    <CredSecurity />
    <CredStory />
    <AppRating />
    </>
  )
}

export default HomePage