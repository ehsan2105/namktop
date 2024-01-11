import test1 from '@/public/1.jpg'

import Image from 'next/image'

import '@/public/cart.css'
const getData = async () => {
    const res = await fetch("https://namaktab.ariomotion.com/book-api/site/books/70");
    const data = await res.json();
    return data
}


export default async function Cart() {
    const data = await getData()
    let x = data as any

    
    return (
        <>


            <div className="  w-56 p-2 min-w-56 bg-[#FFF] h-80  z-50 ">
                <div className=' relative hover:cursor-pointer '>
                    <div className=' hover:cursor-pointer   absolute  justify-center items-cente z-0 mx-auto inline-flex   -p-2  rounded-tl-3xl rounded-br-3xl bg-[#00A693]    w-[6.5rem] h-[3.5rem] '>
                        <div className=' svg z-0'>

                            <svg className='  -translate-y-1 static mt-2 hover:z-50  ' xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                                <circle cx="18.5" cy="18.5" r="4.5" stroke="white" stroke-width="2.25" />
                                <path d="M33.4259 20.0002C32.6734 27.5801 26.278 33.5002 18.5 33.5002C10.2157 33.5002 3.5 26.7844 3.5 18.5002C3.5 15.768 4.23046 13.2065 5.50673 11.0002M17 3.57422C14.8308 3.78959 12.7975 4.4671 11 5.50689" stroke="white" stroke-width="2.25" stroke-linecap="round" />
                                <path d="M23 18.4998V4.18652C27.6651 5.65175 31.3481 9.33472 32.8133 13.9998" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                    </div>

                    <img src={test1.src as any} width={400} height={400} className='   z-50  w-full h-56 rounded-3xl' alt='some'></img>

                    <div className=' absolute  test  top-[25%] left-0  w-full   h-[75%]     bg-gradient-to-t from-[#2e2c2ca1] rounded-b-3xl'>
                        <div className='  -top-[33%] z-50  testi absolute  bg-[#00A693] justify-center items-cente mx-auto inline-flex   -p-2  rounded-tl-3xl rounded-br-3xl    w-[6.5rem] h-[3.5rem] '>
                            <div className='z-30 svg '>

                                <svg className='   -translate-y-1 static mt-2 hover:z-50 w-6 h-6' xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                                    <circle cx="18.5" cy="18.5" r="4.5" stroke="white" stroke-width="2.25" />
                                    <path d="M33.4259 20.0002C32.6734 27.5801 26.278 33.5002 18.5 33.5002C10.2157 33.5002 3.5 26.7844 3.5 18.5002C3.5 15.768 4.23046 13.2065 5.50673 11.0002M17 3.57422C14.8308 3.78959 12.7975 4.4671 11 5.50689" stroke="white" stroke-width="2.25" stroke-linecap="round" />
                                    <path d="M23 18.4998V4.18652C27.6651 5.65175 31.3481 9.33472 32.8133 13.9998" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className=' flex  justify-center  text-white     '>{x.book_type}</p>
                            </div>
                        </div>
                        <div className=' flex       '>
                            <div className='     mt-20   flex   flex-col  justify-end items-end '>
                                <svg className=' ml-3' xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M12 3.5L14.0206 9.71885H20.5595L15.2694 13.5623L17.2901 19.7812L12 15.9377L6.70993 19.7812L8.73056 13.5623L3.44049 9.71885H9.97937L12 3.5Z" stroke="#CCCCCC" stroke-width="1.5" stroke-linejoin="round" />
                                </svg>
                                <p className=' text-[#CCC] font-normal text-xs ml-4'>  یشس</p>
                                <button className=' w-12 h-7 justify-center items-center  bg-[#00A693] rounded-full mb-2  text-[#FFFF] mr-2'> خرید</button>
                            </div>
                            <div className='flex flex-col mr-12 mt-auto'>
                                <div className=' flex '>
                                    <h1 className=' px-1 py-1 rounded-full font-normal text-[#FFFF] text-xs      mx-auto bg-[#C62020]'>%{x.discount_percent}</h1>
                                    <h1 className=' font-normal text-[#FFFF] text-base line-through'>{x.price_with_discount}</h1>
                                </div>
                                <div>
                                    <h1 className=' font-bold text-3xl  -mr-[6px] text-[#FFFF]'>{x.price}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className=' '>

                    <h6 className=' mt-2 text-end  font-thin text-[#AAAAAA]'> {x.publisher}</h6>
                    <h5 className=' mt-2 text-end   font-bold text-[#333333]'>تست کیفیت</h5>
                    <div className=' flex   flex-row    '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                            <ellipse cx="8.00016" cy="4.49967" rx="2.66667" ry="2.66667" fill="#999999" />
                            <ellipse cx="8.00016" cy="11.8337" rx="4.66667" ry="2.66667" fill="#999999" />
                        </svg>
                        <h5 className='  mb-auto -pt-4 text-end mx-2 pm-1 -mt-1 font-extralight text-[#333333] '> کیفیت </h5>
                    </div>
                </div>


            </div>




        </>
    )
}