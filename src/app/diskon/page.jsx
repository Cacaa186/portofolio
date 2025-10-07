"use client"
import React from 'react'

export default function disc() {
  return (
    <>
      <div className='bg-gray-200 min-h-screen flex flex-row p-6 text-black'>

        <div className='bg-white w-120 h-170 rounded-md '>
          <div className='text-2xl ml-30 mt-20'>
            Aplikasi Perhitungan
          </div>
          <div>
            <input type='text' placeholder='Masukkan Nama Barang' className='text-gray-200 mt-10 ml-10 border-2 border-black rounded-md h-10 w-100' />
          </div>

          <div>
            <input type='text' placeholder='Masukkan Kategori Barang' className='text-gray-200 mt-10 ml-10 border-2 border-black rounded-md h-10 w-100' />
          </div>

          <div>
            <input type='text' placeholder='Masukkan Harga Barang' className='text-gray-200 mt-10 ml-10 border-2 border-black rounded-md h-10 w-100' />
          </div>

          <div>
            <input type='text' placeholder='Masukkan Diskon Barang' className='text-gray-200 mt-10 ml-10 border-2 border-black rounded-md h-10 w-100' />
          </div>

          <div>
            <button type='submit' className='text-black-200 mt-10 ml-10 border-2 border-black rounded-md h-10 w-100 bg-blue-500'>
              Hitung
            </button>
          </div>

          <div>
            <button type='submit' className='text-black-200 mt-10 ml-10 border-2 border-black rounded-md h-10 w-100 bg-red-500' >
              Hapus
            </button>
          </div>
        </div>

        <div className='bg-white w-120 h-100 rounded-md ml-10 mt-20 text-center justify-center '>
          <div className='text-3xl text-bold mt-20'>
            Aplikasi Perhitungan Diskon
          </div>

          <div className='gap-6 text-xl'>
          <div>
            Nama Barang: Susu Dancow
          </div>
          <div>
            Kategori Barang: Minuman
          </div>
          <div>
            Nilai Diskon: 600.000
          </div>
          <div>
            Total Harga: 54.000
          </div>

          <button type='submit' className='text-black-200 mt-10 ml-10 border-2 border-black rounded-md h-10 w-100 bg-blue-300' >
              Kembali
            </button>
          </div>
        </div>

      </div>
    </>
  )
}
