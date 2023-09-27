interface TipProps {
    title: string
    text: string
}

export default function Tip(props: TipProps) {
    return (

        <>

            <div className="pb-10">

                <h1 className="font-semibold">
                    {props.title}
                </h1>
                <span>
                    {props.text}
                </span>

            </div>

        </>
    )
}