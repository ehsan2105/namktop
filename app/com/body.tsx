"use client"
import test1 from '@/public/1.jpg'
import test2 from '@/public/2.jpg'


import '@/public/bodyImage.css'
export default function Component() {
  const iamge = [
    { image: test1 }, { image: test2 },
  ]

  return (<>
    <div className='  mx-auto  w-2/3      h-[700px]  rounded-xl' >



      <div id="carouselExampleIndicators" className="carousel   rounded-3xl slide  h-[500px]  pt-36" data-bs-ride="carousel">

        <div className="carousel-indicators relative   ">
          <div className='  absolute -left-32  top-14'>

            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active  transparent test border-0 py-1 mx-2  rounded-full  max-w-3    " aria-current="true" aria-label="Slide 1"></button>
            <button type="button" className='test max-w-3 border-0 py-1 mx-2  rounded-full' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" className='test  border-0 py-1 mx-2  max-w-3  rounded-full' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
        </div>
        <div className="carousel-inner rounded-lg">
          <div className="carousel-item active">
            <img src={test1.src} className="d-block   object-cover w-100 h-[500px]" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={test2.src} className="d-block object-cover w-100 h-[500px]" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={test1.src} className="d-block w-100 object-cover h-[500px] max-h-[700px]" alt="..." />
          </div>
        </div>
        <div className=' relative'>
          <div className=' absolute left-0  w-10 h-12   -top-[300px]  '>

            <button className="carousel-control-prev py-2   rounded-r-lg pb-2 w-full p-4 btns" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="" aria-hidden="true"> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M25.0008 34.45C24.6841 34.45 24.3674 34.3334 24.1174 34.0834L13.2508 23.2167C11.4841 21.45 11.4841 18.55 13.2508 16.7834L24.1174 5.9167C24.6008 5.43337 25.4008 5.43337 25.8841 5.9167C26.3674 6.40003 26.3674 7.20003 25.8841 7.68337L15.0174 18.55C14.2174 19.35 14.2174 20.65 15.0174 21.45L25.8841 32.3167C26.3674 32.8 26.3674 33.6 25.8841 34.0834C25.6341 34.3167 25.3174 34.45 25.0008 34.45Z" fill="white" />
              </svg> </span>
              <span className="visually-hidden">Previous</span>
            </button>
          </div>
          <div className=' absolute  right-0  w-10  h-12  -top-[300px]  '>

            <button className="carousel-control-next py-2 rounded-l-lg pb-2 w-full p-4 btns " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="  " aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M14.9992 5.54997C15.3159 5.54997 15.6326 5.66663 15.8826 5.91663L26.7492 16.7833C28.5159 18.55 28.5159 21.45 26.7492 23.2166L15.8826 34.0833C15.3992 34.5666 14.5992 34.5666 14.1159 34.0833C13.6326 33.6 13.6326 32.8 14.1159 32.3166L24.9826 21.45C25.7826 20.65 25.7826 19.35 24.9826 18.55L14.1159 7.6833C13.6326 7.19997 13.6326 6.39997 14.1159 5.91663C14.3659 5.6833 14.6826 5.54997 14.9992 5.54997Z" fill="white" />
              </svg></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>







    </div>
  </>
  );
}
