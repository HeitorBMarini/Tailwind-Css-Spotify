import Image from "next/image"
import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play as PlayButtton, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize, Maximize2} from 'lucide-react'

export default function Footer(){
    return(
        <footer className="bg-zinc-950 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className='flex items-center gap-2'>
        <Image src="/album-skillet.png" className="w-full" width={56} height={56} alt="Capa album Skillet"/>
          <div className='flex flex-col '>
            <strong className='font-normal cursor-pointer '>
              Monster
            </strong>
            <a className='text-xs text-zinc-400 cursor-pointer'>
              Skillet
            </a>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='flex items-center gap-6'>
            <Shuffle size={20} className='text-zinc-200'/>
            <SkipBack size={20} className='text-zinc-200'/>
            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black ">
                    <PlayButtton/>
             </button>
             <SkipForward size={20} className='text-zinc-200'/>
             <Repeat size={20} className='text-zinc-200'/>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400 mt-3'>
              0:19
            </span>
            <div className='h-1 rounded-full w-96 bg-zinc-600 mt-3'>
              <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
            </div>
            <span className='text-xs text-zinc-400 mt-3'>
            0:55
            </span>

          </div>

        </div>
        <div className='flex items-center gap-4'>
          <Mic2 size={20}/>
          <LayoutList size={20}/>
          <Laptop2 size={20}/>
          <div className='flex items-center gap-2'>
            <Volume size={20}/>
            <div className='h-1 rounded-full w-24 bg-zinc-600 mt-1'>
              <div className='bg-zinc-200 w-10 h-1 rounded-full'></div>
            </div>
          </div>
          <Maximize2 size={20}/>
        </div>
      </footer >
    )
}