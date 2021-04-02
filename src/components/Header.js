import React from 'react'
import logo from '../images/logo.svg'
import {IoIosArrowDown} from 'react-icons/io'

const Header = () => {
    return (

        <div className="header-container">
        <header>
        
        <nav>
               <div className="flex">
                   <img src={logo} alt="Blogr"/>

               
                <ul className="nav-desktop">
                    <li>

                        <div className="dropdown">
                            <button className="dropBtn">
                                Product <IoIosArrowDown/>
                            </button>
                            <div className="dropdown-menu">
                                <a href="">Overview</a>
                            <a href="">Pricing</a>
                            <a href="">Marketplace</a>
                            <a href="">Features</a>
                            <a href="">Integrations</a>
                            </div>
                        </div>


                        <div className="dropdown">
                            <button className="dropBtn">
                                Company <IoIosArrowDown/>
                            </button>
                            <div className="dropdown-menu">
                                <a href="">About</a>
                            <a href="">Team</a>
                            <a href="">Blog</a>
                            <a href="">Careers</a>
                            </div>
                        </div>

                        <div className="dropdown">
                            <button className="dropBtn">
                                Connect <IoIosArrowDown/>
                            </button>
                            <div className="dropdown-menu">
                                <a href="">Contact</a>
                            <a href="">Newsletter</a>
                            <a href="">LinkedIn</a>
                            </div>
                        </div>


                    </li>
                </ul>

             
                <div className="nav-buttons">
                    <button className='transparent-btn'>Login</button>
                    <button className='white-btn'>Sign Up</button>
                </div>

               </div>

             
       </nav>

       <div className="flex-column">
           
       <h1>A modern publishing platform</h1>
       <p>Grow your audience and build your online brand</p>
       <button className='white-btn'>Start for Free</button>
       <button className='outline-btn'>Learn More</button>
       </div>
       
           
        
    </header>
        </div>
   
    )
}

export default Header
