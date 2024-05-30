import React from "react";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GiArchitectMask } from "react-icons/gi";



const Footer = () => {
  return (
    <div className="bg-[#2C2C2C] text-white py-4 sm:pt-12 ">
      <div className="grid sm:grid-cols-4 text-center items-center md:items-start justify-center md:justify-start">
        <div className="flex flex-col  items-center justify-center py-4">
        <GiArchitectMask className="w-16 h-16" />
        <h1 className="font-bold">IKO</h1>
        </div>

        <div className="mb-5">
          <h1 className="pb-2 sm:text-xl">Information</h1>
          <ul className="text-xs sm:text-sm flex flex-col items-center gap-2">
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/certificatiio">Certificatiio</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </div>

        <div className="mb-5">
          <h1 className="sm:text-xl">Contacts</h1>
          <ul className="flex flex-col items-center gap-2 text-xs">
            <Link>
            <li className="flex gap-2 mt-2">
            <CiLocationOn />
            1234 Sample Street Austin Texas 78704
            </li>
            </Link>
            <Link>
            <li className="flex gap-2">
            <MdOutlineLocalPhone />
            512.333.2222
            </li>
            </Link>
            <Link>
            <li className="flex gap-2">
            <MdOutlineMailOutline />
            sampleemail@gmail.com
            </li>
            </Link>
          </ul>
        </div>

        <div>
        <h1 className="sm:text-xl">Social Media</h1>
       <div className="flex items-center justify-center gap-3 mt-2">
       <Link to='https://www.facebook.com/profile.php?id=100068916321594'>
        <FaFacebookF className="cursor-pointer" />
      </Link>
      <Link to='https://www.youtube.com/@wizard-of-code'>
        <FaYoutube className="cursor-pointer" />
      </Link>
      <Link to='https://www.linkedin.com/in/ikram-khan-54306b269/'>
        <FaLinkedin className="cursor-pointer"/>
      </Link>
      <Link to='https://www.instagram.com/ikram_khan1s/'>
        <FaInstagram className="cursor-pointer"/>
      </Link>
       </div>
        </div>
      </div>
      <div className="text-center mt-10 border-t-[1px] border-t-[#FFFFFF] border-opacity-50 ">
        <p className="text-[#C8C8C8] text-xs pt-2">© 2021 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
