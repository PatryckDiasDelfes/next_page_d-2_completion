import Image from "next/image"
import Textfooter from "./textfooter"

export default function Footer() {
  return (

    <footer className="relative">

      <div className="z-2">
        <Textfooter/>
      </div>

      <div className="bg-[url('../public/bg.vermelho.png')] absolute inset-0 opacity-80 z-10"/>


    </footer>

    

  )
}