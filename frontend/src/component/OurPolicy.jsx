import React from 'react'
import Title from './Title'
import { RiExchangeFundsLine } from "react-icons/ri";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

function OurPolicy() {
  return (
    <div className='w-[100vw] h-[100vh] md:h-[70vh] flex items-center justify-start flex-col  bg-gradient-to-l from-[#141414] to-[#0c2025] gap-[50px] '>
        <div className='h-[8%] w-[100%] text-center mt-[70px] '>
            <Title text1={"OUR"} text2={"POLICY"}/>
            <p className='w-[100%] m-auto text-[13px] md:text-[20px] px-[10px] text-blue-100 '>Customer-Friendly Policies – Committed to Your Satisfaction and Safety.</p>
        </div>
      <div className='w-[100%] md:min-h-[50%] h-[20%] flex items-center justify-center flex-wrap lg:gap-[50px] gap-[80px]'>
        <div className='w-[400px] max-w-[90%] h-[60%] flex items-center justify-center flex-col gap-[10px] '>
        <RiExchangeFundsLine  className='md:w-[60px] w-[30px] h-[30px] md:h-[60px] text-[#90b9ff]'/>
        <p className='font-semibold md:text-[25px] text-[19px] text-[#a5e8f7]'>Easy Exchange Policy</p>
        <p className='font-semibold md:text-[18px] text-[12px] text-[aliceblue] text-center'>Exchange Made Easy – Quick, Simple, and Customer-Friendly Process.</p>

        </div>
        <div className='w-[400px] max-w-[90%] h-[60%] flex items-center justify-center flex-col gap-[10px] '>
        <TbRosetteDiscountCheckFilled  className='md:w-[60px] w-[30px] h-[30px] md:h-[60px] text-[#90b9ff]'/>
        <p className='font-semibold md:text-[25px] text-[19px] text-[#a5e8f7]'>7 Days Return Policy</p>
        <p className='font-semibold md:text-[18px] text-[12px] text-[aliceblue] text-center'>Shop with Confidence – 7 Days Easy Return Guarantee.</p>

        </div>
        <div className='w-[400px] max-w-[90%] h-[60%] flex items-center justify-center flex-col gap-[10px] '>
        <BiSupport  className='md:w-[60px] w-[30px] h-[30px] md:h-[60px] text-[#90b9ff]'/>
        <p className='font-semibold md:text-[25px] text-[19px] text-[#a5e8f7]'>Best Customer Support</p>
        <p className='font-semibold md:text-[18px] text-[12px] text-[aliceblue] text-center'>Trusted Customer Support – Your Satisfaction Is Our Priority.</p>

        </div>
      </div>
    </div>
  )
}

export default OurPolicy
