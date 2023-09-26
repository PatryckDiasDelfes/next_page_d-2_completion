import Image from "next/image"

export default function Footer() {
  return (

    <footer className="">
      
      <div className="h-60 flex justify-between items-end p-6 px-40">

        <div className="">

          <ul className="pb-4 text-[25px] font-bold">
            Adote seu pet
          </ul>
          <ul className="pb-2">
            <button>
              Aurora Social
              {/* https://acesse.dev/YMrp2 */}
            </button>
          </ul>
          <ul className="pb-2">
            <button>
              Sitio Dona Lucia
              {/* https://www.sitiodonalucia.com.br/ */}
            </button>
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