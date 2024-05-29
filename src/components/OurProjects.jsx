import React from "react";
import { Link } from "react-router-dom";

const OurProjects = () => {
  return (
    <div className="my-10">
      {/* TEXT  */}
      <div className="md:mb-4">
        <h1 className="leading-none text-3xl md:text-5xl text-[#BDBDBD] font-light ">
          Our
        </h1>
        <h1 className="leading-none text-3xl md:text-5xl text-[#333333] font-bold ">
          Projects
        </h1>
      </div>

      {/* CARDS  */}

      {/* FIRST CARD  */}
      <div className="grid sm:grid-cols-2 gap-5 my-5 bg-[#FBFBFB] ">
        <div>
          <img src="/images/ourprojects1.jpg" className="w-full h-full" alt="" />
        </div>
        <div className="text-center md:text-start">
          <h1 className="text-xl md:text-3xl text-[#BDBDBD] font-bold ">Sample Project 1</h1>
          <p className="text-xs md:text-sm my-2 md:my-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <Link to='/ourproject1'>
            <button className="text-xs md:text-sm py-2 px-5 bg-[#ffffff] ">View More <span className="ps-1">&#8594;</span></button>
          </Link>
        </div>
      </div>

       {/* SECOND CARD  */}
       <div className="grid sm:grid-cols-2 gap-5 my-5 bg-[#FBFBFB] ">
        <div>
          <img src="/images/ourprojects2.jpg" className="w-full h-full" alt="" />
        </div>
        <div className="text-center md:text-start">
          <h1 className="text-xl md:text-3xl text-[#BDBDBD] font-bold ">Sample Project 2</h1>
          <p className="text-xs md:text-sm my-2 md:my-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <Link to='/ourproject1'>
            <button className="text-xs md:text-sm py-2 px-5 bg-[#ffffff] ">View More <span className="ps-1">&#8594;</span></button>
          </Link>
        </div>
      </div>


       {/* THIRD CARD  */}
       <div className="grid sm:grid-cols-2 gap-5 my-5 bg-[#FBFBFB] ">
        <div>
          <img src="/images/ourprojects3.jpg" className="w-full h-full" alt="" />
        </div>
        <div className="text-center md:text-start md:justify-around">
          <h1 className="text-xl md:text-3xl text-[#BDBDBD] font-bold ">Sample Project 3</h1>
          <p className="text-xs md:text-sm my-2 md:my-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <Link to='/ourproject1'>
            <button className="text-xs md:text-sm py-2 px-5 bg-[#ffffff] ">View More <span className="ps-1">&#8594;</span></button>
          </Link>
        </div>
      </div>




    </div>
  );
};

export default OurProjects;
