import React, { useEffect, useState } from 'react';
import "./Nav.css";
// import logoImage from '/Users/student10/dev/labs/netflix-clone/src/images/netflixLogo.png';
import avatarImage from '/Users/student10/dev/labs/netflix-clone/src/images/Netflix-avatar.png';

const Nav = () => {

    const [show, handleShow] = useState(false);
    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            handleShow(true);
        }else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar)
    }, [])

  return (
    <div className={`nav ${show && 'nav_black'}`}>
        <div className="nav_content">
            <img
            className="nav_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" 
            alt='Netflix-Logo' 
            />

            <img 
            className='nav_avatar'
            src={avatarImage} 
            alt='Avatar-Icon' 
            />
        </div>
    </div>
  )
}

export default Nav