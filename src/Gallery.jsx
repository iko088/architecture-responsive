import React from 'react'

const Gallery = () => {
  return (
    <div className='my-10'>
    {/* TEXT  */}
    <div className='md:mb-4'>
        <h1 className='leading-none text-3xl md:text-5xl text-[#BDBDBD] font-light '>Photo</h1>
        <h1 className='leading-none text-3xl md:text-5xl text-[#333333] font-bold '>Gallery</h1>
    </div>
    {/* IMAGES  */}
    <div className='grid grid-cols-2 sm:grid-cols-5 gap-2 my-3'>
        <div className=' overflow-hidden'>
        <img src="/images/gallery1.jpg" className='w-full h-full cursor-pointer hover:scale-110 transition duration-300' alt="" />
        </div>
        <div className=' overflow-hidden'>
        <img src="/images/gallery2.png" className='w-full h-full cursor-pointer hover:scale-110 transition duration-300' alt="" />
        </div>
        <div className=' overflow-hidden'>
        <img src="/images/gallery3.png" className='w-full h-full cursor-pointer hover:scale-110 transition duration-300' alt="" />
        </div>
        <div className=' overflow-hidden'>
        <img src="/images/gallery4.png" className='w-full h-full cursor-pointer hover:scale-110 transition duration-300' alt="" />
        </div>
        <div className=' overflow-hidden'>
        <img src="/images/gallery5.png" className='w-full h-full cursor-pointer hover:scale-110 transition duration-300' alt="" />
        </div>
        <div className=' overflow-hidden'>
        <img src="/images/gallery6.png" className='w-full h-full cursor-pointer hover:scale-110 transition duration-300' alt="" />
        </div>
        <div className=' overflow-hidden'>
        <img src="/images/gallery7.png" className='w-full h-full cursor-pointer hover:scale-110 transition duration-300' alt="" />
        </div>
        <div className=' overflow-hidden'>
        <img src="/images/gallery8.png" className='w-full h-full cursor-pointer hover:scale-110 transition duration-300' alt="" />
        </div>
        <div className=' overflow-hidden'>
        <img src="/images/gallery9.png" className='w-full h-full cursor-pointer hover:scale-110 transition duration-300' alt="" />
        </div>
        <div className=' overflow-hidden'>
        <img src="/images/gallery10.png" className='w-full h-full cursor-pointer hover:scale-110 transition duration-300' alt="" />
        </div>
    </div>
    {/* LAST PART  */}
    <div className='flex items-center gap-6  '>
    <div>
    <div className='flex md:order-last justify-start mb-6 gap-6 text-[#BDBDBD] mt-6 text-2xl'>
        <span className='relative'>
          <h1 className='absolute top-1'>0</h1>
          <h1 className='absolute top-7'>1</h1>
        </span>
        <p>/</p>
        <span>02</span>
       </div>
    </div>
    <div className='flex items-center gap-3'>
    <button className=' py-2 px-3 border border-[#f2f2f2] hover:bg-[#F9F9F9] transition duration-200 '>&#8592;</button>
    <button className=' py-2 px-3 border border-[#f2f2f2] hover:bg-[#F9F9F9] transition duration-200 '>&#8594;</button>
    </div>
    </div>
    </div>
  )
}

export default Gallery
