import React from "react";

const Projects = () => {
  return (
    <div className="my-10">
    {/* PROJECTS TITLE  */}
      <div className="">
        <h1 className="text-[#BDBDBD] text-4xl ">Our Projects</h1>
      </div>

      {/* PROJECTS IMAGES  */}
      <div className="my-5">
        <div className="grid grid-cols-4 gap-2 md:gap-5">
          <div className="relative col-span-2">
            <img src="/images/project1.png" className="w-full h-full" alt="" />
            <div className="absolute flex items-center md:items-start md:flex-col w-full h-full bg-black top-0 ps-2 sm:ps-6 gap-3 sm:gap-5 md:gap-2 md:pt-7 lg:pt-12 bg-opacity-50">
              <div  className="text-[#FFFFFF] font-bold text-sm sm:text-xl md:text-3xl ">
                <h1 className="leading-none  ">Simple</h1>
                <h1 className="leading-none  ">Projects</h1>
              </div>
              <button className="text-[#FFFFFF] text-[8px] sm:text-xs sm:font-thin hover:scale-110 transition duration-150 ">View More &#8594;</button>
            </div>
          </div>
          <div className=" col-span-2">
            <img src="/images/project2.png" className="w-full h-full" alt="" />
          </div>
          <div>
            <img src="/images/project3.png" className="w-full h-full" alt="" />
          </div>
          <div className=" col-span-2">
            <img src="/images/project4.png" className="w-full h-full" alt="" />
          </div>
          <div>
            <img src="/images/project5.png" className="w-full h-full" alt="" />
          </div>
        </div>
      </div>

      {/* PROJECT BUTTON  */}
      <div className="flex items-center justify-end">
        <button className=" text-xs sm:text-sm py-1 sm:py-2 px-2 sm:px-4 bg-[#333333] text-white ">All Projects <span className="px-1"> &#8594;</span></button>
      </div>
    </div>
  );
};

export default Projects;
