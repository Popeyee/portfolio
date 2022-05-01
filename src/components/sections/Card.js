import React from "react";
// import profile_pic from '../images/profile_pic.png';




const Card = ({id, name, url, skills}) => {
    return(
        <div className=" Card_container flex flex-column items-center ma3 ">

            <div>
                <div className={` Card_picture grow ${id}`}></div>
            </div>
            <a title={url} href={url} target="_blank" rel="noreferrer" ><h1 className=" avenir"> {name}</h1></a>
            { skills && <h3>{skills.map(skill => skill)}</h3> }

        </div>
    )
}


export default Card;