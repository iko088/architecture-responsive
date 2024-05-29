import React from "react";

const About = () => {
  return (
    <div className="bg-[#FBFBFB]">
      <div className="grid md:grid-cols-2 gap-8 my-12 py-6 px-4 md:px-8  ">
      {/* ABOUT TEXT  */}
        <div className="flex items-center md:justify-center flex-col gap-3 md:order-last">
          <h1 className="text-[#BDBDBD] text-4xl tracking-widest">About</h1>
          <p className="text-sm tracking-wider">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button className="text-sm bg-[#FFFFFF] py-3 px-9 tracking-widest ">
            Read More <span className=""> &#8594;</span>
          </button>
        </div>

        {/* ABOUT IMAGES  */}
        <div className="grid grid-cols-2 gap-2 md:gap-4 ">
            <div className="flex items-center flex-col gap-2 md:gap-4">
                <img src="/images/about1.png" className="w-full" alt="" />
                <img src="/images/about2.png" className="w-full" alt="" />
            </div>

            <div className="mt-4">
            <img src="/images/about3.png" className="w-full" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
