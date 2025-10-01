import React from 'react'
import Saya from '../ujian/Ujian/Ujian_544241072.tsx'
import Box from '../ujian/Text_box.tsx'

export default function card() {
    return (
        <>
            <Saya />
            <div>
                <div>

                </div>
            </div>
            <Box />
            <div className='p-3'>
                <div className='justify-center items-center gap-4 grid grid-cols p-5'>
                    <div className='ml-40 text-white gap-3 flex flex-row'>
                        <div className='bg-cyan-100 h-110 w-70 rounded-md drop-shadow-xl/25'></div>
                        <div className='bg-cyan-100 h-110 w-70 rounded-md drop-shadow-xl/25'></div>
                    </div>

                    <div>
                        <div className='gap-3 flex flex-row'>
                            <div className='bg-cyan-100 h-110 w-70 rounded-md drop-shadow-xl/25'></div>
                            <div className='bg-cyan-100 h-110 w-70 rounded-md drop-shadow-xl/25'></div>
                            <div className='bg-cyan-100 h-110 w-70 rounded-md drop-shadow-xl/25'></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
