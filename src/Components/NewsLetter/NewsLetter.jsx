import React from "react";
import './NewsLetter.css'

export default function NewsLetter(){
    return(
        <div className="newsletter">
            <h1>Get Exclusive Offers To Your Email</h1>
            <p>Subscribe To Our News Letter And Stay Updated</p>
            <div>
                <input type="email" placeholder="Your Email Address"/>
                <button>Subscribe</button>
            </div>
        </div>
    )
}