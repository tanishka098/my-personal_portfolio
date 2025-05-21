// eslint-disable-next-line no-unused-vars
import React from 'react'
import Card from '../Card/Card'
import pr1 from "../../assets/pr1.png"
import pr2 from "../../assets/pr2.png"
import pr3 from "../../assets/pr3.png"
import pr4 from "../../assets/pr4.png"
import {useGSAP} from "@gsap/react"
import gsap from 'gsap'




import "./Projects.css"

function Projects(){
    useGSAP(()=>{
        gsap.from("#para", {
            y: 100,
            duration: 1,
            opacity: 0,
            stagger: 1,
            scrollTrigger: {
                trigger: "#para",
                scroll: "body",
                scrub:2,
                start:"top 80%",
                end:"top 30%"  
            } 
        })
            gsap.from(".slider", {
                y: 100,
                duration: 1,
                opacity: 0,
                stagger: 1,
                scrollTrigger: {
                    trigger: ".slider",
                    scroll: "body",
                    scrub:2,
                    start:"top 80%",
                    end:"top 30%"  
                } 
        })
    })
    return(
        <div id="projects">
            <h1 id='para'>MY PROJECTS</h1>
            <div className="slider">

            {/* <a href="https://github.com/tanishka098/chess_clone" target="" rel="noopener noreferrer"> */}
                  <Card title="Chess.Clone" image={pr1}/>
            {/* </a> */}

            {/* <a href="https://github.com/tanishka098/File-sharing" target="_blank" rel="noopener noreferrer"> */}
                 <Card title="FILE SHARING APPLICATION" image={pr2}/>
            {/* </a> */}

            {/* <a href="https://github.com/tanishka098/Project/tree/main/Unit%20Convertor" target="_blank" rel="noopener noreferrer"> */}
                   <Card title="UNIT CONVERTOR" image={pr3}/>
            {/* </a> */}
            {/* <a href="https://github.com/tanishka098/Project/tree/main/weather-app-main" target="_blank" rel="noopener noreferrer"> */}
                   <Card title="WEATHER APP" image={pr4}/>
                   {/* </a> */}
                
    
            </div>
        </div>
  
    )
}

export default Projects