import React from 'react';
import profile_pic1 from '../images/profile_pic1.png';
import 'animate.css';
import { useInView } from "react-intersection-observer";




const About = () => {
    const [ref, inView] = useInView({ threshold: 0 })
    return (
              <div className={inView ? " About_container  animate__animated animate__fadeIn animate__fast flex flex-column items-center avenir mb5" : "anim2 About_container flex flex-column items-center avenir"} > 

                <div className='About_box flex items-center  '>
                    <img className="About_pic  justify-start contain w-50" id="profile_pic" alt="Profile Pic" 
                        title="Profile Picture" src={profile_pic1}></img>   
                        
                    <div ref={ref} className= " About_text  flex flex-column items-center" >
                        <h1 className=' f1 measure bb bw2  pb3 '> About Me </h1>
                        <h3 className=' pl4  pb5 lh-copy i tj fw4 '> Web developer/Father who loves to transform ideas into reality using code.
                                            I enjoy being the bridge between engineering and design, and feel right at home as a 
                                            front-end engineer, and currently getting my hands on the back-end too. I'm experienced in developing and designing products for the web, 
                                            from simple landing pages to creating custom websites with ReactJs, Node, Express, Mongo,
                                             and PostgreSQL. </h3>
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

                </div>    
                
        </div>
    )
}



export default About;