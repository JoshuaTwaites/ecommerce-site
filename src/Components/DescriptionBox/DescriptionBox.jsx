import React from "react";
import './DescriptionBox.css'

const DescriptionBox = () => {
    return(
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Some static text is currently going here</p>
                <p>Some additional static text is currently going here</p>
            </div>
        </div>
    )
}

export default DescriptionBox