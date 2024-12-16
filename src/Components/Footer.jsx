import React from 'react'
import bgFooter from '/bg.jpg'
import logoFooter from '/Logo_footer.png'
import { MdOutlineHorizontalRule, MdOutlineMailOutline } from 'react-icons/md'
import { FaMapMarkerAlt, FaPhoneAlt, FaPinterest } from 'react-icons/fa'
import { BsChevronDoubleRight } from 'react-icons/bs'
import { IoLogoTwitter } from 'react-icons/io5'
import { FaFacebookF, FaLinkedin, FaYoutube } from 'react-icons/fa6'
import { RiTimerLine } from 'react-icons/ri'

export default function Footer() {
  return (
    
    <footer className='footer-bg'>
    <section>
      <div className="containe p-con-footer">
        <div className="row row-cols-1 row-cols-lg-4 py-5 ">
          <div className="col col-md-6 col-lg-3 col-one-footer ">
            <a href="" className='pb-2'>
              <img src={logoFooter} alt="" className='logoFooter' />
            </a>
            <p className='text-col-footer'>
            We give value to the excellence and top class engineers, but in terms of accurate service. 			

            </p>
            <a href="" className='r-m-footer'>
              Read More<BsChevronDoubleRight/>
            </a>
            <ul className='footer-list footer-icon-links d-flex mt-3 fff'>
              <li className='pe-3'>
                <a className='align-items-center' href='#'>
               
                <IoLogoTwitter size={25} className='icon-color-footer'/>
              
                </a>
              </li>
              <li className='pe-3'>
                <a className='align-items-center' href='#'>
                <FaFacebookF size={25} className='icon-color-footer'/>
                </a>
              </li>
              <li className='pe-3'>
                <a className='align-items-center' href='#'>
                  <FaLinkedin size={25} className='icon-color-footer'/>
                </a>
              </li>
              <li className='pe-3'>
                <a className='align-items-center' href='#'>
                  <FaPinterest size={25} className='icon-color-footer'/>
                </a>
              </li>
              <li className='icon-p-sm-footer'>
                <a className='align-items-center' href=""></a>
                  <FaYoutube size={25} className='icon-color-footer'/>
              </li>
            
            </ul>
          </div>
          <div className="col col-sm-6 col-md-6 col-lg-3">
          <h4 className='title-footer'>Our Solutions</h4>
            <ul className='footer-list footer-icon-links'>
              <li  className='pb-2'>
                <a className='align-items-center' href='#'>
                   
                <MdOutlineHorizontalRule className='footer-icon-compnt ' size={20} />
                <span className='text-col-footer'>Power And Energy</span>
                </a>
              </li>
              <li className='pb-2'>
                <a className='align-items-center' href='#'>
                   
                   <MdOutlineHorizontalRule className='footer-icon-compnt' size={20} />
                   <span className='text-col-footer'>Oil and Lubricant</span>
                </a>
              </li>
              <li className='pb-2'>
                <a className='align-items-center' href='#'>
                   
                   <MdOutlineHorizontalRule className='footer-icon-compnt' size={20} />
                   <span className='text-col-footer' >Meterial Engineering</span>
                </a>
              </li>
              <li  className='pb-2'>
                <a className='align-items-center' href='#'>
                   
                   <MdOutlineHorizontalRule className='footer-icon-compnt' size={20} />
                   <span className='text-col-footer'>Mechanical Engineering</span>
                </a>
              </li>
              <li  className='pb-2'>
                <a className='align-items-center' href='#'>
                   
                   <MdOutlineHorizontalRule className='footer-icon-compnt' size={20} />
                   <span className='text-col-footer'>Chemical Research</span>
                </a>
              </li>
              <li  className='pb-2'>
                <a className='align-items-center' href='#'>
                   
                   <MdOutlineHorizontalRule className='footer-icon-compnt' size={20} />
                   <span className='text-col-footer'>Alternate Energy</span>
                </a>
              </li>
              
            </ul>
          </div>
          
          <div className="col col-md-6 col-lg-3">
          <h4 className='title-footer title-footer-sm'>Quick Links</h4>
            <ul className='footer-list footer-icon-links  list-unstyled'>
              <li className='pb-2'>
                <a className='align-items-center' href='#'>
                   
                <MdOutlineHorizontalRule className='footer-icon-compnt' size={20} />
                <span  className='text-col-footer'>About Us</span>
                </a>
              </li>
              <li className='pb-2'>
                <a className='align-items-center' href='#'>
                   
                   <MdOutlineHorizontalRule className='footer-icon-compnt' size={20} />
                   <span  className='text-col-footer'>News</span>
                </a>
              </li>
              <li className='pb-2'>
                <a className='align-items-center' href='#'>
                   
                   <MdOutlineHorizontalRule className='footer-icon-compnt' size={20} />
                   <span  className='text-col-footer'>Testimonials</span>
                </a>
              </li>
              <li  className='pb-2'>
                <a className='align-items-center' href='#'>
                   
                   <MdOutlineHorizontalRule className='footer-icon-compnt' size={20} />
                   <span  className='text-col-footer'>Request A Quote</span>
                </a>
              </li>
              <li  className='pb-2'>
                <a className='align-items-center' href='#'>
                   
                   <MdOutlineHorizontalRule className='footer-icon-compnt' size={20} />
                   <span  className='text-col-footer'>FAQ</span>
                </a>
              </li>
             
            </ul>
          </div>
          <div className="col col-sm-6 col-md-6 col-lg-3 col-xl-3">
            <h4 className='title-footer title-footer-sm'>Get In Touch</h4>
            <ul className='footer-list footer-icon-links  list-unstyled'>
                <li>
                  <div className="unit d-flex">
                    <div className="unit-left icon-footer"><FaMapMarkerAlt /></div>
                    <div className="unit-body font-footer">
                      <a href="" className='text-col-footer'>
                      523 Sylvan Ave, 5th Floor
                      <br />
                      Mountain View, CA 94041 USA
                      </a>
                    </div>

                  </div>
                </li>
                <li>
                  <div className="unit d-flex">
                    <div className="unit-left icon-footer"><FaPhoneAlt /></div>
                    <div className="unit-body font-footer">
                      <a href="" className='text-col-footer'>
                      (+844) 123 456 78
                      </a>
                    </div>

                  </div>
                </li>
                <li>
                  <div className="unit d-flex">
                    <div className="unit-left icon-footer"><MdOutlineMailOutline/></div>
                    <div className="unit-body font-footer">
                      <a href="" className='text-col-footer'>
                        info@demolink.org
                      </a>
                    </div>

                  </div>
                </li>
                <li>
                  <div className="unit d-flex">
                    <div className="unit-left icon-footer"><RiTimerLine/></div>
                    <div className="unit-body font-footer">
                      <a href="" className='text-col-footer'>
                        info@demolink.org
                      </a>
                    </div>

                  </div>
                </li>
              
              </ul>
           
              
             
          </div>
        </div>
      </div>
    </section>
    <section>
    <div className="container-fluid bg-color-footer-bottom">
        <div className="row">
          <div className="col-lg-6 col-sm-12 text-center py-3">
            <span>
            Copyright © 2024 Industrial WP Theme demo. All Rights Reserved. 
            </span>
            
          </div>
          <div className="col-lg-6 col-sm-12 text-center py-3">
            <span>
            Developed by  
            </span>
            <a href="" className='text-footer-bottom'>ThemeChampion</a>
          </div>
        </div>
      </div>
    </section>
    </footer>
  )
}
