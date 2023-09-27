import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <>

      <footer className="bg-[url('../public/bg.vermelho.png')] h-[10em] bg-cover bg-top">

        <div className="bg-white bg-opacity-60 h-40 flex justify-between z-30 items-end p-6 px-40">

          <div>
            <h1 className="pb-4 text-[25px] font-bold">
              Adote seu pet
            </h1>

              <Link href="https://acesse.dev/YMrp2" className="flex pb-100">
                Aurora Social
              </Link>

              <Link href="https://www.sitiodonalucia.com.br" className="flex">
                Sitio Dona Lucia
              </Link>

          </div>

          <div>
            <h1 className="pb-4 text-[25px] font-bold">
              Adote seu pet
            </h1>

              <Link href="https://acesse.dev/YMrp2" className="flex pb-100">
                Aurora Social
              </Link>

              <Link href="https://www.sitiodonalucia.com.br" className="flex">
                Sitio Dona Lucia
              </Link>

          </div>

        </div>

      </footer>

    </>
  )
}