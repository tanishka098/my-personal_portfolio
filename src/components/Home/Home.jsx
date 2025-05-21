/* eslint-disable no-unused-vars */
import React from 'react'
import "./Home.css"
import girl from "../../assets/girl.png"
import TypingEffect from "react-typing-effect"
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)


function Home() {

    useGSAP(() => {
        let tl1 = gsap.timeline();
        tl1.from(".line1", {
            y: 80,
            duration: 1,
            opacity: 0
        })
        tl1.from(".line2", {
            y: 80,
            duration: 1,
            opacity: 0
        })
        tl1.from(".line3", {
            y: 80,
            duration: 1,
            opacity: 0
        })

        gsap.from(".righthome img", {
            x: 200,
            duration: 1,
            opacity: 0
        })

    })
    return (
        <div id="home">
            <div className="lefthome">
                <div className="homedetails">
                    <div className="line1">I am</div>
                    <div className="line2">Tanya Gupta .</div>
                    <div className="line3">
                        <TypingEffect
                            text={["ASPIRING FULLL STACK DEVELOPER", " ASPIRING WEB DEVELOPER", "  ASPIRING SOFWARE  DEVELOPER"]}
                            speed={100}
                            eraseSpeed={50}
                            eraseDelay={1000}
                            typingDelay={500}
                            cursor='_'
                        />
                    </div>
                    {/* <button>HIRE ME</button> */}
                    <a href="#contact" className="btn">Hire me....</a>
                    <br></br>
                    <br></br>

                    <a
                        href="/TANYA GUPTA - Resume.pdf"  // path to the PDF in the public folder
                        download            // Forces the file to download when clicked
                        className="resume-link"
                    >
                        Download My Resume
                    </a>




                </div>
            </div>
            <div className="righthome">
                <img src={girl} alt="" />
            </div>

        </div>

    )
}

export default Home