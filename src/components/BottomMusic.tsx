import Image from "next/image"

export default function BottomMusic(){
    return(
        <div className="grid grid-cols-8 gap-4 mt-4">
              <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                <Image src="/album-skillet.png" className="w-full" width={120} height={120} alt="Capa album Skillet"/>
                <strong className='font-semibold'> Daily Mix</strong>
                <span className='text-sm text-zinc-500 font-sans'> John Cooper</span>

              </a>

              <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                <Image src="/album-skillet.png" className="w-full" width={120} height={120} alt="Capa album Skillet"/>
                <strong className='font-semibold'> Daily Mix</strong>
                <span className='text-sm text-zinc-500 font-sans'> John Cooper</span>

              </a>

              <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                <Image src="/album-skillet.png" className="w-full" width={120} height={120} alt="Capa album Skillet"/>
                <strong className='font-semibold'> Daily Mix</strong>
                <span className='text-sm text-zinc-500 font-sans'> John Cooper</span>

              </a>
              <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                <Image src="/album-skillet.png" className="w-full" width={120} height={120} alt="Capa album Skillet"/>
                <strong className='font-semibold'> Daily Mix</strong>
                <span className='text-sm text-zinc-500 font-sans'> John Cooper</span>

              </a>

              <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                <Image src="/album-skillet.png" className="w-full" width={120} height={120} alt="Capa album Skillet"/>
                <strong className='font-semibold'> Daily Mix</strong>
                <span className='text-sm text-zinc-500 font-sans'> John Cooper</span>

              </a>
              
            </div>
    )
}