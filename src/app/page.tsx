import BottomMusic from '@/components/BottomMusic'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import TopMusic from '@/components/TopMusic'
import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play as PlayButtton, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize, Maximize2} from 'lucide-react'

import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
       <Sidebar/>
        <main className="flex-1 p-6">
            <div className='flex items-center gap-4'>
              <button className=' rounded-full bg-black/20 p-1'>
                <ChevronLeft/>
              </button>

              <button  className=' rounded-full bg-black/20 p-1'>
                <ChevronRight/>
              </button>

            </div>

            <h1 className='font-semibold text-3xl mt-10'> Good Afternoon</h1>

           <TopMusic/>

            <h2 className="font-semibold text-2xl mt-10"> Made for Heitor Borba Marini</h2>
            
            <BottomMusic/>
          
        </main>
      </div>
      <Footer/>
    </div>
  )
}
