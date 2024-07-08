'use client';

import React from 'react'
import { PinContainer } from "@/components/ui/3d-pin";
import Image from 'next/image'

function page() {
  return (
    <div className='className=" w-full flex items-center h-[40rem]  dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative  justify-center'>
        <div className='flex h-[20rem] w-full items-center justify-between  px-20'>
            <div>
                <h1
                className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                >Rohit Shrivastav
                </h1>
            </div>

            <div>
                <PinContainer
                    title="/github.com/STRANJaR"
                    href="https://github.com/STRANJaR"
                    >
                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[25rem] ">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                        Full Stack Developer
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500 ">
                        By the emotionally, professionally I enthusiast in web development.
                        </span>
                    </div>

                    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                        <Image
                        className=' rounded-lg'
                        src={'/courses/dev_rohit.jpeg'}
                        height='400'
                        width='400'
                        alt='profile'
                        />
                    </div>
                </PinContainer>
            </div>
        </div>
    </div>
  )
}

export default page