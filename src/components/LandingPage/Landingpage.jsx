import React from 'react'

const Landingpage = () => {
  return (
    <div className='grid md:grid-cols-2 gap-4 my-8'>
    <div className='flex md:flex-col justify-between md:justify-center md:items-start '>

    {/* DATE PART  */}
    <div className='flex md:order-last justify-start mb-6 gap-6 text-[#BDBDBD] mt-16 text-2xl md:gap-10 md:text-5xl'>
        <span className='relative'>
          <h1 className='absolute top-1'>0</h1>
          <h1 className='absolute top-7 md:top-11'>1</h1>
        </span>
        <p>/</p>
        <span>02</span>
       </div>

       {/* TEXT CONTENT  */}
       <div className='flex flex-col items-center'>
       <h1 className='text-3xl md:text-6xl text-[#BDBDBD] '>PROJECT</h1>
        <p className='text-2xl md:text-5xl text-[#333333] font-bold'>Lorum</p>
       </div>

       {/* BUTTONS  */}
       <div className=' flex flex-col sm:flex-row items-center pe-10 gap-2 sm:gap-3 md:gap-4 mt-16'>
        <button className='py-1 px-2 md:py-2 md:px-3 border border-[#f2f2f2] hover:bg-[#F9F9F9] transition duration-200 '>&#8592;</button>
        <button className='relative py-1 px-2 md:py-2 md:px-3  border border-[#f2f2f2] hover:bg-[#F9F9F9] transition duration-200 contentline'>&#8594;</button>
       </div>

      
    </div>
    <div className='relative z-10'>
        <img src="/images/landingImg.png" className='fit ' alt="" />
        <div className='absolute bottom-0 py-2 px-4 bg-white'>
          <button className=' tracking-widest text-sm uppercase '>View Project <span className=''> &#8594;</span></button>
        </div>
    </div>
    </div>
  )
}

export default Landingpage
