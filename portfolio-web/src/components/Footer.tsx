import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { GiShakingHands } from 'react-icons/gi'
import { BsCashCoin } from 'react-icons/bs' 
import { IoLogoGameControllerA } from 'react-icons/io'
import { SiAdobeindesign } from 'react-icons/si'
type Props = {}

const Footer = (props: Props) => {
  return (
    <>
    <hr className='mt-10 mb-3 border border-cyan-700'/>
    <div className='mb-3 flex flex-row items-start justify-around'>
      <div className='flex flex-col items-start justify-center'>
        <h1 className='font-light self-center text-xs text-slate-300 tracking-tighter'>Our Social Media</h1>
        <div className='mt-2 flex flex-col gap-2'>
          <div className='mt-2 inline-flex gap-2 items-center'>
            <a  href=""><FaFacebookF className='text-blue-500'/></a>
            <p className='text-xs font-thin text-slate-400'>Cubixe.io</p>
          </div>
          <div className='mt-2 inline-flex gap-2 items-center'>
            <a href=""><FaInstagram className='text-violet-500'/></a>
            <p className='text-xs font-thin text-slate-400'>Cubixe.io</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-start justify-center'>
        <h1 className='font-light self-center text-xs text-slate-300 tracking-tighter'>Services</h1>
        <div className='mt-2 flex flex-col gap-1'>
          <div className='mt-2 inline-flex gap-2 items-center'>
            <a href=""><IoLogoGameControllerA className='text-yellow-500'/></a>
            <p className='text-xs font-thin text-slate-400'>Web game</p>
          </div>
          <div className='mt-2 inline-flex gap-2 items-center'>
          <a href=""><SiAdobeindesign className='text-red-500'/></a>
            <p className='text-xs font-thin text-slate-400'>Web design</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-start justify-center'>
        <h1 className='font-light self-center text-xs text-slate-300 tracking-tighter'>Be Our Partner</h1>
        <div className='mt-2 flex flex-col gap-1'>
          <div className='mt-2 inline-flex gap-2 items-center'>
            <a href=""><GiShakingHands className='text-cyan-500'/></a>
            <p className='text-xs font-thin text-slate-400'>Monthly support</p>
          </div>
          <div className='mt-2 inline-flex gap-2 items-center'>
            <a href=""><BsCashCoin className='text-green-500'/></a>
            <p className='text-xs font-thin text-slate-400'>Product ads</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer