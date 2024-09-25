import React from 'react'
import { FaFacebook,FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter , FaUser} from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { RiMenu4Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react'

const Nav = () => {


  const [ showSideBar, setShowSideBar] = useState(false)

  const openSideBar = ()=>{

    setShowSideBar(!showSideBar)

  }

  const closeSidebar = ()=>{

    showSideBar & setShowSideBar(false)
  }


  return (

    <>
        
   <nav className='sm:h-[30vh] w-full  bg-white flex flex-col lg:h-[25vh]'>

    <div className='sm:bg-white sm:justify-around  lg:h-[35%] lg:bg-black text-black flex  p-4'>

      <div className='sm:hidden lg:flex w-[30vw] justify-center items-center gap-[3vw]'>

        <FaFacebook size={22} className='text-green-600'/>

        <FaInstagram  size={22} className='text-[#FFF1D4]'/>

        <FaXTwitter  size={22} className='text-green-600'/>


        <div className='lg: flex gap-[2vw]'>
        <FaPhoneAlt  size={22} className='text-[#FFF1D4] '/>
        <p className='lg:text-white text-[0.8rem] min-w-[7rem]'>06 67 78 43 12</p>
        </div>

      </div>

      <div className='sm:hidden lg:flex w-[70vw] justify-center items-center gap-[3rem]'>

        <div className='w-[6vw] border-r-2 border-gray/40'>

        <p className='text-[0.8rem] text-gray-400'>FAQ</p>

        </div>


        <div className='w-[7vw] border-r-2 border-gray/40'>

        <p className='text-[0.8rem] text-gray-400'>Contact</p>

        </div>

        <div className='lg:w-[12vw] border-r-2 border-gray/40'>

        <p className='text-[0.8rem] text-green-700'>Devenir Bénévole</p>

        </div>


        <div className='flex gap-2 justify-center items-center'>
          <CiUser size={17} className='text-white'/>
          <p className='text-[0.7rem] text-white'>Login</p>
        </div>

        <div className='flex gap-2 justify-center items-center'>
          <FaUser size={17} className='text-white'/>
          <p className='text-[0.7rem] text-white'>Sign Up</p>
        </div>

      </div>



      <div className='sm:flex flex-col justify-around items-center  w-[10vw] leading-8 lg:hidden'>

      <h1 className='sm:text-[2.5rem] font-Edu font-bold text-green-700 lg:hidden'>Moli</h1>
      <p className='sm:font-Edu font-bold text-[1.4rem] text-[#D6B672] lg:hidden'>Charity</p>

      </div>


    <div className='sm:flex justify-center items-center w-[10vw] lg:hidden'>

      <RiMenu4Line size={50}  className='text-black'/>

    </div>

     


    </div>

    {/* <div className='sm:hidden lg:flex h-[70%] justify-around items-center bg-[#FFF1D4]'> */}
 

    <div className='sm:hidden lg:flex h-[70%] justify-around items-center '>

      <div className='lg:flex flex-col w-[20vw] lg:leading-[2.8rem] justify-center items-end'>
      <h1 className='sm:text-[3.5rem] md:text-[3.2rem] font-Edu font-bold text-green-700 '>Moli</h1>
      <h3 className='sm:text-[1.5rem] md:text-[2rem] font-Edu font-bold text-[#D6B672]  '>Charity</h3>
      </div>


      <div className='lg:w-[60vw] xl:w-[50vw] h-[10vh] flex justify-center items-center gap-8 lg:text-[0.8rem] xl:text-[1rem]  font-SofadiOne text-[#1f1f1f] font-bold text-#1f1f1f]'>

     
        <p>Nos Actions</p>
        <p>Chiffre Clés</p>
        <p>Evenement</p>
        <p>Actualités</p>
        <p>Qui sommes-nous ?</p>

      </div>



      <div className='lg:w-[15vw] h-[10vh] flex items-center gap-4 text-[1.2rem]'>

        {/* <div className='lg:bg-green-300 w-[10vw] h-[8vh] flex justify-center items-center text-center font-bold gap-2 rounded-full'>

          <h2 className='uppercase'>faire un don</h2>

        </div> */}

        <div 
         className="lg:h-[4vh] w-[20vw] lg:text-[1rem] mx-auto    bg-[#FFF1D4] items-center text-green-700 sm:justify-center flex shadow-lg hover:bg-green-500  hover:text-white hover:border-2 border-white duration-300 cursor-pointer active:scale-[0.98]"
                      >
                      <button className="p-6"><a className="" href="">Faire un don</a></button>
                    
              </div>

        {/* <div className='lg:bg-green-300 w-[10vw] h-[8vh] flex justify-center items-center text-center font-bold'>

        <h2 className='uppercase'>Devenir bénévole</h2>

        </div> */}

        {/* <div className='lg:bg-green-300 w-[10vw] h-[8vh] flex justify-center items-center text-center font-bold'>

        <h2 className='lg::uppercase max-w-[7vw] text-[0.9rem] text-center'>Devenir partenaire (entreprise)</h2>

      </div> */}

      </div>


    </div>


   </nav>



   {/* <div className={ showSideBar ? "overflow-scroll transition-all duration-[2s] fixed grid grid-rows-15 top-0 left-0 h-screen z-10 w-[50%] bg-white sm:w-[100%]": "fixed grid grid-rows-9 top-0 left-[-100%] h-screen z-10 md:w-[50%] bg-white sm:w-[100%]"}>

    </div> */}


    {showSideBar && (

    <div className={ showSideBar ? "overflow-scroll transition-all duration-[6s] fixed grid grid-rows-15 top-0 left-0 h-screen z-10 w-[50%] bg-white sm:w-[100%]": "fixed grid grid-rows-9 top-0 left-[-100%] h-screen z-10 md:w-[50%] bg-white sm:w-[100%]"}>

<div className="flex justify-between items-center p-8">

<IoMdClose onClick={closeSidebar} size={38} className='text-white'/>

<h1 className="text-2xl font-bold justify-self-start">Eilmy association</h1>

</div>

      <h1>Moli</h1>
      <h1>Moli</h1>
      <h1>Moli</h1>
      <h1>Moli</h1>
      <h1>Moli</h1>

    </div> 


    )}

   {/* {showSideBar ? (


<>


<div className='sm:bg-black/45 h-[80vh] w-[40vw] ml-[38rem] relative mt-[-10rem] lg:hidden '>


</div>


<section className='sm:bg-red-900 h-[80vh] w-[100vw] mt-[-67.6rem] lg:mt-0'>


</section>

</>

   )



: (

  <section className='sm:bg-red-900 h-[80vh] w-full mt-[-20rem] z-0 lg:mt-0'>


</section>
)

} */}

</>

  )
}

export default Nav