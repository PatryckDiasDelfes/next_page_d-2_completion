import Image from "next/image"


export default function Nav() {
    return (

        <>
        
        <nav className='flex group-hover: gap-10 pr-20 place-items-center'>

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

        </>

    )
}