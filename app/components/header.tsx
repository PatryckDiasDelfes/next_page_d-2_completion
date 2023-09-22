import Image from 'next/image'

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

            <div className=''>

                <nav className='flex gap-10 pr-20 place-items-center'>

                    <span className='font-bold'>
                        Você tem qual?
                    </span>

                    <button className='flex text-[20] font-bold border border-solid border-black p-3 rounded-xl place-items-center gap-2'>
                        Cachorro

                        <Image className='flex w-10 h-10 '
                            src="/dog.png"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />

                    </button>

                    <button className='flex text-[20] font-bold border border-solid border-black p-3 rounded-xl place-items-center gap-2'>
                        Gato

                        <Image className='flex w-10 h-10 '
                            src="/coçorro.png"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />

                    </button>

                    <button className='flex text-[20] font-bold border border-solid border-black p-3 rounded-xl place-items-center gap-2'>
                        Adote um pet

                        <Image className='flex w-10 h-10 '
                            src="/adote.png"
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />

                    </button>

                </nav>

            </div>

        </header>
    
    </>
  ) 
}