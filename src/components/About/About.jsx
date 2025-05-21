// /* eslint-disable no-unused-vars */
// import React from "react";
// import "./About.css"
// import Card from "../Card/Card";
// import mern from "../../assets/mern.png"
// import java from "../../assets/java.png"
// import dsa from "../../assets/dsa.png"
// import { useGSAP } from "@gsap/react"
// import gsap from 'gsap'
// import { ScrollTrigger } from "gsap/all";
// gsap.registerPlugin(ScrollTrigger)

// function About() {

//     useGSAP(() => {
//         gsap.from(".circle", {
//             x: -100,
//             duration: 1,
//             opacity: 0,
//             stagger: 1,
//             scrollTrigger: {
//                 trigger: ".circle",
//                 scroll: "body",
//                 scrub: 2,
//                 start: "top 60%",
//                 end: "top 30%"
//             }
//         })
//         gsap.from(".line", {
//             x: -100,
//             duration: 1,
//             opacity: 0,
//             stagger: 1,
//             scrollTrigger: {
//                 trigger: ".line",
//                 scroll: "body",
//                 scrub: 2,
//                 start: "top 60%",
//                 end: "top 30%"
//             }
//         })
//         gsap.from(".aboutdetails h1", {
//             x: -100,
//             duration: 1,
//             opacity: 0,
//             stagger: 1,
//             scrollTrigger: {
//                 trigger: ".aboutdetails h1",
//                 scroll: "body",
//                 scrub: 2,
//                 start: "top 60%",
//                 end: "top 30%"
//             }
//         })

//         gsap.from(".aboutdetails ul", {
//             y: 100,
//             duration: 1,
//             opacity: 0,
//             stagger: 1,
//             scrollTrigger: {
//                 trigger: ".aboutdetails ul",
//                 scroll: "body",
//                 scrub: 2,
//                 start: "top 60%",
//                 end: "top 30%"
//             }
//         })

//         gsap.from(".rightabout ", {
//             x: 100,
//             duration: 1,
//             opacity: 0,
//             stagger: 1,
//             scrollTrigger: {
//                 trigger: ".rightabout",
//                 scroll: "body",
//                 scrub: 2,
//                 start: "top 60%",
//                 end: "top 30%"
//             }


//         })
//     })

//     return (
//         <div id="about">
//             <div className="leftabout">
//                 <div className="circle-line">
//                     <div className="circle"></div>
//                     <div className="line"></div>
//                     <div className="circle"></div>
//                     <div className="line"></div>
//                     <div className="circle"></div>
//                 </div>
//                 <div className="aboutdetails">
//                     <div className="personalinfo">
//                         <h1>Personal Info</h1>
//                         <ul>
//                             <li>
//                                 <span>NAME</span> : TANYA GUPTA
//                             </li>
//                             <li>
//                                 I'm a passionate web developer with a
//                                 <br></br>
//                                 strong foundation in creating dynamic
//                                 <br></br>
//                                 responsive websites.

//                             </li>
//                             <li>
//                                 <span>Age</span>: 23,    <span>City</span>: Noida
//                             </li>


//                         </ul>
//                     </div>
//                     <div className="education">
//                         <h1>Education</h1>
//                         <ul>
//                             <li>
//                                 <span>GRADUATION</span> : BCA
//                             </li>
//                             <li>
//                                 <span>BRANCH</span> : COMPUTER SCIENCE & APPLICATION
//                             </li>
//                             <li>
//                                 <span>PERCENTAGE</span> : 73,
//                             </li>
//                         </ul>

//                         <ul>
//                             <li>
//                                 <span> POST GRADUATION</span> : MCA
//                             </li>
//                             <li>
//                                 <span>BRANCH</span> : COMPUTER SCIENCE & APPLICATION
//                             </li>
//                             <li>
//                                 <span>CGPA</span> : 8.28
//                             </li>
//                         </ul>
//                     </div>
//                     <div className="skills">
//                         <h1>Skills</h1>
//                         <ul>
//                             <li>
//                                 <span> Programming Language:</span> C, JAVA
//                             </li>
//                             <li>
//                                 <span>Web Development:-</span>
//                                 <br></br>
//                                 <span>Frontend</span>: HTML,CSS,JS, REACT
//                                 <br></br>
//                                 <span>Backend</span>: NODEJS, EXPRESS SERVER
//                             </li>
//                             <li>
//                                 <span>DATABASE</span>: MYSQL, MONGODB
//                             </li>

//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             <div className="rightabout">
//                 <Card title="MERN STACK DEVELOPER" image={mern} />
//                 <Card title="JAVA DDEVELOPER" image={java} />
//                 <Card title="DSA" image={dsa} />



//             </div>

//         </div>

//     )
// }

// export default About



/* eslint-disable no-unused-vars */
import React from "react";
import "./About.css";
import Card from "../Card/Card";
import mern from "../../assets/mern.png";
import java from "../../assets/java.png";
import dsa from "../../assets/dsa.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function About() {
  useGSAP(() => {
    gsap.from(".circle", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".circle",
        scroll: "body",
        scrub: 2,
        start: "top 60%",
        end: "top 30%",
      },
    });

    gsap.from(".line", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".line",
        scroll: "body",
        scrub: 2,
        start: "top 60%",
        end: "top 30%",
      },
    });

    gsap.from(".aboutdetails h1", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".aboutdetails h1",
        scroll: "body",
        scrub: 2,
        start: "top 60%",
        end: "top 30%",
      },
    });

    gsap.from(".aboutdetails ul", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".aboutdetails ul",
        scroll: "body",
        scrub: 2,
        start: "top 60%",
        end: "top 30%",
      },
    });

    gsap.from(".rightabout", {
      x: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".rightabout",
        scroll: "body",
        scrub: 2,
        start: "top 60%",
        end: "top 30%",
      },
    });
  });

  return (
    <div id="about">
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>

        <div className="aboutdetails">
          <div className="personalinfo">
            <h1>Personal Info</h1>
            <ul>
              <li><span>Name:</span> Tanya Gupta</li>
              <li>
                I am a passionate full stack developer dedicated to building dynamic,
                user-friendly, and responsive web applications. I thrive on challenges and continuously
                strive to enhance my technical skills and creativity.
              </li>
              <li><span>Age:</span> 23 &nbsp;&nbsp;&nbsp; <span>City:</span> Noida</li>
            </ul>
          </div>

          <div className="education">
            <h1>Education</h1>
            <ul>
              <li><span>Graduation:</span> BCA</li>
              <li><span>Branch:</span> Computer Science & Applications</li>
              <li><span>Percentage:</span> 73%</li>
            </ul>
            <ul>
              <li><span>Post Graduation:</span> MCA</li>
              <li><span>Branch:</span> Computer Science & Applications</li>
              <li><span>CGPA:</span> 8.28</li>
            </ul>
          </div>

          <div className="skills">
            <h1>Skills</h1>
            <ul>
              <li><span>Languages:</span> C, Java</li>
              <li>
                <span>Web Development:</span><br />
                <span>Frontend:</span> HTML, CSS, JavaScript, React<br />
                <span>Backend:</span> Node.js, Express.js
              </li>
              <li><span>Database:</span> MySQL, MongoDB</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="rightabout">
        <Card title="MERN Stack Developer" image={mern} />
        <Card title="Java Developer" image={java} />
        <Card title="DSA Enthusiast" image={dsa} />
      </div>
    </div>
  );
}

export default About;

