import React from 'react'
import icon1 from '/icon1.png'
import icon2 from '/icon2.png'
import icon3 from '/icon3.png'

export default function Ourfeatures() {
  return (
    <div className="container">
    <div className="row text-center justify-content-center">
      <div className="col-lg-2 col-sm-3 col-md-4">
        <div className='we-offer'>
          <div className='line'></div>
          <h6 className='text1-we-offer'>Our Core Features</h6>
          <div className='line'></div>
        </div>
      </div>
      
      <div className="row justify-content-center">
        <div className="col-lg-10">
        <div>
          <h2  className='text2-our-features'>A hight level Quality Control in compliance with National and In International regulations and standards</h2>
        </div>
        <div>
          <p className='text3-our-features'>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Consect petur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div className='vision-wrapper'>
            <ul className='list-unstyled d-lg-flex d-md-flex d-sm-block justify-content-center '>
                <li>
                    <a href="">
                        <img src={icon3} alt=""/>
                    </a>
                    <p className='d-sm-vision-wrapper'>Vision</p>
                </li>
                <li>
                    <a href="">
                        <img src={icon2} alt="" />
                    </a>
                    <p className='d-sm-vision-wrapper'>Values</p>
                </li>
                <li>
                    <a href="">
                        <img src={icon1} alt="" />
                    </a>
                    <p className='d-sm-vision-wrapper'>Mission</p>
                </li>
            </ul>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}
