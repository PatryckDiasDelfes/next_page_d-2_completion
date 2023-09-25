import Image from "next/image"

export default function Footer() {
  return (

    <footer className="">
      
      <div className="">

        <Image className=' w-[100%]'
          src="/background.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />

      </div>

      <div className="flex justify-between px-40">

        <div>
          <ul>
            Contato
          </ul>
          <ul>
            Contato
          </ul>
          <ul>
            Contato
          </ul>
        </div>

        <div>
          <ul>
            Contato
          </ul>
          <ul>
            Contato
          </ul>
          <ul>
            Contato
          </ul>
        </div>

        <div>
          <ul>
            Contato
          </ul>
          <ul>
            Contato
          </ul>
          <ul>
            Contato
          </ul>
        </div>

      </div>

    </footer>

  )
}