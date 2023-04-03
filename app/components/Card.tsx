import fetcher from "@/lib/fetcher"
import Image from "next/image"
import useSWR from 'swr'
import Loader from "./Loader"

export default function Card() {
    const { data } = useSWR('/api/quote', fetcher)
    const { data: imageURL } = useSWR(data ? `/api/image?prompt=${data.success.q}` : null, fetcher)

    if (!data || !imageURL) return <Loader />

    const { q: quote, a: author } = data.success

    return (
        <div className="card w-[300px] h-[460px] text-center m-auto p-3">
            <div className="mb-5">
                <p>FROM</p>
                <p className="font-bold text-xl">{author}</p>
            </div>

            <div className="bg-white w-[250px] h-[250px] m-auto rounded-lg flex justify-center mb-5 drop-shadow-lg">
                <Image className="rounded-lg" src={imageURL} alt={'Image of the quote: ' + quote} width={256} height={256} />
            </div>

            <div className="px-3 italic text-left max-h-[100px] overflow-auto break-words overflow-ellipsis">
                <p>{quote}</p>
            </div>
        </div>
    )
}

