import React from 'react'
import icon4 from '/icon4.jpg'
import icon5 from '/icon5.jpg'
import icon6 from '/icon6.jpg'
import icon7 from '/icon7.jpg'
import icon8 from '/icon8.jpg'
import icon9 from '/icon9.jpg'
import { MdOutlineHorizontalRule } from 'react-icons/md'
export default function GetClient() {
  return (
   <div className="container">
    <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="row">
                <div className="col-lg-7 col-md-7 col-sm-6">
                    <div className='we-offer'>
                    {/* <div className='line'></div> */}
                   
                    <MdOutlineHorizontalRule className='color-icon-get'/>
                    <h6 className='text1-we-offer'>We Work Globally</h6>
                </div>
            </div>
            </div>           
            <div>   
                <h1>Our Clients</h1>
                <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipis civelit sed quia non qui dolorem ipsum quia dolor sit amet, consectetur, adipis civelit. Red quia numquam eius modi.
                </p>
            </div>
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2">
                <div className="col">
                    <img src={icon4} alt="" />
                </div>
                <div className="col">
                    <img src={icon5} alt="" />
                </div>
                <div className="col">
                    <img src={icon6} alt="" />
                </div>
                <div className="col">
                    <img src={icon7} alt="" />
                </div>
                <div className="col">
                    <img src={icon8} alt="" />
                </div>
                <div className="col">
                    <img src={icon9} alt="" />
                </div>
            </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="row">
                <div className="col-lg-7 col-md-7 col-sm-6">
                    <div className='we-offer'>
                        <MdOutlineHorizontalRule className='color-icon-get'/>
                        <h6 className='text1-we-offer'>Contact Us</h6>
                    </div>
                </div>
            </div>   
            <div>
                <h1>Get In Touch</h1>
            </div>
            <div className="row row-cols-lg-12 row-cols-md-12 row-cols-sm-12">
                <div class="mb-3">
                    <input  type="text" class="form-control"  name="" id=""  aria-describedby="helpId" placeholder="Your Name"/>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Email"></input>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Select One</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <input size="40" class="wpcf7-form-control wpcf7-text form-control" aria-invalid="false" placeholder="Your Phone Number:" value="" type="text" name="your-phone">
                    </input>
                    <button type="submit" class="btn mt-3  req-button4" value="Submit Now">
                    <a href="" className='button button-lg button-primery'>Submit Now</a>
                    </button>
                   
                </div>
            </div>
        </div>
    </div>
   </div>
  )
}
