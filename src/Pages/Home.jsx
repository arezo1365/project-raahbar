import React from 'react'
import { MdOutlineHorizontalRule } from 'react-icons/md'
import slider from '/Slider.jpg'
import { PiArrowsOutLineHorizontal } from 'react-icons/pi'
import Weoffer from '../Components/Weoffer'
import WeofferContent from '../Components/WeofferContent'
import solutionBg from '/solution-bg.jpg'
import Ourfeatures from '../Components/Ourfeatures'
import Solution from '../Components/Solution'
import GetClient from '../Components/GetClient'
import Solution2 from '../Components/Solution2'
import Leader from '../Components/Leader'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function Home() {
  const styleSection1BgImg={
    backgroundImage:  `url(${slider})`,
    width:'auto',
    height:"460px",
    display:"block"

  }
 
  const styleSection7BgImg={
    backgroundImage:  `url(${solutionBg})`,
  }
  return (
    <>
    <section id='section1' className='pb-5 section1 bg-position1 bg-ovrlay margin-section1-home'  style={styleSection1BgImg}>
      <Leader/>
    </section>
    <section className='section2 mt-5'>
      <Weoffer/>
    </section>
    <section className='section3 section-xl section-last bg-default'>
      <WeofferContent/>
    </section>
    <section className='section4 mb-5'>
      <Ourfeatures/>
    </section>
    <section className='section5  bg-section5'>
      <Solution/>
    </section>
    <section className='section6 mt-5 mb-5'>
     
      <GetClient/>
    </section>
    <section className='section7 bg-section7' style={styleSection7BgImg}>
      <Solution2/>
    </section>
    </>
  )
}
