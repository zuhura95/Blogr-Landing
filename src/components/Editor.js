import React from 'react'
import image_source from '../images/illustration-laptop-desktop.svg'
import image_source_mobile from '../images/illustration-laptop-mobile.svg'

const Editor = () => {
    return (
        <>
            <div className="editor-flex">
                <div className="image-laptop">
                    <img src={image_source} alt=""/>
                </div>
                <div className="image-laptop-mobile">
                    <img src={image_source_mobile} alt=""/>
                </div>
                <div className="description">
                    <h3>
                    Free, open, simple
                    </h3>
                    <p>
                    Blogr is a free and open source application backed by a large community of helpful developers. It supports 
                    features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
                    and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                            
                    </p>


                    <h3>
                    Powerful Tooling
                    </h3>
                    <p>
                    Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
                    capable of producing even the most complicated sites.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Editor
