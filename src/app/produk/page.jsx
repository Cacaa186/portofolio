'use client';
import Image from 'next/image';
import React from 'react'
import { useEffect } from 'react';

export default function app () {
  useEffect(()=> {
    window.alert ('ini tumbler')
  })

    console.log ('ini produk')
    return(
        <>
        <h1 className='text-black-700 text-4xl font-serif ml-130'> Ini tumbler</h1>
        <div className='item-center justify-center ml-130'>
      <Image
      alt='tumbler'
      src='/image/tumbler.jpg'
      width={300}
      height={200}/>
      </div>
        </>
    )
}