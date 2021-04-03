import React from 'react'
import hamburger from '../images/icon-hamburger.svg'
import close from '../images/icon-close.svg'
import {IoIosArrowDown} from 'react-icons/io'
import logo from '../images/logo.svg'

const HeaderMobile = () => {

    const showNav = () =>{
      

        document.querySelector('.hamburger-menu').addEventListener('click', ()=>{
        
            document.querySelector('.menu-mobile').classList.toggle('open')
            document.querySelector('.hamburger-bars').classList.toggle('close')
            document.querySelector('.hamburger-cross').classList.toggle('open')

        
        })
    }
   
    return (
        <>
   
        <div className="nav-mobile">
            <div className="flex">
               <img src={logo} alt="Blogr"/>

                <div className="hamburger-menu" onClick ={()=> showNav()}>
                   <img className="hamburger-bars" src={hamburger} alt=""/>
                   <img className="hamburger-cross" src={close} alt=""/>
               </div>
              

            </div>
  
       </div>

       
       <div className="menu-mobile">

        <ul>
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

        </li>

        <li>
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
        </li>

        <li>
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

<div className="nav-buttons-mobile">
            <button className='transparent-btn'>Login</button>
    <button className='white-btn'>Sign Up</button>
        </div>
        
</div>
        </>
    )
}

export default HeaderMobile
