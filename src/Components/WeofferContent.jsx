import React from 'react'
import sample1 from '/sample1.jpg'
import sample2 from '/sample2.jpg'
import sample3 from '/sample3.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Pagination } from 'swiper/modules';


export default function WeofferContent() {
  return (
    <>
    <div className="container" style={{maxWidth:'1200px'}}>
      
        <div className="row ">
          <div className="col-lg-12  featured-home-col d-flex justify-content-center align-items-center">
          <Swiper
       
        modules={[Pagination,A11y]}
        spaceBetween={30}
       
        slidesPerView={1}
        
        pagination={{ clickable: true }} 
     
        breakpoints={{
            0: {
                slidesPerView: 0,
            },
            344:{
                slidesPerView:1,
            },
            400:{
                slidesPerView:1,
            },
            639: {
                slidesPerView: 2,
            },
          
            995:{
                slidesPerView:3,
                spaceBetween:70,

            },
            1200:{
                slidesPerView:3,
           
            }
        }}
         
        
    >
        <SwiperSlide>
            <section>
                <article className='box-info-modern wow slideInUp'>
                    <a href="" className='box-info-modern-figure view link-img'>
                        <img src={sample1} alt=""/>
                    </a>
                    
                    <div className='content-weoffer'>
                        <a href="">
                            <h4 className='fs-'>Agricultural Processing</h4>
                        </a>
                        <p>
                        Neque porro quisquam est, qui dolorem ipsum quira dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>
                        <h6>
                            <a href="" className='p-0'>
                            READ MORE
                            </a>
                         
                        </h6>
                    </div>
                   
                </article>
            </section>
        </SwiperSlide>
        <SwiperSlide>
            <section>
                <article className='box-info-modern wow slideInUp'>
                    <a href="" className='box-info-modern-figure view link-img'>
                        <img src={sample2} alt=""/>
                    </a>
                    
                    <div className='content-weoffer'>
                        <a href="">
                            <h4 className='fs-'>Meterial Engineering</h4>
                        </a>
                        <p>
                        Neque porro quisquam est, qui dolorem ipsum quira dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>
                        <h6>
                            <a href="" className='p-0'>
                            READ MORE
                            </a>
                         
                        </h6>
                    </div>
                   
                </article>
            </section>
        </SwiperSlide>
        <SwiperSlide>
            <section>
                <article className='box-info-modern wow slideInUp'>
                    <a href="" className='box-info-modern-figure view link-img'>
                        <img src={sample3} alt=""/>
                    </a>
                    
                    <div className='content-weoffer'>
                        <a href="">
                            <h4 className='fs-'>Oil and Lubricant</h4>
                        </a>
                        <p>
                        Neque porro quisquam est, qui dolorem ipsum quira dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>
                        <h6>
                            <a href="" className='p-0'>
                            READ MORE
                            </a>
                         
                        </h6>
                    </div>
                   
                </article>
            </section>
        </SwiperSlide>
          </Swiper>
          </div>
        </div>
    </div>
     
    </>
    
  )
}
