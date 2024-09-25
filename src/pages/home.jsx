
// ----------------- Hook React -----------------
import { useRef } from 'react';


// ------------ Reusable Component
import OurCause from '../components/OurCause.jsx'
import Event from '../components/Event.jsx';


// ----------------- Styke & Animation -----------------

// ------------- Carousel 
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// --------------- React Icon 
import {  FaLongArrowAltRight } from "react-icons/fa";
import { HiMiniArrowRightCircle, HiMiniArrowLeftCircle } from "react-icons/hi2";


// -------------- Image
import ImageMain1 from '/assets/ImageMain1.png'
import ImageMain2 from '/assets/ImageMain2.png'
import ImageMain3 from '/assets/ImageMain3.png'

import causeWater from '/assets/OurCauseWater.png'
import causeClothe from '/assets/OurCauseClothe.png'
import causeEducation from '/assets/OurCauseeducation.png'
import causeFood from '/assets/OurCauseFood.png'

import whySupport from '/assets/whySupport.png'
import whySupport3 from '/assets/whySupport3.png'

import fEvent1 from '/assets/EventForthComing1.png'
import event4 from '/assets/event4.png'
import event5 from '/assets/event5.png'
import event6 from '/assets/event6.png'
import event7 from '/assets/event7.png'


import actualités1 from '/assets/Congo.png'
import actualités2 from '/assets/Typhon.png'

import actualités3 from '/assets/Darfour.png'

import Benevole1 from '/assets/Benevole1.png'
import Benevole2 from '/assets/Benevole2.png'
import Benevole4 from '/assets/Benevole4.png'


// -------------- Video
import ReactPlayer from 'react-player'








// ------------ Configure Responsive for Carousel
const responsive = {

  xl: {
    breakpoint: { max: 3500, min: 1840 },
    items: 1,
  },
  lg: {
    breakpoint: { max: 1840, min: 760 },
    items: 1,
  },
  md: {
    breakpoint: { max: 760, min: 359 },
    items: 1,
  },
  sm: {
    breakpoint: { max: 359, min: 0 },
    items: 1,
  },
};




const Home = () => {



  const ref = useRef(null)
  console.log(ref);



  

    
  return (
  


    <main className='bg-white'>




      {/* -------------------------- PARTIE 1 HOME IMAGE & CAROUSEL ---------------------------- */}

    <div ref={ref} className='sm:h-[60vh] w-full sm:mt-[-9rem] md:mt-[-9.2rem] md:h-[100vh] lg:mt-[-3.5rem] lg:h-[110vh]'>


          <Carousel
            partialVisbile={false}
            swipeable={true}
            draggable={true}
            responsive={responsive}
            ssr={true}
            infinite
            // autoPlay={true}
            // autoPlaySpeed={5000}
            arrows={true}
            customRightArrow={
              <HiMiniArrowRightCircle
              className="sm:absolute right-10 w-[6vw] h-[6vh] text-white hover:text-green-200"
              onClick={() => ref.current?.next()}
              />
            } 
            customLeftArrow={
              <HiMiniArrowLeftCircle
              className="sm:absolute left-10 w-[6vw] h-[6vh] text-white hover:text-green-200"
              onClick={() => ref.current?.previous()}
              />
            }         
            keyBoardControl={true}
            renderButtonGroupOutside={true}
            ref={ref}
            className='sm:h-[60vh] w-full mt-[3.4rem] md:h-[100vh] lg:h-[110vh]'
            >

<div className='h-[100%] w-full relative'>
            
          
            <img src={ImageMain1} alt='children Africa need charity' className="sm:h-[60vh] w-[100%] object-cover  md:h-[120vh] lg:h-[110vh]"/>

            <div className='sm:absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center gap-10 text-center lg:gap-[5rem]'>
            <h1 className='sm:text-[1.2rem] text-white font-bold uppercase md:text-[2rem] lg:text-[3rem] lg:min-w-[50rem]'>Ils ont besoin de vous</h1>
            <p className='text-white sm:text-[0.7rem] md:text-[1rem] sm:max-w-[20rem] md:max-w-[30rem]'>En pourcentage de la population exposée à une insécurité alimentaire sévère, les 10 pays les plus touchés en 2023 se trouvent pour la plupart en Afrique et au Moyen-Orient.</p>


            <button className='sm:text-[0.6rem] sm:p-3 uppercase tracking-[2.5px] font-medium text-white  bg-green-700 border-[none] rounded-[45px] [box-shadow:0px_8px_15px_rgba(0,_0,_0,_0.1)] [transition:all_0.3s_ease_0s] cursor-pointer outline-[none] hover:bg-white/30 hover:[box-shadow:0px_15px_20px_rgba(46,_229,_157,_0.4)] hover:text-black hover:-translate-y-[7px] active:-translate-y-px sm:w-[20vw] sm:min-w-[16rem] md:text-[0.8rem] md:min-w-[20rem] lg:w-[23vw] lg:h-[7vh] lg:text-[1rem] lg:min-w-[35rem]'>Faire un don</button>
            </div>
            
        </div>

<div className='h-[100%] w-full relative'>
            
          
            <img src={ImageMain2} alt='children Asia need charity' className="sm:h-[60vh] w-[100%] object-cover  md:h-[120vh] lg:h-[110vh]"/>

            <div className='sm:absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center gap-10 text-center lg:gap-[5rem]'>
            <h1 className='sm:text-[1.2rem] text-white font-bold uppercase md:text-[2rem] lg:text-[3rem] lg:min-w-[50rem]'>Ne les oubliez pas</h1>
            <p className='text-white sm:text-[0.7rem] md:text-[1rem] sm:max-w-[20rem] md:max-w-[30rem]'>En pourcentage de la population exposée à une insécurité alimentaire sévère, les 10 pays les plus touchés en 2023 se trouvent pour la plupart en Afrique et au Moyen-Orient.</p>
            <button className='sm:text-[0.6rem] sm:p-3 uppercase tracking-[2.5px] font-medium text-white bg-green-700 border-[none] rounded-[45px] [box-shadow:0px_8px_15px_rgba(0,_0,_0,_0.1)] [transition:all_0.3s_ease_0s] cursor-pointer outline-[none] hover:bg-white/30 hover:[box-shadow:0px_15px_20px_rgba(46,_229,_157,_0.4)] hover:text-black hover:-translate-y-[7px] active:-translate-y-px sm:w-[20vw] sm:min-w-[16rem] md:text-[0.8rem] md:min-w-[20rem] lg:w-[23vw] lg:h-[7vh] lg:text-[1rem] lg:min-w-[35rem]'>Faire un don</button>
            </div>
            
        </div>



    <div className='h-[100%] w-full relative'>
                
              
                <img src={ImageMain3} alt='children Moyen Orient need charity' className="sm:h-[60vh] w-[100%] object-cover  md:h-[120vh] lg:h-[110vh]"/>

                <div className='sm:absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center gap-10 text-center lg:gap-[5rem]'>
                <h1 className='sm:text-[1.2rem] text-white font-bold uppercase md:text-[2rem] lg:text-[3rem] lg:min-w-[50rem]'>Un don c&apos;est un sourire et un ventre plein </h1>
                <p className='text-white sm:text-[0.7rem] md:text-[1rem] sm:max-w-[20rem] md:max-w-[30rem]'>En pourcentage de la population exposée à une insécurité alimentaire sévère, les 10 pays les plus touchés en 2023 se trouvent pour la plupart en Afrique et au Moyen-Orient.</p>
                <button className=' sm:text-[0.6rem] sm:p-3 uppercase tracking-[2.5px] font-medium text-white bg-green-700 border-[none] rounded-[45px] [box-shadow:0px_8px_15px_rgba(0,_0,_0,_0.1)] [transition:all_0.3s_ease_0s] cursor-pointer outline-[none] hover:bg-white/30 hover:[box-shadow:0px_15px_20px_rgba(46,_229,_157,_0.4)] hover:text-black hover:-translate-y-[7px] active:-translate-y-px sm:w-[20vw] sm:min-w-[16rem] md:text-[0.8rem] md:min-w-[20rem] lg:w-[23vw] lg:h-[7vh] lg:text-[1rem] lg:min-w-[35rem]'>Faire un don</button>
                </div>
                
            </div>







      </Carousel>

      </div>

            

        {/* -------------------------- PARTIE 2 - DEVENIR BENEVOLE - PARTENAIRE ---------------------------- */}
      

      <section className=' bg-white sm:h-[30vh] w-full lg:h-[30vh]'>


        <div className='sm:bg-white sm:h-[25vh] md:h-[15vh] lg:h-[20vh] w-full grid grid-cols-gridAutoFit text-white border-r-[10px]'>


          <div className='bg-white text-black h-[20vh] grid grid-rows-sub row-[span_2] gap-y-[1.5rem] sm:p-8 lg:p-[4rem]'>


            <p className='sm:text-[0.9rem] text-center mx-auto lg:max-w-[20rem] md:text-[1.2rem]'>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de</p>
            <div className='sm:flex justify-center items-center gap-[1.2rem]'>
            <h3 className='font-bold sm:text-[0.9rem] md:text-[1.2rem] text-green-700 '>En savoir plus</h3>
            <FaLongArrowAltRight size={25}/>
            </div>

          </div>

          <div className='bg-white text-black sm:h-[20vh] md:h-[25vh] grid grid-rows-sub row-[span_2] gap-y-[1.5rem] sm:p-8 lg:p-[4rem]'>

          <p className='sm:text-[0.9rem] text-center mx-auto  md:text-[1.2rem] lg:max-w-[20rem]'>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de</p>
            <div className='sm:flex justify-center items-center gap-[1.2rem]'>
            <h3 className='sm:font-bold sm:text-[0.9rem] md:text-[1.2rem] text-green-700'>Devenir Bénévole</h3>
            <FaLongArrowAltRight size={25}/>
            </div>

          </div>


          <div className='bg-white text-black h-[20vh] grid grid-rows-sub row-[span_2] gap-y-[1.5rem] sm:p-8 lg:p-[4rem]'>

          <p className='sm:text-[0.9rem] text-center mx-auto  md:text-[1.2rem] lg:max-w-[20rem]'>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de</p>
            <div className='sm:flex justify-center items-center gap-[1.2rem]'>
            <h3 className='font-bold sm:text-[0.9rem] md:text-[1.2rem] text-green-700'>Devenir Partenaire</h3>
            <FaLongArrowAltRight size={25}/>
            </div>

          </div>


          {/* <div className='bg-green-200 h-[20vh]'>

        </div> */}



        </div>

 

      </section>


          {/* -------------------------- PARTIE 3 - TITRE PROJECT HUMANITAIRE --------------------------- */}


              <div className='sm:hidden lg:flex md:mt-[27rem] lg:mt-[12rem] xl:mt-[7rem] md:h-[10px] md:w-full mx-auto bg-blue-700'>

                <div className='bg-[#FFF1D4] h-[10px] w-[30vw]'>

                  </div>

                <div className='bg-[#FFF1D4] h-[10px] w-[40vw]'>

                  </div>

                  <div className='bg-[#FFF1D4]  h-[10px] w-[30vw]'>

                  </div>


              </div>




              <div className='sm:bg-[#FFF1D4]  text-white sm:mt-[20rem] sm:h-[45vh] md:h-[40vh] w-full flex flex-col justify-center items-center gap-4 md:mt-[7rem] lg:mt-[0rem]'>


                <h3 className='sm:text-[1.2rem] text-center font-bold md:text-[2rem] lg:text-[3rem] text-black '>Projets Humanitaires</h3>
                <p className='sm:text-[0.9rem] max-w-[18rem] mx-auto text-center md:text-[1.1rem] text-black/80 lg:text-[1.3rem]'>On sait depuis longtemps que travailler avec du texte lisible</p>
                <div className='sm:flex justify-center items-center gap-[1.2rem]'>
            <h3 className='font-bold sm:text-[0.9rem] md:text-[1.4rem] text-green-700'>Découvrir toutes nos causes</h3>
            <FaLongArrowAltRight size={25} className='text-green-700' />
            </div>
              </div> 


         {/* -------------------------- PARTIE 4 - PROJET HUMANITAIRE IMAGE AVEC OBJECTIF--------------------------- */}

            <div className='bg-orange-100  sm:bg-yellow-300 md:bg-red-600 lg:bg-blue-700 xl:bg-green-500 sm:h-[240vh] w-full md:h-[60vh] md:flex lg:h-[60vh]'>

              <OurCause
              causeObjectif='Fournir un accès à l’eau potable, à l’assainissement et à l’hygiène'
              donation="30 000 €"
              percentageDonation="100%"
              objectifDonation="Objectif : 30 000€"
              children2={<>
               <div className='bg-green-500 h-[1vh] w-[60vw] '></div>
               <div className='bg-gray-100/80 h-[1vh] w-[0vw] '></div>
              </>}
              >
               <img src={causeWater} alt='cause children need water' className='sm:h-[100%] w-[100%] sm:object-cover md:object-fill' />
              
              </OurCause>


              <OurCause
              causeObjectif='Fournir un accès à l’eau potable, à l’assainissement et à l’hygiène'
              donation="10 000 €"
              percentageDonation="50%"
              objectifDonation="Objectif : 20 000€"
              children2={<>
               <div className='bg-green-500 h-[1vh] w-[30vw] '></div>
               <div className='bg-gray-100/80 h-[1vh] w-[30vw] '></div>
              </>}
              >
               <img src={causeClothe} alt='cause children need clothe' className='sm:h-[100%] w-[100%]  sm:object-cover md:object-fill' />
              
              </OurCause>



              <OurCause
              causeObjectif='Fournir un accès à l’eau potable, à l’assainissement et à l’hygiène'
              donation="20 000 €"
              percentageDonation="80%"
              objectifDonation="Objectif : 25 000€"
              children2={<>
               <div className='bg-green-500 h-[1vh] w-[50vw] '></div>
               <div className='bg-gray-100/80 h-[1vh] w-[10vw] '></div>
              </>}
              >
               <img src={causeFood} alt='cause children need food' className='sm:h-[100%] w-[100%]  sm:object-cover md:object-fill' />
              
              </OurCause>



              <OurCause
              causeObjectif='Fournir un accès à l’eau potable, à l’assainissement et à l’hygiène'
              donation="5 000 €"
              percentageDonation="35%"
              objectifDonation="Objectif : 15 000€"
              children2={<>
               <div className='bg-green-500 h-[1vh] w-[20vw] '></div>
               <div className='bg-gray-100/80 h-[1vh] w-[40vw] '></div>
              </>}
              >
               <img src={causeEducation} alt='cause education children' className='sm:h-[100%] w-[100%]  sm:object-cover md:object-fill' />
              
              </OurCause>

              </div>
    
              {/* </div> */}


             {/* -------------------------- PARTIE 5 - POURQUOI PARTICIPER A NOS CAUSES  --------------------------- */}

              <article className='bg-black/70 sm:h-[70vh] md:h-[90vh] sm:flex sm:flex-wrap md:flex-nowrap justify-around'>


                  <div className='bg-black/70 sm:w-[100%] sm:h-[35vh] md:h-[100%] flex flex-col justify-around items-center md:w-[50%]'>

                  <h3 className='sm:font-bold sm:text-[1.2rem] mx-auto text-center text-white md:text-[1.8em] sm:max-w-[20rem] lg:text-[2.2rem]'>Pourquoi participer à nos causes ?</h3>


                  <p className='sm:max-w-[15rem] sm:text-[0.9rem] mx-auto text-center md:hidden'>
                  </p>

                  <p className=' text-white md:block  sm:max-w-[22rem] text-center sm:text-[0.6rem] md:max-w-[20rem] md:text-[1rem] lg:text-[1.3rem] lg:max-w-[35rem]'>
                  Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il na pas fait que survivre cinq siècles, mais est aussi adapté à la bureautique informatique, sans que son contenu nen soit modifié. Il a été popularisé dans les années 1960  PageMaker.
      
                  </p>


                  <div 
                            className="sm:w-[50vw] md:w-[22vw] sm:h-[3vh] md:h-[5vh] mx-auto  bg-[#E6D1A3] items-center text-black sm:justify-center flex shadow-lg hover:bg-white  hover:text-black hover:border-2 border-black duration-300 cursor-pointer active:scale-[0.98]"
                            >
                            <button className="p-6"><a className="" href="">En savoir plus</a></button>
                            <FaLongArrowAltRight />
                    </div>


                  </div>


                  <div className='sm:w-[100%] sm:h-[40vh] md:h-[100%] md:block md:w-[25%]'>

                    <img src={whySupport} alt='sad children 1' className='sm:h-[100%] w-[100%] sm:object-cover md:object-fill'/>


                  </div>


                  <div className='sm:hidden  md:block w-[25%]'>

                    <img src={whySupport3} alt='sad children 2' className='sm:h-[100%] w-[100%] object-fill'/>


                  </div>

             
            
              </article>

              

           
         {/* -------------------------- PARTIE 6 - TRANSITIONS NOS ACTIONS EN FRANCE  --------------------------- */}
          


        <div className='bg-[#FFF1D4]  sm:mt-[0rem] sm:h-[45vh] md:h-[35vh]  w-full flex flex-col justify-center items-center gap-4 '>


            <h3 className='sm:text-[1.2rem] text-center font-bold md:text-[3rem] text-black'> Actions en France</h3>
            <p className='sm:text-[0.9rem] max-w-[18rem] mx-auto text-center md:text-[1.1rem] lg:text-[1.3rem] text-black/80'>On sait depuis longtemps que travailler avec du texte lisible</p>
            <div className='sm:flex justify-center items-center gap-[1.2rem]'>
            <h3 className='font-bold sm:text-[0.9rem] md:text-[1.4rem] text-green-700'>Découvrir toutes nos actions</h3>
            <FaLongArrowAltRight size={25} className='text-green-700' />
            </div>
          </div> 



          {/* -------------------------- PARTIE 7 - NOS ACTIONS EN FRANCE DETAILS--------------------------- */}

           


            <section className='bg-white sm:h-[200vh] md:h-[175vh] lg:h-[145vh] w-full '>
          
              <div className=' bg-white h-[100vh]   w-full flex sm:flex-col justify-center items-center md:h-[50vh] md:flex-row-reverse lg:h-[70vh]'>


              <div className=' bg-white   sm:h-[50%] w-full flex flex-col justify-center gap-8 items-center md:h-[100%]'>

              <h2 className='text-green-700 sm:text-[1.5rem] font-bold md:text-[1.5rem] lg:text-[2rem] mt-[0rem]'>Organisation de maraudes</h2>
              <p className='sm:text-[1rem] text-center sm:max-w-[20rem] md:text-[1rem] lg:text-[1.5rem] lg:max-w-[25rem]'>Contrairement à une opinion répandue, le Lorem Ipsum &apos;est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur </p>
              </div>



                <div className=' bg-white  sm:h-[50%] sm:flex justify-center items-center'>
              
              <div className='sm:h-[40vh] sm:w-[80vw] md:h-[35vh] md:w-[45vw] p-4 lg:h-[55vh]'>

              <ReactPlayer  url='https://www.youtube.com/watch?v=fVlP0ZiBOP8' alt='video action maraude' width='100%' height='100%' controls={true} muted={true} />

              </div>

                </div>

          
              </div>




              <div className=' bg-white  h-[100vh] w-full flex flex-col justify-center items-center md:h-[50vh] md:flex-row lg:h-[70vh]'>


              <div className=' bg-white  sm:h-[50%] w-full flex flex-col justify-center gap-8 items-center md:h-[100%]'>

              <h2 className='text-green-700 sm:text-[1.5rem] font-bold md:text-[1.5rem] mt-[3rem] lg:text-[2rem]'>Encadrement événements</h2>
              <p className='sm:text-[1rem] text-center sm:max-w-[20rem] md:text-[1rem] lg:text-[1.5rem] lg:max-w-[25rem]'>Contrairement à une opinion répandue, le Lorem Ipsum &apos;est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur

              </p>
              <div 
                        className="sm:w-[45vw] md:w-[20vw] sm:h-[8vh] mx-auto  bg-[#FFF1D4] items-center text-black sm:justify-center flex shadow-lg hover:bg-white  hover:text-black hover:border-2 border-black duration-300 cursor-pointer active:scale-[0.98]"
                        >
                        <button className="p-6"><a className="" href="">Devenir Bénévole</a></button>
                        <FaLongArrowAltRight />
                </div>
              </div>

              

                <div className='bbg-white  sm:h-[50%] flex justify-center items-center'>

                <div className='sm:h-[40vh] sm:w-[80vw] md:h-[35vh] md:w-[45vw] p-4 lg:h-[55vh]'>

              <ReactPlayer  url='https://www.youtube.com/watch?v=4YDYzifMpkY'  alt='video action encadrement événements' width='100%' height='100%'  controls={true} muted={true} />

                </div>

                </div>


              </div>

            </section>




       

          {/* -------------------------- PARTIE 8 - EVENEMENT A VENIR --------------------------- */}
                

    

<section ref={ref} className='sm:bg-black sm:h-[120vh] w-full md:mt-[-30rem] md:h-[110vh] lg:mt-[-3.5rem] lg:h-[130vh]'>


<Carousel
  partialVisbile={false}
  swipeable={true}
  draggable={true}
  responsive={responsive}
  ssr={true}
  infinite
  arrows={true}
  customRightArrow={
    <HiMiniArrowRightCircle
    className="sm:absolute right-4  sm:top-[25rem] lg:top-[30rem] w-[6vw] h-[8vh] text-white hover:text-green-200"
    onClick={() => ref.current?.next()}
    />
  } 
  customLeftArrow={
    <HiMiniArrowLeftCircle
    className="sm:absolute left-4  sm:top-[25rem] lg:top-[30rem] w-[6vw] h-[6vh] text-white hover:text-green-200"
    onClick={() => ref.current?.previous()}
    />
  }         
  keyBoardControl={true}
  renderButtonGroupOutside={true}
  ref={ref}
  className='sm:h-[120vh] w-full mt-[3.4rem] md:h-[110vh] lg:h-[130vh]'
  >

<div className='h-[100%] w-full relative'>
  

  <img src={fEvent1} alt='background evenement' className="sm:h-[120vh] w-[100%] object-cover opacity-50 md:h-[110vh] lg:h-[130vh]"/>
  <div className='sm:absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center gap-10 text-center '>

<div className='h-[10vh] w-full bg-'>
<h3 className='text-white sm:text-[1.8rem] md:text-[3rem] font-bold'>Evénéments à venir</h3>
</div>


<div className='sm:h-[60vh] sm:w-[85vw] lg:h-[70vh] flex justify-around items-center sm:gap-2 md:gap-[4rem] p-8 md:w-[70vw]'>


<Event
imageEvent1={event4}
imageEvent2={event5}
dateEvent1='15 septembre 2024'
dateEvent2='30 septembre 2024'
titleEvent1="Tournoi de Football"
titleEvent2="Visite Hopital"
descEvent1="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
descEvent2="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
/>


</div>

<div 
         className="sm:w-[45vw] md:w-[35vw] sm:h-[8vh] lg:text-[1.5rem] mx-auto bg-[#FFF1D4] items-center text-black sm:justify-center flex shadow-lg hover:bg-white  hover:text-black hover:border-2 border-black duration-300 cursor-pointer active:scale-[0.98]"
                      >
                      <button className="p-6"><a className="" href="">S&apos;inscrire à un événement</a></button>
                    
              </div>


</div>
  
</div>



<div className='h-[100%] w-full relative'>
  

<img src={fEvent1} alt='yemen-malnutrition' className="sm:h-[120vh] w-[100%] object-cover opacity-50 md:h-[110vh] lg:h-[130vh]"/>
  <div className='sm:absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center gap-10 text-center '>

<div className='h-[10vh] w-full'>
<h3 className='text-white sm:text-[1.8rem] md:text-[3rem] font-bold'>Evénéments à venir</h3>
</div>


<div className='sm:h-[60vh] sm:w-[85vw] lg:h-[70vh] flex justify-around items-center sm:gap-2 md:gap-[4rem] p-8 md:w-[70vw]'>


<Event
imageEvent1={event6}
imageEvent2={event7}
dateEvent1='7 octobre 2024'
dateEvent2='18 octobre 2024'
titleEvent1="Visite camp orphelinat"
titleEvent2="Journée à l'école"
descEvent1="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
descEvent2="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
/>




</div>
<div 
         className="sm:w-[45vw] md:w-[35vw] sm:h-[8vh] lg:text-[1.5rem] mx-auto bg-[#FFF1D4] items-center text-black sm:justify-center flex shadow-lg hover:bg-white  hover:text-black hover:border-2 border-black duration-300 cursor-pointer active:scale-[0.98]"
                      >
                      <button className="p-6"><a className="" href="">S&apos;inscrire à un événement</a></button>
                    
              </div>


</div>
  
</div>


</Carousel>

</section>


        {/* -------------------------- PARTIE 9 - CHIFFRE --------------------------- */}


   <section className=' bg-white sm:h-[100vh] md:h-[50vh] w-full sm:flex sm:flex-col md:flex-row justify-around items-center'>

        <div className='bg-green-200/40 sm:w-[50vw] sm:h-[20vh] md:h-[30vh] md:w-[20vw] flex flex-col justify-center items-center text-center'>

          <h3 className='text-black/70 sm:text-[1.8rem] md:text-[3rem] font-bold'>1 000</h3>
          <p>Visiteurs par mois</p>

        </div>

        <div className='bg-green-400/40  sm:w-[50vw] sm:h-[20vh] md:h-[30vh] md:w-[20vw] flex flex-col justify-center items-center text-center'>


        <h3 className='text-black/70 sm:text-[1.8rem] md:text-[3rem] font-bold'>100</h3>
          <p>Bénévoles connectés</p>

        </div>

        <div className='bg-green-600/40  sm:w-[50vw] sm:h-[20vh] md:h-[30vh] md:w-[20vw]  flex flex-col justify-center items-center text-center'>

        <h3 className='text-black/70 sm:text-[1.8rem] md:text-[3rem] font-bold'>12</h3>
        <p>Pays inclus dans nos actions</p>

        </div>

        <div className='bg-green-800/40  sm:w-[50vw] sm:h-[20vh] md:h-[30vh] md:w-[20vw]  flex flex-col justify-center items-center text-center'>
        <h3 className='text-black/70 sm:text-[1.8rem] md:text-[3rem] font-bold'>50</h3>
        <p>Besoins de bénévoles</p>
        </div>


   </section>


 
  <div className=' md:flex justify-center w-[50vw] mt-[5rem] md:h-[10px] md:w-full mx-auto bg-white'>



   <div className='bg-white h-[3px] w-[30vw]'>

  </div>




</div>




   {/* -------------------------- PARTIE 10 - NOS MEMBRES --------------------------- */}


   <section className=' bg-white sm:h-[150vh] md:h-[70vh] w-full sm:flex sm:flex-col md:flex-row  justify-evenly items-center'>


            <div className='md:w-[35%]  bg-white h-[40vh] flex flex-col justify-center items-center gap-6'>

              <h3 className='font-bold sm:text-[1.5rem] md:text-[2rem] text-center'>Notre membre volontaire</h3>
              <p className='sm:max-w-[18rem] sm:text-[1rem] text-center'>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est</p>
              <div 
                className="sm:w-[35vw] md:w-[25vw] sm:h-[8vh] lg:text-[1.5rem] mx-auto  bg-[#FFF1D4] items-center text-black sm:justify-center flex shadow-lg hover:bg-white  hover:text-black hover:border-2 border-black duration-300 cursor-pointer active:scale-[0.98]"
                              >
                              <button className="p-6"><a className="" href="">Devenir Bénévole</a></button>
                            
                      </div>

            </div>


            <div className='sm:w-full sm:h-[110vh] md:w-[65%] md:h-[40vh]  h-[40vh] sm:flex sm:flex-col md:flex-row justify-evenly items-center'>

            

            <div className='flex flex-col justify-center sm:w-[50vw]  bg-green-100 sm:h-[30vh] md:w-[20vw]  drop-shadow-md
        '>


                  <img src={Benevole1} alt="Fondateur" className='h-[40vh] w-[100%] object-cover'/>

                  <div className='sm:hidden  md:flex h-[30%] w-[100%] flex-col justify-center items-center bg-white'>

                    <p className='text-center text-green-700 text-[1.2rem]'>Lea et Cédric</p>
                    <p className='text-center sm:text-[0.7rem] md:text-[0.8rem]  md:max-w-[13rem] mx-auto'>Fondateur</p>

                  </div>

                </div>

                <div className='flex flex-col justify-center sm:w-[50vw]  bg-green-100 sm:h-[30vh] md:w-[20vw] drop-shadow-md
        '>


                  <img src={Benevole2} alt="Assistant" className='h-[40vh] w-[100%] object-cover'/>

                  <div className='sm:hidden  md:flex h-[30%] w-[100%] flex-col justify-center items-center  bg-white'>

                    <p className='text-center text-green-700 text-[1.2rem]'>Mozart</p>
                    <p className='text-center sm:text-[0.7rem] md:text-[0.8rem]  md:max-w-[13rem] mx-auto'>Assistant</p>

                  </div>

                </div>

                <div className='flex flex-col justify-center sm:w-[50vw]  bg-green-100 sm:h-[30vh] md:w-[20vw] drop-shadow-md
        '>



        <img src={Benevole4} alt="Bénévole" className='h-[40vh] w-[100%] object-cover'/>

        <div className='sm:hidden  md:flex h-[30%] w-[100%] flex-col justify-center items-center  bg-white'>

          <p className='text-center text-green-700 text-[1.2rem]'>Jean-Baptiste</p>
          <p className='text-center sm:text-[0.7rem] md:text-[0.8rem]  md:max-w-[13rem] mx-auto'>Bénévole</p>

        </div>

        </div>



              </div>


          


   </section>






   {/* -------------------------- PARTIE 10 - ACTUALITES --------------------------- */}


    <section className=' bg-[#FFF1GG]  w-full sm:h-[120vh] md:h-[75vh]'>


      <div className=' bg-white sm:flex justify-center items-center sm:h-[15vh] md::h-[10vh]'>
        <h3 className='sm:text-[3rem] md:text-[2rem]'>Actualités</h3>
      </div>


      <div className=' bg-white sm:flex sm:flex-col md:flex-row justify-evenly items-center sm:h-[120vh] md:h-[60vh]'>


        <div className='bg-white flex flex-col justify-center  sm:h-[35vh] lg:h-[45vh] sm:w-[50vw] md:w-[25vw] drop-shadow-lg

'>


          <img src={actualités1} alt="actualités Congo" className='h-[50%] w-[100%] object-cover'/>

          <div className='h-[50%] w-[100%] flex flex-col justify-center items-center gap-2 bg-[#FFF1D4]'>

            <p className='text-center text-green-700 text-[1.2rem]'>10 aout 2024</p>
            <p className='text-center font-bold sm:text-[0.7rem] md:text-[0.8rem]  md:max-w-[13rem] mx-auto'>La guerre au Congo continue dans le silence médiatique, explication de la situation pour comprendre le conflit</p>

          </div>

        </div>


        <div className='bg-white flex flex-col   justify-center items-center sm:h-[35vh] lg:h-[45vh]  sm:w-[50vw] md:w-[25vw] drop-shadow-lg'>

        <img src={actualités2} alt="actualités Typhon" className='h-[50%] w-[100%] object-cover'/>

        <div className='h-[50%] w-[100%] flex flex-col justify-center items-center gap-2  bg-[#FFF1D4]'>

          <p className='text-center text-green-700 text-[1.2rem]'>2 aout 2024</p>
          <p className='text-center font-bold  sm:text-[0.7rem] md:text-[0.8rem]   max-w-[13rem] mx-auto'>Super typhon Yagi : l’UNICEF apporte une aide d’urgence aux communautés dans le nord du Vietnam</p>

        </div>

        </div>


        <div className='bg-[#FFF1D4] flex flex-col   justify-center items-center sm:h-[35vh] lg:h-[45vh]  sm:w-[50vw] md:w-[25vw] drop-shadow-lg'>

        <img src={actualités3} alt="actualités Soudan" className='h-[50%] w-[100%] object-cover'/>

        <div className='h-[50%] flex flex-col justify-center items-center gap-2  w-[100%] '>

          <p className='text-center text-green-700 text-[1rem]'>25 juillet 2024</p>
          <p className='text-center font-bold  sm:text-[0.7rem] md:text-[0.8rem]   max-w-[13rem] mx-auto'>En plus de la guerre, la famine est confirmée dans le nord du Darfour, confirmant les pires craintes des agences de l&apos;ONU</p>

</div>

        </div>


      </div>


    </section>





 {/* -------------------------- PARTIE 11 - FOOTER --------------------------- */}

<footer
  className="flex flex-col items-center bg-black text-center text-surface h-[25vh] text-white sm:mt-[6rem]">
  <div className="container px-6 pt-6">

    <div className="mb-6 flex justify-center space-x-2">
 
      <a
        href="https://www.linkedin.com/in/moli%C3%A8re-zie-b12555173/"
        type="button"
        className="rounded-full bg-[#0082ca] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
        data-twe-ripple-init
        data-twe-ripple-color="light">
        <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 448 512">
           
            <path
              d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
          </svg>
        </span>
      </a>

      <a
        href="https://github.com/Molierezie"
        type="button"
        className="rounded-full bg-[#333333] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
        data-twe-ripple-init
        data-twe-ripple-color="light">
        <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 496 512">
           
            <path
              d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
          </svg>
        </span>
      </a>
    </div>
  </div>

 
  <div className="w-full bg-black/5 p-4 text-center">
    © 2023 Copyright:
    <a href="https://tw-elements.com/">TW Elements</a>
  </div>
</footer>

              


  

    </main>
  )
}

export default Home