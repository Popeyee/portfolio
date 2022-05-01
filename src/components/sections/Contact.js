import React from "react";
import '../styles/Contact.css';




const Contact = () => {
    return(
       <div className="Contact_cont ">
           <div className="flex flex-column items-center"> 
                <h1 className="f1 measure bb bw2  pb3"> Get In Touch</h1>
                <p className="f3 lh-copy measure tracked fw2 tc pb4">
                 I'm currently looking for any new opportunities,
                 my inbox is always open. Whether you have a question or just
                 want to say hi, I'll try my best to get back to you!
                 <br></br>P.S Don't be shy if you speak French or Arabic, I speak fluently in both ;)
                </p>
                <a class="Contact_button f6 fw8 grow no-underline br-pill ba ph4 pv3 mb2 dib bw2 " href="mailto:elhachimiali1@gmail.com">Say Hello</a>
                <div className="Contact_logos pa4 flex flex-wrap ma2 ">
                    <a href="https://github.com/Popeyee" target="_blank" rel="noreferrer" className="grow">
                        <i className="pa3 devicon-github-original white grow "></i>
                    </a>
                    <a href="https://www.linkedin.com/in/ali-elalaoui-023208153/" target="_blank" rel="noreferrer" className="grow ml5" >
                        <i className="pa3 devicon-linkedin-plain white"></i>
                    </a>
                </div>
            </div>
       </div>
    )
}



export default Contact ;