

export default function Header() {
  return ( 
    <>
        <header className='flex place-items-center bg-gradient-to-r from-[#fec76c] from-40% to-[#67e095c2] p-[2vw] justify-between'>

            <div>
                <h1 className='text-[25] font-bold'>
                    Cuidados com seu pet
                </h1>
            </div>

            <div>
                <nav className='flex gap-10 pr-20 place-items-center'>
                    <span className=''>
                        Quer cuidar de qual?
                    </span>
                    <button className='flex text-[20] font-bold border border-solid border-black p-3 rounded-xl'>
                        Cachorro
                    </button>
                    <button className='flex text-[20] font-bold border border-solid border-black p-3 rounded-xl'>
                        Gato
                    </button>
                    <button className='flex text-[20] font-bold border border-solid border-black p-3 rounded-xl'>
                        Adote um pet
                    </button>
                </nav>
            </div>

        </header>
    
    </>
  ) 
}