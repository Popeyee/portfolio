import React from 'react';
import CheckoutButton from './CheckoutButton';
import apedad from '../images/apedad.png';
import 'animate.css';

const Header = () => {
    return (
        <div className='pb6'>
            <div className='Header'>
                <h1 className='f1 ttu tracked mt0 animate__animated animate__zoomInDown animate__slow'>I'm Ali Elalaoui</h1>
                <p className='Subhead anime-typewriter '>and this is my universe...</p>
                <CheckoutButton />
            </div>
            <img id="ape-dad" alt="Contact Me" title="Contact Me" className="apepic grow pointer animate__animated animate__pulse animate__infinite" src={apedad}></img>
        </div>

    )

}

export default Header;