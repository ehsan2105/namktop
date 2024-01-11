import test1 from '@/public/1.jpg'
import test2 from '@/public/2.jpg'
import Image from 'next/image'


export default function Carte() {
    return (
        <>


            <div className="   w-56 p-2 min-w-56 bg-[#FFF] h-80 ">
                
                <Image src={test1} className=' w-full h-56 rounded-3xl' alt='some'></Image>
                <div className=' '>

                    <h6 className=' mt-2 text-end  font-thin text-[#AAAAAA]'> salal,</h6>
                    <h5 className=' mt-2 text-end  font-extralight text-[#333333]'>asds</h5>
                    <div className=' flex   flex-row    '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                            <ellipse cx="8.00016" cy="4.49967" rx="2.66667" ry="2.66667" fill="#999999" />
                            <ellipse cx="8.00016" cy="11.8337" rx="4.66667" ry="2.66667" fill="#999999" />
                        </svg>
                        <h5 className='  mb-auto -pt-4 text-end mx-2  -mt-1 font-extralight text-[#333333] '> dsdsa</h5>
                    </div>
                </div>
            </div>




        </>
    )
}