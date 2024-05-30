import React from 'react'

const Contact = () => {
  return (
    <div className='my-10 flex flex-col md:flex-row gap-6 items-center text-center'>
      <div className="">
        <h1 className="leading-none text-3xl md:text-5xl text-[#BDBDBD] font-light ">
          Contact
        </h1>
        <div className='mt-8'>
        <h1 className='font-bold'>Company name</h1>
        <p className='text-[#bdbdbd] '>IKO</p>
      </div>
      <div className='mt-5'>
        <p>512.333.2222</p>
      </div>
      <div className='text-[#bdbdbd] mt-4 '>
        <p>iko@gamil.com</p>
      </div>
      <div className='mt-4'>
        <button className='py-2 px-4 bg-[#333333] text-white text-xs '>Contact US</button>
      </div>
      </div>

      <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d867266.9977728397!2d34.892076!3d31.88589545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151cf2d28866bdd9%3A0xee17a001d166f686!2sPalestine!5e0!3m2!1sen!2s!4v1716981046970!5m2!1sen!2s" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default Contact
