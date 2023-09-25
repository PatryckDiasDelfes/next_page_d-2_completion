import Image from "next/image"

export default function Footer() {
  return (

    <footer className="">
      
      <div className="h-60 flex justify-between items-end p-6 px-40 text-3xl">

        <div>
          <ul>
            Adote seu pet
          </ul>
          <ul>
            Aurora Social
            {/* https://acesse.dev/YMrp2 */}
          </ul>
          <ul>
            Sitio Dona Lucia
            {/* https://www.sitiodonalucia.com.br/ */}
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