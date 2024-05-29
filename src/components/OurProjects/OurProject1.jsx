import React from 'react'

const OurProject1 = () => {
  return (
    <div className='my-10'>
      {/* TEXT  */}
      <div className="md:mb-4">
        <h1 className="leading-none text-3xl md:text-5xl text-[#BDBDBD] font-light ">
          Simple
        </h1>
        <h1 className="leading-none text-3xl md:text-5xl text-[#333333] font-bold ">
          Project 1
        </h1>
      </div>

      {/* MAIN CONTENT  */}
      <div className='my-5'>
        <div>
            <img src="/images/ourprojects1.1.jpg" alt="" />
        </div>
        <div className='grid md:grid-cols-3 gap-4 my-3'>
           <div className='hidden md:flex items-center justify-center'>
           <img src="/images/ourprojects1.2.jpg" className='w-full h-full' alt="" />
           </div>
            <p className='text-xs col-span-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with.</p>
        </div>
      </div>
    </div>
  )
}

export default OurProject1
