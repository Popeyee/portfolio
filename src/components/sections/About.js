import React from 'react';
import profile_pic1 from '../images/profile_pic1.png';
import 'animate.css';
import { useInView } from "react-intersection-observer";




const About = () => {
    const [ref, inView] = useInView({ threshold: 0 })
    return (
              <div className={inView ? " About_container  animate__animated animate__fadeIn animate__fast flex flex-column items-center avenir mb5" : "anim2 About_container flex flex-column items-center avenir"} > 

                <div className='About_box flex  items-center  '>
                    <img className="About_pic  justify-center contain w-50" id="profile_pic" alt="Profile Pic" 
                        title="Profile Picture" src={profile_pic1}></img>   
                        
                    <div ref={ref} className= " About_text  flex flex-column items-center" >
                        <h1 className=' f1 measure bb bw2  pb3 '> About Me </h1>
                        <h3 className=' pl4  pb5 lh-copy i tc fw4 '> 
                            A highly motivated and passionate Junior Full Stack Developer with a focus on front-end development,
                            utilizing JavaScript, React, Redux, Router, Next.js and Node. Strong skills and experience with a portfolio
                            of self-taught projects, including building web applications, handling state management and implementing 
                            responsive design. Eager to apply and expand these skills in a professional setting and grow as a developer. 
                        </h3>
                    </div> 

                </div>

                <div className='About_logos pt4 flex flex-wrap ma4   '>
                    <i class="pa3 devicon-html5-plain-wordmark colored "></i>
                    <i class="pa3 devicon-react-original-wordmark colored"></i>
                    <i class="pa3 devicon-css3-plain-wordmark colored"></i>
                    <i class="pa3 devicon-sass-original colored"></i>
                    <i class="pa3 devicon-nodejs-plain-wordmark colored"></i>
                    <i class="pa3 devicon-javascript-plain colored"></i>
                    <i class="pa3 devicon-php-plain colored"></i>
                    <i class="pa3 devicon-mongodb-plain-wordmark colored"></i>
                    <i class="pa3 devicon-cplusplus-plain-wordmark colored"></i>
                    <i class="pa3 white devicon-nextjs-plain-wordmark"></i>
                    <i class="pa3 devicon-redux-original colored"></i>



                </div>    
                
        </div>
    )
}



export default About;