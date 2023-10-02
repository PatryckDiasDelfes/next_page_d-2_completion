import Image from 'next/image'
import Link from 'next/link'
 

export default function Home() {
  return (
    <>
    {/* <div>
    bg [#fec76c]
    bg [#67e095d0]
    </div> */}

      <header className="flex bg-gradient-to-r from-[#fec76c] from-40% to-[#67e095c2] place-items-center justify-between p-[3em] h-[60px]">

        <div className='flex pl-24 place-items-center gap-2'>
          <h1 className='text-[18px] font-bold'>
            Bem vindo gateiro
          </h1>
          <Image className='w-12 h-12'
            src="/cocorro.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        
        <nav className='flex pr-16'>

          <div className='flex gap-16'>
            
            <Link href={"https://granplus.com.br/produtos/menu-gato-castrado-carne-arroz/"} className='text-[16px] font-bold border border-solid border-[#FEC75E] p-2 hover:scale-x-125 bg-[#FEC75E] rounded-xl'>
              Ração
            </Link>
            <Link href={"https://granplus.com.br/produtos/gourmet-menu-sache-gato-adulto-carne/"} className='text-[16px] font-bold border border-solid border-[#FEC75E] p-2 hover:scale-125 bg-[#FEC75E] rounded-xl'>
              Sache
            </Link>
            <Link href={"https://vivaverdeareia.com.br/"} className='text-[16px] font-bold border border-solid border-[#FEC75E] p-2 hover:scale-125 bg-[#FEC75E] rounded-xl'>
             Areia
            </Link>

          </div>

        </nav>

      </header>

      <main className=''>

        <section className='flex'>

          <div className='flex flex-col p-[2em] gap-4'>

            <div className='w-[50%]'>

                <h1 className='font-bold text-[20px]'>
                  Como cuidar do seu gatinho?
                </h1>
                <p className=' leading-7'>
                  Cuidar de um gato é uma responsabilidade gratificante que requer atenção, carinho e dedicação. Estes animais de estimação adoráveis podem se tornar membros queridos da família, desde que sejam tratados com o devido cuidado. Aqui estão algumas dicas detalhadas sobre como cuidar de um gato:
                </p>

            </div>

              <div className='flex gap-2'>

                <ul className=' list-disc'>

                  <h1 className='flex justify-center font-bold leading-10'>
                    Alimentação Adequada
                  </h1>
                  <li>
                    Mantenha sua casa segura, retirando objetos pequenos e perigosos que o gato possa engolir.
                  </li>
                  <li>
                    Siga as instruções do fabricante para a quantidade diária recomendada e evite superalimentar seu gato.
                  </li>
                  <li>
                    Certifique-se de que seu gato tenha acesso constante a água limpa e fresca.
                  </li>

                </ul>
              
                <ul className='list-disc '>

                  <h1 className='flex justify-center font-bold leading-10'>
                    Ambiente Seguro
                  </h1>
                  <li>
                    Mantenha sua casa segura, retirando objetos pequenos e perigosos que o gato possa engolir.
                  </li>
                  <li>
                    Proteja fios elétricos e substâncias tóxicas, como plantas venenosas.
                  </li>
                  <li>
                    Ofereça áreas seguras para o gato explorar, como prateleiras ou árvores de gato.
                  </li>

                </ul>

                <Image className='w-500 h-500'
                  src="https://img.freepik.com/vetores-gratis/gato-bonito-sentado-ilustracao-em-vetor-icone-dos-desenhos-animados-conceito-de-icone-de-natureza-animal-isolado-de-vetor-premium-estilo-de-desenho-animado-plano_138676-4148.jpg"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />

              </div>
          
            </div>

        </section>

        <section className='flex p-5'>

          <Image className='w-500 h-500'
                src="https://img.freepik.com/fotos-gratis/foco-seletivo-de-um-adoravel-gato-preto-e-branco-com-a-lingua-de-fora_181624-35744.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
              />

          <div className='flex flex-col items-center'>

            <h1 className='font-bold text-[20px]'>
              Porque ter um gato?
            </h1>
            <span className='leading-7'>
              Ter gatos como animais de estimação pode ser uma experiência incrível por várias razões. Os gatos são seres cativantes e cativam seus donos com suas personalidades únicas. Eles oferecem amor e companhia, muitas vezes se tornando membros da família. A gratificação de cuidar de um gato, assistir ao seu comportamento peculiar e receber seu afeto é incomparável. Além disso, os gatos podem ser animais de estimação relativamente independentes, exigindo menos atenção constante do que alguns outros animais de estimação. Eles são uma fonte de alegria e conforto para muitas pessoas, e muitos proprietários de gatos não conseguem imaginar suas vidas sem seus adoráveis felinos.
            </span>

          </div>

        </section>

      </main>

      <footer className='bg-[#D2D7D9] rounded-lg flex justify-evenly'>
         
          {/* <Image className='w-500 h-500'
            src="/Footer(1).png"
            width={500}
            height={500}
            alt="Picture of the author"
          /> Intenção é usar a imagem como bg do footer*/}

          <div>
            <h1 className='font-bold text-[20px]'>
              Contato
            </h1>
            <p>
              info
            </p>
            <p>
              info
            </p>
          </div>

          <div>
            <h1 className='font-bold text-[20px]'>
              Contato
            </h1>
            <p>
              info
            </p>
            <p>
              info
            </p>
          </div>

          <div>
            <h1 className='font-bold text-[20px]'>
              Contato
            </h1>
            <p>
              info
            </p>
            <p>
              info
            </p>
          </div>

      </footer>
    </>
  )
}
