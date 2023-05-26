import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok, FaCocktail } from 'react-icons/fa'
import '../styles/style.css'

export function Footer() {

    return (
        <>
            <div className="footer-container">
                <footer style={{ backgroundColor: '#212529' }}>

                    <div className="d-flex justify-content-center py-3">

                        <span style={{color: 'white'}} className="footer-logo"><FaCocktail color="#31c288" /> MyCocktail</span>

                        <a href="https://www.facebook.com/" style={{ marginRight: 25 }}>
                            <FaFacebook className="footer-icon" size={40} />
                        </a>

                        <a href="https://www.twitter.com/" style={{ marginRight: 25 }}>
                            <FaTwitter className="footer-icon" size={40} />
                        </a>

                        <a href="https://www.instagram.com/" style={{ marginRight: 25 }}>
                            <FaInstagram className="footer-icon" size={40} />
                        </a>

                        <a href="https://www.tiktok.com/" style={{ marginRight: 25 }}>
                            <FaTiktok className="footer-icon" size={40} />
                        </a>
                    </div>
                    <div className="text-center" style={{backgroundColor: "#212529", color: '#31c288', marginRight: 25}}>
                        © 2023 Copyright: 
                        <i className="text-white"> Asaf Nahari</i>
                    </div>
                </footer>

            </div>
        </>
    )
}