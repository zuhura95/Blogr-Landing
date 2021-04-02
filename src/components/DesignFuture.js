import React from 'react'
import image_source from '../images/illustration-editor-desktop.svg'
import image_mobile_source from '../images/illustration-editor-mobile.svg'

const DesignFuture = () => {
    return (
        <>
        <div className="design-section">
        <div>
        <h2>Designed for the Future</h2>
        </div>
        <div className="flex">
        <div className="image-mobile">
                   <img src={image_mobile_source} alt=""/>
               </div>
            <div className="description">

             
                <h3>Introducing an extensible editor</h3>
                    <p>
                    Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                    The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                    videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                    change the looks of a blog.
                    </p>
                <h3>Robust content management</h3>
                <p>
                Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.

                </p>
            </div>

            <div className="image">
                <img src={image_source} alt=""/>
            </div>

        </div>
        </div>
       

        </>
    )
}

export default DesignFuture
