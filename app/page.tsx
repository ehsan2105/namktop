import LineBar from "./com/LineBar";
import AfterImage from "./com/afterImage";
import Component from "./com/body";
import Cart from "./com/cart";
import Navbar from "./com/nav"


import Image from 'next/image'
import Carte from "./com/carte";
import LineBar2 from "./com/LineBar2";
import LineBar3 from "./com/LineBar3";
import Naghd from "./com/naghd";
import BookColektion from "./com/bookColekyion";
import Footer from "./com/footer";







export default function Home() {

 

  return (
    <>
        <Navbar />
        <div className=" w-full   mt-6">
      


         <Component  />
      </div>
      
<div className=" -mt-6 ">

      <LineBar />
</div>
      <main className="    w-2/3 mx-auto   gap-2 flex   items-center text-center " >

        <div className=" w-full z-30   ">
          <div className="overflow-x-scroll  flex  z-40 ">

            <Cart />
            <Cart />
            <Cart />
            <Cart />
           
          </div>
        </div>








      </main>
      <LineBar2 />
      <main className="    w-2/3 mx-auto   gap-2 flex   items-center text-center " >

        <div className=" w-full z-40  ">
          <div className="  flex  z-50 overflow-x-scroll cart-custom">

            <Cart />
            <Cart />
            <Cart />
            <Cart />
          
          </div>
        </div>




      </main>
      <LineBar3 />
      <main className="    w-2/3 mx-auto   gap-2 flex   items-center text-center " >

        <div className=" w-full z-40 overflow-auto  ">
          <div className="    flex  z-50 ">

            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
           
          </div>
        </div>




      </main>
      <div className=" w-2/3 mx-auto my-6">
        <BookColektion />
      </div>
      <div className=" flex w-2/3  mx-auto  gap-3 overflow-scroll" >
        <Naghd />
        <Naghd />
        <Naghd />
        
      </div>
      <LineBar3 />
      <main className="    w-2/3 mx-auto   gap-2 flex   items-center text-center " >

        <div className=" w-full z-40 overflow-auto  ">
          <div className="    flex  z-50 ">

            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Carte />
          </div>
        </div>




      </main>
      <Footer />

    </>
  )
}
