import React from "react";
// import profile_pic from '../images/profile_pic.png';




const Card = ({id, name, url, skills}) => {
    return(
        <div className=" Card_container flex flex-column items-center justify-around flex-wrap ">

            <div>
               <a href={url} target="_blank"> <div href={url} className={` Card_picture grow ${id}`}></div> </a>
            </div>
            <a title={url} href={url} target="_blank"  ><h1 className=" avenir"> {name}</h1></a>
            { skills && <h3 className="flex flex-wrap tc">{skills.map(skill => skill)}</h3> }

        </div>
    )
}


export default Card;