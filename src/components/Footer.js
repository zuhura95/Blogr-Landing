import React from 'react'
import logo from '../images/logo.svg'

const Footer = () => {
    return (
        <>
           <footer>
               <div className="container">

              
               <div className="flex">
                   <div className="logo">
                       <img src={logo} alt=""/>
                   </div>
                   <div className="footer-links">

                       <div>
                           <h2> Product</h2>
                           <ul>
                               <li><a href="">Overview</a></li>
                               <li><a href="">Pricing</a></li>
                               <li><a href="">Marketplace</a></li>
                               <li><a href="">Features</a></li>
                               <li><a href="">Integrations</a></li>
                           </ul> 
                       </div>
                      
                       
                        <div>
                         <h2>Company </h2>
                           <ul>
                           <li><a href="">About</a></li>
                               <li><a href="">Team</a></li>
                               <li><a href="">Blog</a></li>
                               <li><a href="">Careers</a></li>
                            
                           </ul>   
                        </div>
                       
                       
                        <div>
                           <h2> Connect</h2>
                           <ul>
                           <li><a href="#">Contact</a></li>
                               <li><a href="#">Newsletter</a></li>
                               <li><a href="#">LinkedIn</a></li>
                           </ul>  
                        </div>
                      
                       


                   </div>
               </div>
               </div>
               </footer> 
        </>
    )
}

export default Footer
