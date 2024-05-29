import React from "react";

const Form = () => {
  return (
    <div className="my-10">
      <div>
        <h1 className="text-xl sm:text-3xl text-[#bdbdbd] text-center sm:text-start py-2 ">Contact Us</h1>
      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        <form action="" className=" flex flex-col gap-3 items-center sm:items-start justify-center sm:justify-start ">
          <input
            className="bg-[#F3F3F3] text-sm md:text-base py-1 px-3 rounded border-none outline-none caret-gray-400 w-[80%] sm:w-full  "
            type="text"
            placeholder="name"
          />
          <input
            className="bg-[#F3F3F3] text-sm md:text-base py-1 px-3 rounded border-none outline-none caret-gray-400 w-[80%] sm:w-full  "
            type="text"
            placeholder="Phone Number"
          />
          <input
            className="bg-[#F3F3F3] text-sm md:text-base py-1 px-3 rounded border-none outline-none caret-gray-400 w-[80%] sm:w-full  "
            type="text"
            placeholder="E-mail"
          />
          <input
            className="bg-[#F3F3F3] text-sm md:text-base py-1 px-3 rounded border-none outline-none caret-gray-400 w-[80%] sm:w-full  "
            type="text"
            placeholder="Interested In"
          />
          <textarea
            id="message"
            rows="4"
            class="py-2 px-3 text-sm md:text-base border-none outline-none bg-[#F3F3F3] caret-gray-400 rounded w-[80%] sm:w-full "
            placeholder="Message"
          ></textarea>
          <div className="flex items-center justify-center md:justify-start my-4">
            <button type="submit" className=" text-xs sm:text-sm py-1 sm:py-2 px-2 sm:px-4 bg-[#333333] text-white ">
            Send Email <span className="px-1"> &#8594;</span>
            </button>
          </div>
        </form>
        <div className="hidden sm:block col-span-2">
          <img src="/images/contact.png" className="w-full h-[78%] " alt="" />
        </div>
      </div>


    </div>
  );
};

export default Form;
