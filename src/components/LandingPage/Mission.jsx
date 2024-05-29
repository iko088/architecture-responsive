import React from 'react'

const Mission = () => {
  return (
    <div className='my-6'>
      <div>
        <h1 className='text-2xl md:text-5xl text-[#BDBDBD] text-center md:text-start '>Main Focus/Mission Statement</h1>
      </div>

      <div className='grid grid-cols-2 items-center gap-4 md:gap-24 my-4'>
        <div className='flex items-center gap-3 '>
            <h1 className='text-7xl font-bold md:text-8xl text-[#BDBDBD] h-full text-opacity-30'>1</h1>
            <p className='text-[10px] sm:text-xs md:text-sm'>Lorem ipsum dolor sit amet,  consectetur adipiscing elit.  Sed efficitur, lectus  et facilisis placerat.</p>
        </div>
        <div className='flex items-center gap-3'>
            <h1 className='text-7xl font-bold md:text-8xl text-[#BDBDBD] h-full text-opacity-30'>2</h1>
            <p className='text-[10px] sm:text-xs md:text-sm'>Lorem ipsum dolor sit amet,  consectetur adipiscing elit.  Sed efficitur, lectus  et facilisis placerat.</p>
        </div>
      </div>
    </div>
  )
}

export default Mission
