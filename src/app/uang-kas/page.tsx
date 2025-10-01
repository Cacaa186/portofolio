import Link from "next/link";
import React from 'react'

const Naskun = () => {
    return (
        <>
            <nav className="bg-blue-200">
                <div className="logo max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div>
                        <div className="flex-shrink-0">
                            <a href="/" className=" flex item-center justify-center text-white text-4xl "> Logo</a>
                        </div>
                    </div>
                    <div className="gap-4 p-4  ">
                    <Link href='/'> <a> home </a> </Link>
                    <Link href='/about'> <a> About </a> </Link>
                    <Link href='/help'> <a> help </a> </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Naskun;