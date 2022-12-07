import React from 'react'
import tech from '../assets/tech.jfif'
import spc from '../assets/spc.jfif'
import scifi1 from '../assets/scifi1.jfif'
import scifi2 from '../assets/scifi2.png'
import scifi3 from '../assets/scifi3.png'
import scifi4 from '../assets/scifi4.jfif'
type Props = {}

const Welcome = (props: Props) => {
  return (
    <div className='relative w-full select-none'>
    {/* welcome landing */}
      <section className='p-5 w-full flex flex-row max-sm:flex-col max-sm:justify-center justify-evenly items-center'>
        <div className='max-w-xs basis-1/3 max-sm:w-1/2 flex items-center justify-center'>
          <div className='w-1/2 flex items-center justify-center motion-safe:animate-floating'>
            <img src={tech} className='rounded-l-2xl'/>
            <img src={spc} className=' rounded-r-2xl'/>
          </div>
        </div>
        <div className='max-sm:text-center sm:basis-1/2 flex flex-col gap-5 items-start justify-center'>
          <h1 className='font-semibold text-2xl text-cyan-600 tracking-wider'>Bring your awesome childhood back</h1>
          <p className='font-light text-md text-slate-300 tracking-wider'>
            Before video games had become popular and new technology had applied, only tetris on Nintendo, bouncing ball on Nokia, and many more games had fulfil our happiness.
          </p>
        </div>
      </section>
    {/* some demo */}
    <section className='mt-5'>
      <h1 className='text-xl font-medium text-cyan-600 uppercase tracking-tighter mb-3 text-center'>
        Try our apps
      </h1>
      <hr className='border-dashed border-t-cyan-500'/>
      <div className='grid max-sm:grid-cols-2 max-md:grid-cols-3 md:grid-flow-col md:overflow-y-scroll items-start justify-evenly'>
        {/* item */}
        <div className='flex flex-col items-center justify-center gap-3 max-w-min p-3'>
          <h4 className='min-w-max font-semibold text-left text-base text-cyan-500'>Lorem ipsum dolor sit.</h4>
          <img src={scifi1} alt="demo-img" className='border-none rounded-lg shadow-cyan-300 shadow-sm object-cover'/>
          <p className='text-left text-sm font-light text-gray-300'>Lorem ipsum dolor sit amet consectetur...</p>
          <button type='button' className='max-w-max px-5 text-slate-300 shadow-violet-200 shadow-sm bg-transparent rounded-md active:shadow-green-600 active:scale-[.98] active:shadow-sm transition-all'>Try</button>
        </div>

        <div className='flex flex-col items-center justify-center gap-3 max-w-min p-3'>
          <h4 className='min-w-max font-semibold text-left text-base text-cyan-500'>Lorem ipsum dolor sit.</h4>
          <img src={scifi2} alt="demo-img" className='border-none rounded-lg shadow-cyan-300 shadow-sm object-cover'/>
          <p className='text-left text-sm font-light text-gray-300'>Lorem ipsum dolor sit amet consectetur...</p>
          <button type='button' className='max-w-max px-5 text-slate-300 shadow-violet-200 shadow-sm bg-transparent rounded-md active:shadow-green-600 active:scale-[.98] active:shadow-sm transition-all'>Try</button>
        </div>
        
        <div className='flex flex-col items-center justify-center gap-3 max-w-min p-3'>
          <h4 className='min-w-max font-semibold text-left text-base text-cyan-500'>Lorem sit.</h4>
          <img src={scifi3} alt="demo-img" className='min-w-[175px] border-none rounded-lg shadow-cyan-300 shadow-sm object-cover'/>
          <p className='text-left text-sm font-light text-gray-300'>Lorem  dolor sit amet consectetur...</p>
          <button type='button' className='max-w-max px-5 text-slate-300 shadow-violet-200 shadow-sm bg-transparent rounded-md active:shadow-green-600 active:scale-[.98] active:shadow-sm transition-all'>Try</button>
        </div>
        
        <div className='flex flex-col items-center justify-center gap-3 max-w-min p-3'>
          <h4 className='min-w-max font-semibold text-left text-base text-cyan-500'>Lorem ipsum dolor sit.</h4>
          <img src={scifi4} alt="demo-img" className='border-none rounded-lg shadow-cyan-300 shadow-sm object-cover'/>
          <p className='text-left text-sm font-light text-gray-300'>Lorem ipsum dolor sit amet consectetur...</p>
          <button type='button' className='max-w-max px-5 text-slate-300 shadow-violet-200 shadow-sm bg-transparent rounded-md active:shadow-green-600 active:scale-[.98] active:shadow-sm transition-all'>Try</button>
        </div>
       
        <div className='flex flex-col items-center justify-center gap-3 max-w-min p-3'>
          <h4 className='min-w-max font-semibold text-left text-base text-cyan-500'>Lorem ipsum dolor sit.</h4>
          <img src={scifi1} alt="demo-img" className='border-none rounded-lg shadow-cyan-300 shadow-sm object-cover'/>
          <p className='text-left text-sm font-light text-gray-300'>Lorem ipsum dolor sit amet consectetur...</p>
          <button type='button' className='max-w-max px-5 text-slate-300 shadow-violet-200 shadow-sm bg-transparent rounded-md active:shadow-green-600 active:scale-[.98] active:shadow-sm transition-all'>Try</button>
        </div>

        <div className='flex flex-col items-center justify-center gap-3 max-w-min p-3'>
          <h4 className='min-w-max font-semibold text-left text-base text-cyan-500'>Lorem ipsum dolor sit.</h4>
          <img src={scifi2} alt="demo-img" className='border-none rounded-lg shadow-cyan-300 shadow-sm object-cover'/>
          <p className='text-left text-sm font-light text-gray-300'>Lorem ipsum dolor sit amet consectetur...</p>
          <button type='button' className='max-w-max px-5 text-slate-300 shadow-violet-200 shadow-sm bg-transparent rounded-md active:shadow-green-600 active:scale-[.98] active:shadow-sm transition-all'>Try</button>
        </div>
        
        <div className='flex flex-col items-center justify-center gap-3 max-w-min p-3'>
          <h4 className='min-w-max font-semibold text-left text-base text-cyan-500'>Lorem sit.</h4>
          <img src={scifi3} alt="demo-img" className='min-w-[175px] border-none rounded-lg shadow-cyan-300 shadow-sm object-cover'/>
          <p className='text-left text-sm font-light text-gray-300'>Lorem  dolor sit amet consectetur...</p>
          <button type='button' className='max-w-max px-5 text-slate-300 shadow-violet-200 shadow-sm bg-transparent rounded-md active:shadow-green-600 active:scale-[.98] active:shadow-sm transition-all'>Try</button>
        </div>
        
        <div className='flex flex-col items-center justify-center gap-3 max-w-min p-3'>
          <h4 className='min-w-max font-semibold text-left text-base text-cyan-500'>Lorem ipsum dolor sit.</h4>
          <img src={scifi4} alt="demo-img" className='border-none rounded-lg shadow-cyan-300 shadow-sm object-cover'/>
          <p className='text-left text-sm font-light text-gray-300'>Lorem ipsum dolor sit amet consectetur...</p>
          <button type='button' className='max-w-max px-5 text-slate-300 shadow-violet-200 shadow-sm bg-transparent rounded-md active:shadow-green-600 active:scale-[.98] active:shadow-sm transition-all'>Try</button>
        </div>

        <div className='flex flex-col items-center justify-center gap-3 max-w-min p-3'>
          <h4 className='min-w-max font-semibold text-left text-base text-cyan-500'>Lorem ipsum dolor sit.</h4>
          <img src={scifi1} alt="demo-img" className='border-none rounded-lg shadow-cyan-300 shadow-sm object-cover'/>
          <p className='text-left text-sm font-light text-gray-300'>Lorem ipsum dolor sit amet consectetur...</p>
          <button type='button' className='max-w-max px-5 text-slate-300 shadow-violet-200 shadow-sm bg-transparent rounded-md active:shadow-green-600 active:scale-[.98] active:shadow-sm transition-all'>Try</button>
        </div>

        <div className='flex flex-col items-center justify-center gap-3 max-w-min p-3'>
          <h4 className='min-w-max font-semibold text-left text-base text-cyan-500'>Lorem ipsum dolor sit.</h4>
          <img src={scifi2} alt="demo-img" className='border-none rounded-lg shadow-cyan-300 shadow-sm object-cover'/>
          <p className='text-left text-sm font-light text-gray-300'>Lorem ipsum dolor sit amet consectetur...</p>
          <button type='button' className='max-w-max px-5 text-slate-300 shadow-violet-200 shadow-sm bg-transparent rounded-md active:shadow-green-600 active:scale-[.98] active:shadow-sm transition-all'>Try</button>
        </div>
        
        <div className='flex flex-col items-center justify-center gap-3 max-w-min p-3'>
          <h4 className='min-w-max font-semibold text-left text-base text-cyan-500'>Lorem sit.</h4>
          <img src={scifi3} alt="demo-img" className='min-w-[175px] border-none rounded-lg shadow-cyan-300 shadow-sm object-cover'/>
          <p className='text-left text-sm font-light text-gray-300'>Lorem  dolor sit amet consectetur...</p>
          <button type='button' className='max-w-max px-5 text-slate-300 shadow-violet-200 shadow-sm bg-transparent rounded-md active:shadow-green-600 active:scale-[.98] active:shadow-sm transition-all'>Try</button>
        </div>
        
        <div className='flex flex-col items-center justify-center gap-3 max-w-min p-3'>
          <h4 className='min-w-max font-semibold text-left text-base text-cyan-500'>Lorem ipsum dolor sit.</h4>
          <img src={scifi4} alt="demo-img" className='border-none rounded-lg shadow-cyan-300 shadow-sm object-cover'/>
          <p className='text-left text-sm font-light text-gray-300'>Lorem ipsum dolor sit amet consectetur...</p>
          <button type='button' className='max-w-max px-5 text-slate-300 shadow-violet-200 shadow-sm bg-transparent rounded-md active:shadow-green-600 active:scale-[.98] active:shadow-sm transition-all'>Try</button>
        </div>
      </div>
    </section>

    </div>
  )
}

export default Welcome