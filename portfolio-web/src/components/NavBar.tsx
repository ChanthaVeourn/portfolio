import React, { useState } from 'react'
import logo from '../../src/assets/logo.svg'
import { AiOutlineCloseCircle, AiOutlineMenuUnfold } from 'react-icons/ai'

type Props = {
  title: any
  classProps: string
}

const listStyle = 'text-center dark:text-slate-100 text-slate-700 text-lg hover:cursor-pointer hover:text-cyan-200 p-3 dark:active:text-cyan-400 select-none transition-all' 

const activeItem = " before:border-b-green-400 "

const items = ['Home', 'Apps', 'Support', 'About']

const NavItem = ({title, classProps}: any) => {
  return (
    <li className={`${listStyle} + ${classProps}`}>{title}</li>
  )
}

const NavBar = () => {

  const [toggle, setToggle] = useState(false)

  return (
  <div className='z-50 fixed w-full'>
    <div className='max-md:hidden relative w-full py-3 px-2 flex flex-row justify-between items-center nav-cloud-bg'>
        <div className='flex flex-initial'>
          <img src={logo} alt="logo" className='w-10 h-10 rounded-full'/>
        </div>
        <ul className='basis-1/3 right-10 flex flex-row justify-between items-center'>
          {items.map((item, index) => (
              <NavItem key={item + index} title={item} classProps={activeItem}/>
          ))}
        </ul>
    </div>
    {
      !toggle && <AiOutlineMenuUnfold 
      className='md:hidden absolute top-1 right-2 cursor-pointer text-slate-300 active:text-cyan-500 w-8 h-8'
      onClick={() => setToggle(!toggle)}
      />
    }
    {toggle &&  
    <div className='absolute md:hidden h-screen w-[35vw] backdrop-blur-sm right-0 top-0 bg-sidebar flex flex-col min-w-max justify-start items-end rounded-l-lg transition-all animate-slide-in'>
      <AiOutlineCloseCircle 
      className='w-5 h-5 absolute top-1 left-2 text-slate-100 cursor-pointer active:'
      onClick={() => setToggle(!toggle)}
      />
      <ul className='flex flex-col justify-between items-end'>
          {items.map((item, index) => (
              <NavItem key={item + index} title={item} classProps={activeItem}/>
          ))}
      </ul>
    </div>
    }
  </div>
  )
}

export default NavBar