import React from 'react'
import Navbar from '../tugas1/page'

export default function Apakah() {

    return (
        <>
        <Navbar/>
            <div className='bg-gray-900 min-h-screen pl-4'>
                <div className='text-white text-3xl font-bold pt-4'>
                    Dashboard Monitoring Jaringan
                </div>
                <div className='text-gray-400 text-xl'>
                    Status Koneksi internet dan perangkat lokal secara real-time
                </div>


                <div className='bg-slate-800 h-16 w-350 rounded-md mt-8 flex flex-row'>
                    <div className='text-white font-bold pl-39z pt-2'>
                        Rentang IP Lokal(CDR)
                    </div>
                    <div className='ml-35 flex flex-row'>
                        <div className='bg-slate-600 h-10 w-80 mt-3  rounded-md'>
                            <div className='text-white text-center justify-center mt-2'>
                                192.160.0.0/21
                            </div>
                        </div>
                        <div className='bg-blue-800 w-50 h-10 rounded-md mt-3 ml-5'>
                            <div className='text-white p-2 text-center justify-center'>
                                Mulai Scan Lokal
                            </div>
                        </div>
                    </div>
                    <div className='bg-slate-600 h-10 w-100 pl-5 pt-2 ml-80 mt-3 mr-2 text-white rounded-md'>
                        Search
                    </div>
                </div>

                <div className='flex flex-row gap-3'>
                    <div className='bg-green-950 flex flex-row gap-2 h-30 w-85 rounded-md mt-7'>
                        <div className='bg-gray-600 rounded-full h-16 w-16 ml-8 mt-6'></div>
                        <div className='text-white grid grid-col gap-1 ml-4 mt-7'>
                            Status Internet
                            <div className='text-green-400 mb-50 text-3xl font-bold'>
                                Online
                            </div>
                        </div>
                    </div>

                    <div className='bg-slate-800 h-30 w-85 rounded-md mt-7 flex flex-row'>
                        <div className='bg-gray-600 rounded-full h-16 w-16 ml-8 mt-6'></div>
                        <div className='text-white grid grid-col gap-1 ml-4 mt-7 '>
                            Latensi Internet
                            <div className='text-white mb-50 text-3xl font-bold flex flex-row'>
                                41
                                <div>
                                    ms
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-slate-800 h-30 w-85 rounded-md mt-7 flex flex-row'>
                        <div className='bg-gray-600 rounded-full h-16 w-16 ml-8 mt-6'></div>
                        <div className='text-white grid grid-col gap-1 ml-4 mt-7 '>
                            Packet Loss
                            <div className='text-white mb-50 text-3xl font-bold flex flex-row'>
                                0.18
                                <div>
                                    %
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-slate-800 h-30 w-85 rounded-md mt-7 flex flex-row'>
                        <div className='bg-gray-600 rounded-full h-16 w-16 ml-8 mt-6'></div>
                        <div className='text-white grid grid-col gap-1 ml-4 mt-7 '>
                            Perangkat Lokal Aktif
                            <div className='text-white mb-50 text-3xl font-bold flex flex-row'>
                                1833 / 2045
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row'>
                    <div className='flex flex-row'>
                        <div className='bg-slate-800 h-150 w-230 rounded-md mt-6 mb-3 flex flex-row p-4'>
                            <div className=' h-140 w-230 border border-gray-300 rounded-md'>
                                <div className='text-white text-2xl p-6'>
                                    Statistik
                                </div>
                                <div className='text-center justify-center text-white'>
                                    Bagan ceritanya
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-slate-800 h-65 w-115 rounded-md mt-6 ml-5'>
                        <div className='text-white mt-10 ml-33 font-bold'>
                            Top 20 Pengguna Internet
                            <div className='text-xs text-gray-300 ml-2'>
                               <ul>
                                
                               </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}