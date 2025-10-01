'use client';
import Image from "next/image";
import React from 'react'

export default function Page() {
    for (let n = 0; n < 11; n++) { console.log('n') }
    let apa = ['']
    const card = [
        { id: 1, title: 'card 1', img: '/image/tumbler.jpg' },
        { id: 2, title: 'card 2', img: '/image/tumbler.jpg' },
        { id: 3, title: 'card 3', img: '/image/tumbler.jpg' },
        { id: 4, title: 'card 4', img: '/image/tumbler.jpg' },
        { id: 5, title: 'card 5', img: '/image/tumbler.jpg' },
        { id: 6, title: 'card 6', img: '/image/tumbler.jpg' },
        { id: 7, title: 'card 7', img: '/image/tumbler.jpg' },
        { id: 8, title: 'card 8', img: '/image/tumbler.jpg' },
        { id: 9, title: 'card 9', img: '/image/tumbler.jpg' },
    ]
    return (
        <div className="flex min-h-screen bg-blue-200">
            <aside className=" w-70 bg-blue-300 h-400 font-serif gap-4 text-white">
                <div className="text-4xl">
                    <h1> Welcome </h1>
                </div>
                <div className="justify-center item-center gap-4 ml-15">
                <br/>
                <span><a href='#'> about </a></span>
                <br />
                <span><a href='#'> contact </a></span>
                <br />
                <span><a href='#'> help </a></span>
                </div>
                <ul>
                    {apa.map((list) => (
                        <li>{list}</li>
                    ))}
                </ul>
            </aside>
            <div>
                <main className="">
                    <div className="grid grid-cols-3 gap-4 ml-20 justify-center items-center p-6">
                        {card.map((item) => (
                            <div key={item.id} className="bg-white rounded-xl ">
                                <Image src={item.img}
                                    alt={item.title}
                                    width={200}
                                    height={200}
                                    className="rounded-lg" />
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    )
}