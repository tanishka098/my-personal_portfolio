// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Footer.css"
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin3.png';
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)




const Footer = () => {
    useGSAP(()=>{
        gsap.from(".footer",{
            x:-100,
            duration: 1,
            opacity: 0,
            stagger: 1,
            scrollTrigger:{
                trigger: "footer",
                scroll: "body",
            }
        })
            gsap.from(".links",{
                x:-100,
                duration: 1,
                opacity: 0,
                stagger: 1,
                scrollTrigger:{
                    trigger: ".links",
                    scroll: "body", 
                }


        })
    })
    return (
        <footer className='footer'>
            copyright @2025 Tanya Gupta, All right received.

            <div className='links'>
            <a href="https://github.com/tanishka098" target="_blank" rel="noopener noreferrer">
            <img src={github} alt='github' className='link1' />

            <a href="https://www.linkedin.com/in/tanya-gupta-523419269/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt='link' className='link2' />
            </a>
            </a>

            
            
        </div>


        </footer>


    );

}

export default Footer