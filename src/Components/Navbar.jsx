import React from 'react'
import logo from '/mobile_logo.png'
import logo1 from '/Logo_Header.png'
import { BiSearchAlt } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import phoneIcon from '/phone-icon.png'
import locationIcon from '/location-icon.png'

export default function Navbar() {
  return (
    <section>
      <header>
        <div>
          <div className="container">
            <div className="row row-top-one">
              <div className="col col-md-6 col-sm-12">
                <p  className='text1-top-one'>Welcome to Leader in Industrial Solution since 2005</p>
              </div>
              <div className="col-md-6 col-sm-12">
                <p  className='text2-top-one'>
                Global Certificate:										
                <span>ISO 9001:2015</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container bg-color-top-two ps-lg-4 ps-md-5">
          <div className="row py-1 row-top-two">
            <div className="col-lg-4 col-md-3 col-sm-12 col-xs-12">
             <div className='logo1 py-4'>
              <img src={logo1} alt="" />
             </div>
            </div>
            <div className="col-lg-8 col-md-9 col-sm-12 col-xs-12 d-flex ps-5 justify-content-lg-end align-items-lg-end">
              <div className="top-two-right d-flex">    
                <div className="top-two-panel">
                  <ul className='d-flex p-0'>
                    <li className='top-nav-location list-unstyled d-flex'>
                      <div className="item-location">
                      <NavLink>
                          <img src={locationIcon} alt="" />
                        </NavLink>
                      </div>
                      <div className="item-location-body">
                      <p className='pe-5 '>
                      Email Address									
                          <br />
                          <span>info@industrial.com</span>
                        </p>
                      </div>
                    </li>
                    <li className='top-nav-phone list-unstyled d-flex'>
                      <div className="item-phone">
                        <NavLink>
                          <img src={phoneIcon} alt="" />
                        </NavLink>
                      </div>
                      <div className="item-phone-body">
                        <p >
                        Call Us													
                          <br />
                          <span>18004567890</span>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className='m-text-top-two req-button'>
                  <a href="" className='text-decoration-none pointer-event text-center'>
                   Request A Quote
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
        
        <nav className="navbar navbar-expand-lg  nav-home-three  py-2">
          <div className="container   ">
            <div className="row">
              <div className="col col-md-nav-home-three d-flex d-lg-none">
                  <div className='logo'>
                    <img src={logo} alt="" />
                  </div>
                  <div className='cmn-toggle-switch d-lg-none'>
                  </div>
                </div>
              <div className="col col-lg-nav-home-three">
               
                <button className="navbar-toggler bg-color-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end bg-offcanvas" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><div className='logo'>
                      <img src={logo1} alt="" />
                      </div>
                    </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end me-5 pe-5 fw-medium align-items-center">
                      <li className="nav-item">
                        <a className="nav-link active px-3" aria-current="page" href="#">HOME</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link px-3" aria-current="page" href="#">ABOUTUS</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link px-3" aria-current="page" href="#">SERVICES</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link px-3" aria-current="page" href="#">PROJECTS</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link px-3" aria-current="page" href="#">NEWS</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link px-3" aria-current="page" href="#">SHOP</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link px-3" aria-current="page" href="#">CONTACTUS</a>
                      </li>
                    </ul>
                    <div className='search-form-style'>
                    <form className="d-flex search-form bg-form border-0 " role="search">
                      <input className="form-control" id="myInput" type="search" placeholder="Enter Search Keywords" aria-label="Search"/>
                      <span className='input-group-addon'>
                        <a className="btn" type="submit"><BiSearchAlt size={20}/></a>
                      </span>
                    </form>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </section>
  )
}
