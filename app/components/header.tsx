import Image from 'next/image'

import Nav from './nav'

export default function Header() {
  return ( 

    <>

        <header className='flex place-items-center bg-gradient-to-r from-[#fec76c] from-40% to-[#67e095c2] p-[2vw] justify-between'>

            <div className='flex pl-10 gap-4 items-center'>

                <h1 className='text-[29px] font-bold'>
                    Cuidados com seu pet
                </h1>

                <Image className='flex w-12 h-12 '
                    src="/pata.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                 />

            </div>

            <Nav/>

        </header>
    
    </>
  ) 
}