'use client'
import Image from 'next/image';
import React, { use } from 'react'
import { useEffect } from 'react';

export default function app () {
  useEffect (()=>{
    window.alert('ini buku')
  })
  console.log('ini buku')
    return(
        <>
        <h1 className='text-black-700 text-4xl font-serif ml-130'>Ini buku</h1>
        <div className='item-center justify-center ml-130'>
      <Image
      src='/image/book.jpg'
      alt='buku'
      width={500}
      height={300}
      />
      </div>
        </>
    )
}