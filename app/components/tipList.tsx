import Image from "next/image"
import Tip from "./propTip"

export default function TipList() {
    return (
        
        <>

            <div className="flex justify-end">

                {/* <div className="">

                    <Image className='w-25 h-25'
                        src="/corgi.comendo.jpg"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />

                </div> */}

                <div className="">

                    <Image className='w-25 h-25'
                        src="/cachorro.pula.come.jpg"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />

                </div>

                <div className="w-[60%] leading-5 pb-24 px-14 ">

                    <Tip
                        title="Alimentação Adequada"
                        text="A nutrição é fundamental para a saúde de seu animal de estimação. Certifique-se de fornecer uma dieta equilibrada e apropriada para a espécie, raça e idade do animal. Consulte um veterinário para obter recomendações específicas sobre a alimentação do seu animal de estimação. Certifique-se de manter água fresca e limpa sempre disponível."
                    />

                    <Tip
                        title="Abrigo Confortável"
                        text="Proporcione um local seguro e confortável para seu animal de estimação. Certifique-se de que ele tenha um abrigo adequado, seja uma gaiola, um canil, um aquário, um terrário ou um espaço dentro de sua casa. O ambiente deve estar limpo, seco e protegido das condições climáticas adversas."
                    />

                    <Tip
                        title="Atenção e Afeto"
                        text="Os animais de estimação precisam de atenção e carinho. Dedique tempo para brincar, acariciar e interagir com seu animal de estimação. Isso ajuda a construir um vínculo forte e a manter seu animal feliz."
                    />

                    <Tip
                        title="Exercício e Estimulação"
                        text="Proporcione oportunidades para que seu animal de estimação se exercite e se divirta. Passeios, jogos e brinquedos são ótimas maneiras de manter seu animal ativo e mentalmente estimulado."
                    />

                    <Tip
                        title="Socialização"
                        text="Exponha seu animal de estimação a diferentes pessoas, animais e ambientes desde cedo para promover a socialização saudável."
                    />

                </div>

            </div>

        </>

    )

}