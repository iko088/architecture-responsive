import React from 'react'

const Certification = () => {
  return (
    <div className='my-5'>
    <div className="md:mb-4 px-5">
        <h1 className="leading-none text-3xl md:text-5xl text-[#BDBDBD] font-light ">
          Company
        </h1>
        <h1 className="leading-none text-3xl md:text-5xl text-[#333333] font-bold ">
          Certifications
        </h1>
      </div>

        <div className="container mx-auto p-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img className="w-full " src="/images/cert1.jpg" alt="Certification Image"/>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">Certified Architect</h2>
          <p className="text-gray-600 mt-2">Issued by: Architecture Institute</p>
          <p className="text-gray-600 mt-2">Date: January 2024</p>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img className="w-full " src="/images/cert2.jpeg" alt="Certification Image"/>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">Sustainable Design Expert</h2>
          <p className="text-gray-600 mt-2">Issued by: Green Building Council</p>
          <p className="text-gray-600 mt-2">Date: February 2024</p>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img className="w-full " src="/images/cert3.jpg" alt="Certification Image"/>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">Urban Planning Specialist</h2>
          <p className="text-gray-600 mt-2">Issued by: Urban Planning Institute</p>
          <p className="text-gray-600 mt-2">Date: March 2024</p>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Certification
