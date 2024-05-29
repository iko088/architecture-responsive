import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiArchitectMask } from "react-icons/gi";


const Navbar = () => {
  const [nav, setnav] = useState(false);

  const handleNavClose = () => setnav(false);

  return (
    <div className="flex items-center justify-between pt-7">
      <div className="cursor-pointer">
        <GiArchitectMask className="w-8 h-8"/>
      </div>

      {/* FOR SCREEN GREATER THEN SM  */}
      <div className='parentlink hidden uppercase sm:flex items-center gap-3 text-xs md:text-sm md:me-16'>
        <Link className='mainlink tracking-widest relative' to='/' style={{ '--line-width': '35px' }}>Main</Link>
        <Link className='mainlink tracking-widest relative' to='/gallery' style={{ '--line-width': '60px' }}>GALLERY</Link>
        <Link className='mainlink tracking-widest relative' to='/projects' style={{ '--line-width': '60px' }}>PROJECTS</Link>
        <Link className='mainlink tracking-widest relative' to='/certifications' style={{ '--line-width': '95px' }}>CERTIFICATIONS</Link>
        <Link className='mainlink tracking-widest relative' to='/contacts' style={{ '--line-width': '60px' }}>Contacts</Link>
      </div>


      {/* FOR SCREEN LESS THEN SM */}
     <div className="block z-50 sm:hidden">
     <div className="cursor-pointer">
        <GiHamburgerMenu onClick={() => setnav(true)} />
      </div>

      <div
        className={`fixed top-0 right-0 w-full h-full bg-[#F6F6F6] flex items-center justify-center text-center transition-transform duration-300 ease-in-out ${
          nav ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <div
          className="absolute top-4 right-4 cursor-pointer text-2xl"
          onClick={handleNavClose}
        >
          <FaTimes />
        </div>
        <ul className="flex flex-col gap-7">
          <Link to="/home" onClick={handleNavClose}>
            <li className="cursor-pointer tracking-widest">MAIN</li>
          </Link>
          <Link to="/gallery" onClick={handleNavClose}>
            <li className="cursor-pointer tracking-widest">GALLERY</li>
          </Link>
          <Link to="/projects" onClick={handleNavClose}>
            <li className="cursor-pointer tracking-widest">PROJECTS</li>
          </Link>
          <Link to="/certifications" onClick={handleNavClose}>
            <li className="cursor-pointer tracking-widest">CERTIFICATIONS</li>
          </Link>
          <Link to="/contacts" onClick={handleNavClose}>
            <li className="cursor-pointer tracking-widest">CONTACTS</li>
          </Link>
        </ul>
      </div>
     </div>

    </div>
  );
};

export default Navbar;
