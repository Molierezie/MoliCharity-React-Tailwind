import React from 'react'

import { SlHeart } from "react-icons/sl";

const OurCause = ({ causeObjectif, donation, percentageDonation, objectifDonation, children, children2}) => {


  return (
   
    <article className='bg-yellow-100 sm:h-[60vh] w-full relative md:h-[60vh] lg:h-[60vh]'>


        {children}

    <div className='sm:absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>


    <div className='bg-black/20 sm:h-[60vh] sm:w-[100vw] md:h-[60vh] lg:h-[60vh] md:w-[25vw] flex flex-col justify-end items-center gap-[1rem] p-4'>

   

      <p className='text-white sm:max-w-[16rem] sm:text-[1.1rem] font-bold ] xl:max-w-[18rem]'>{causeObjectif}</p>

      <div className='sm:h-[7vh] w-[60vw] md:w-[20vw] md:h-[5vh]'>

        <div className='sm:h-[2vh] sm:w-[60vw] flex justify-between items-center sm:text-[0.8rem] text-white md:h-[2vh] md:w-[20vw] md:text-[1rem]'>

          <p>{donation}</p>
          <SlHeart />

        </div>

        <div className='sm:h-[2vh] sm:w-[60vw] flex justify-center items-center md:h-[2vh] md:w-[20vw]'>


            {children2}
       

        </div>

        <div className='sm:h-[3vh] sm:w-[60vw] flex justify-between items-center sm:text-[0.8rem] text-white md:h-[2vh] md:w-[20vw] lg:text-[1rem]'>


          <p className='font-bold'>{percentageDonation}</p>
          <p className='opacity-80'>{objectifDonation}</p>


        </div>


      </div>


    </div>
     


    </div>

  </article>
  )
}

export default OurCause