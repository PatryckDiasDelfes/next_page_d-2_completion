import Image from "next/image"
import Textfooter from "./textfooter"

export default function Footer() {
  return (
    <footer className="bg-[url('../public/bg.vermelho.png')] h-[10em] bg-cover bg-top">
        <div className="bg-white bg-opacity-60">
          <Textfooter/>
        </div>
    </footer>
  )
}