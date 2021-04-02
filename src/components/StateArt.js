import React from 'react'
import image_source from '../images/illustration-phones.svg'


const StateArt = () => {
    return (
        <>
            <div className="section-container">
                <div className="flex">
                
                    <div className="phone-image">
                        <img src={image_source} alt=""/>
                    </div>

                    <div className="state-description">
                       <h2>State of the Art Infrastructure</h2>
                    <p>
                    With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
                    This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.

                    </p>  
                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default StateArt
