import React from 'react'



const Event = ({ imageEvent1, dateEvent1, titleEvent1, descEvent1, imageEvent2, dateEvent2, titleEvent2, descEvent2}) => {
  return (
    
    <>

{/* <div className='sm:h-[60vh] sm:w-[100vw] lg:h-[80vh] flex justify-around items-center sm:gap-2 md:gap-[4rem] p-8 md:w-[90vw]'> */}

<div className='sm:h-[100%] sm:w-[100vw] md:w-[40vw] lg:w-[40vw] bg-red-700 flex flex-col'>
  

  <img src={imageEvent1} alt='evenement 1' className='sm:h-[65%] md:w-[100%] object-cover'/>
  

  <div className='h-[35%] w-[100%] bg-white flex flex-col justify-center items-center '>

    <p className='sm:font-bold sm:text-[0.8rem] md:text-[0.6rem] lg:text-[1.4rem]'>{dateEvent1}</p>

    <p className='sm:font-bold sm:text-[0.8rem] md:text-[0.9rem] lg:text-[1.4rem] text-green-700'>{titleEvent1}</p>

    <p className='sm:max-w-[8rem] sm:text-[0.5rem] md:text-[1rem] lg:text-[1rem] md:max-w-[12rem] lg:max-w-[20rem]'>{descEvent1}</p>

  </div>

</div>




<div className='sm:h-[100%] sm:w-[100vw] md:w-[40vw] lg:w-[40vw] bg-red-100 flex flex-col'>

<img src={imageEvent2} alt='evenement 2' className='sm:h-[65%] md:w-[100%] object-cover'/>

<div className='h-[35%] w-[100%] bg-white flex flex-col justify-center items-center'>

  <p className='sm:font-bold sm:text-[0.8rem] md:text-[0.6rem] lg:text-[1.4rem]'>{dateEvent2}</p>

  <p className='sm:font-bold sm:text-[0.8rem] md:text-[0.9rem] lg:text-[1.4rem] text-green-700'>{titleEvent2}</p>

  <p className='sm:max-w-[8rem] sm:text-[0.5rem] md:text-[1rem] lg:text-[1rem] md:max-w-[12rem] lg:max-w-[20rem]'>{descEvent2}</p>

</div>

</div>



    </>
  )
}

export default Event
