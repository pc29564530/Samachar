import React from 'react';
import './Footer.css';
import {SocialIcon} from 'react-social-icons';

function Footer() {
    return (
        <div className="footer">
            <span className="name">
                Samachar made by Pawan Kumar
            </span>
            
            <hr />
            <div className="iconContainer">
                <a href="https://www.instagram.com/" target="__blank">
                  <SocialIcon url="https://twitter.com/"/>
                </a>  
                <a href="https://www.linkedin.com/" target="__blank">
                  <SocialIcon url="https://linkedin.com/" /> 
                </a>  
                <a href="https://www.linkedin.com/" target="__blank">
                  <SocialIcon url="https://github.com/" /> 
                </a> 
                <a href="https://www.linkedin.com/" target="__blank">
                  <SocialIcon url="https://gmail.com/" /> 
                </a> 
            </div>
        </div>
    )
}

export default Footer;
