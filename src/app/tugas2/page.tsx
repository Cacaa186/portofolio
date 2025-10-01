import React from 'react'

export default function tugas() {
    return (
        <>
            <div className='bg-cover bg-gray-100 h-650'>
                <div className=' font-serif'>
                    <div className='h-20 text-center justify-center items-center text-black text-4xl'>
                        <br />
                        <div> Formulir Pendaftaran Siswa </div>
                    </div>
                </div>

                <div className='bg-white w-300 h-575 ml-30 rounded-md mb-50'>
                    <div className='bg-white h-220 w-300 mt-20 gap-4 p-6 rounded-md'>
                        <div className='bg-white border-x border-y border-black h-200 rounded-md '>
                            <div className='text-black text-3xl ml-20 mt-5'>
                                Data Diri
                            </div>
                            <div className='flex flex-row mt-10 gap-4'>
                                <div className='ml-20 text-black grid grid-col'>
                                    NIS
                                    <br />
                                    <input type='text' required className='text-black border-gray-400 border-2 h-10 rounded-md w-125' />
                                    <br />
                                    Email dari sekolah
                                    <br />
                                    <input type='email' required className='text-black border-gray-400 border-2 h-10 rounded-md w-125' />
                                    <br />
                                    Jenis Kelamin
                                    <select name='jenis kelamin' className='text-black border-gray-400 border-2 h-11 rounded-md w-125 '>
                                        <option value='perempuan'> perempuan </option>
                                        <option value='laki-laki'> laki-laki </option>
                                        <option value='Tidak Ingin Memberi Tau'> Tidak Ingin Memberi Tau</option>
                                    </select>
                                    <br />
                                    Tanggal Lahir
                                    <input type='date' required className='text-black border-gray-400 border-2 h-10 rounded-md w-125' />
                                </div>
                                <div className='text-black grid grid-col'>
                                    NISN
                                    <input type='text' required className='text-black border-gray-400 border-2 h-10 rounded-md w-125' />
                                    <br />
                                    Nama Lengkap *sesuai ijazah
                                    <input type='text' required className='text-black border-gray-400 border-2 h-10 rounded-md w-125' />
                                    <br />
                                    Tempat Lahir
                                    <input type='text' required className='text-black border-gray-400 border-2 h-10 rounded-md w-125' />
                                    <br />
                                    Agama
                                    <input type='text' required className='text-black border-gray-400 border-2 h-10 rounded-md w-125' />
                                </div>
                            </div>
                            <div className='ml-20 text-black grid '>
                                <br />
                                Alamat
                                <input type='text' required className='text-black border-gray-400 border-2 h-13 rounded-md w-255' />
                            </div>
                            <div className='flex flex-row mt-5 gap-4'>
                                <div className='grid grid-col ml-20 text-black'>
                                    Provinsi
                                    <br />
                                    <input type='text' required className='text-black border-gray-400 border-2 h-10 rounded-md w-125' />
                                    <br />
                                    Kacamatan
                                    <br />
                                    <input type='text' required className='text-black border-gray-400 border-2 h-10 rounded-md w-125' />
                                </div>
                                <div className='grid grid-col text-black'>
                                    Kota/Kabupaten
                                    <input type='text' required className='text-black border-gray-400 border-2 h-10 rounded-md w-125' />
                                    <br />
                                    Nomor Whatsapp
                                    <input type='text' required className='text-black border-gray-400 border-2 h-10 rounded-md w-125' />
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className='bg-white h-110 gap-4 w-300 mt-20  gap-4 p-6 rounded-md'>
                        <div className='bg-white h-100 border-x border-y border-black rounded-md'>
                            <div className='text-black text-2xl ml-20 mt-5'>
                                Asal Sekolah
                            </div>
                            <div className='flex flex-row mt-13 gap-4'>
                                <div className='ml-20 text-black grid grid-col'>
                                    Nama Asal Sekolah
                                    <br />
                                    <input type='text' required className='text-black border-gray-400 border-2 h-10 rounded-md w-125' />
                                    <br />
                                    Kota/Kabupaten Asal Sekolah
                                    <br />
                                    <input type='text' required className='text-black border-gray-400 border-2 h-10 rounded-md w-125' />
                                </div>
                                <div className='text-black grid grid-col'>
                                    Provinsi Asal Sekolah
                                    <input type='text' required className='text-black border-gray-400 border-2 h-10 rounded-md w-125' />
                                    <br />
                                    Kecamatan Asal Sekolah
                                    <input type='text' required className='text-black border-gray-400 border-2 h-10 rounded-md w-125' />
                                </div>
                            </div>
                            <div className='text-black flex flex-col ml-20'>
                                <br />
                                Alamat
                                <input type='text' required className='text-black border-gray-400 border-2 h-13 rounded-md w-255' />
                            </div>
                        </div>
                    </div>



                    <div className='text-black bg-white h-180 w-300'>
                        <div className=' mt-20 p-6 rounded-md flex flex-row gap-6 p-6 flex flex-row gap-4 text-black'>
                            <div className='bg-white border-x border-y border-black h-150 w-300 rounded-md'>
                                <div className='ml-5 mt-5 text-2xl'>
                                    Data Ayah
                                </div>
                                <div className='text-1xl mt-5 ml-5 grid grid-col gap-2 p-4'>
                                    Nama Ayah/Wali
                                    <br />
                                    <input type='text' required className='text-black border-gray-400 border-2 h-10 rounded-md w-120' />
                                    <br />
                                    Profesi Ayah/Wali
                                    <br />
                                    <input type='text' required className='text-black border-gray-400 border-2 h-10 rounded-md w-120' />
                                    <br />
                                    No Whatsapp Ayah/Wali
                                    <br />
                                    <input type='text' required className='text-black border-gray-400 border-2 h-10 rounded-md w-120' />
                                    <br />
                                    Usia Ayah/Wali
                                    <br />
                                    <input type='text' required className='text-black border-gray-400 border-2 h-10 rounded-md w-120' />
                                    <br />
                                    Alamat Ayah/Wali
                                    <br />
                                    <input type='text' required className='text-black border-gray-400 border-2 h-10 rounded-md w-120' />
                                </div>
                            </div>
                            <div className='bg-white ml-10 border-x border-y border-black h-150 w-300 rounded-md'>
                                <div className='ml-5 mt-5 text-2xl'>
                                    Data Ibu
                                </div>
                                <div className='text-1xl mt-5 ml-5 grid grid-col gap-2 p-4'>
                                    Nama Ibu/Wali
                                    <br />
                                    <input type='text' required className='text-black border-gray-400 border-2 h-10 rounded-md w-120' />
                                    <br />
                                    Profesi Ibu/Wali
                                    <br />
                                    <input type='text' required className='text-black border-gray-400 border-2 h-10 rounded-md w-120' />
                                    <br />
                                    No Whatsapp Ibu/Wali
                                    <br />
                                    <input type='text' required className='text-black border-gray-400 border-2 h-10 rounded-md w-120' />
                                    <br />
                                    Usia Ibu/Wali
                                    <br />
                                    <input type='text' required className='text-black border-gray-400 border-2 h-10 rounded-md w-120' />
                                    <br />
                                    Alamat Ibu/Wali
                                    <br />
                                    <input type='text' required className='text-black border-gray-400 border-2 h-10 rounded-md w-120' />
                                </div>
                            </div>
                        </div>
                        <br />
                        <div>
                            <div className='items-center justify-center '>
                                <button
                                    type="submit"className="bg-blue-500 mt-4 text-white h-10 w-270 font-semibold rounded-full hover:bg-blue-600 transition ml-15">
                                    kirim data
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}