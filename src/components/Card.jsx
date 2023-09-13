import React, { useState } from 'react'

const Card = () => {
    const [input, setInput] = useState("");
    const [qr, setQr] = useState()
    const [isLoading, setisLoading] = useState(false);

    const getQRCode = async (e) => {
        e.preventDefault()
        try {
            setisLoading(true)
            const res = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`);
            console.log(res);
            setQr(res.url);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='my-auto'>
            <form className='form' onSubmit={getQRCode}>
                <h1 className='title font-bold text-3xl text-[#EEEEEE] mb-8'>QR Code Generator</h1>
                <div className="flex justify-center">
                    <input
                        type="text"
                        name=""
                        className='px-4 py-2 rounded-xl'
                        id=""
                        onChange={(e) => setInput(e.target.value)}
                        required
                        placeholder='Enter URL or Text'
                    />
                </div>

                {
                    isLoading && (qr ? <div className="flex justify-center">
                        <img src={qr} alt="" className='my-8' />
                    </div>
                        :
                        <div className="">Loading...</div>)
                }

                <div className="flex justify-center">
                    <button type="submit" className='bg-[#EEEEEE] px-4 py-2 rounded-xl mt-4'>Generate QR Code</button>
                </div>
            </form>
        </div>
    )
}

export default Card