import Image from 'next/image'
import React from 'react'
import ProfilePicture from '../../public/profile-picture.png';

const HomePage = () => {
    return (
        <div className='card flex justify-between items-center px-12 py-20'>
            <div className='flex-2'>
                <h1 className="text-5xl font-bold">
                    Hi, I’m Ariq.
                </h1>
                <div className="mt-10">
                    <p className="mt-6 text-gray-700 text-lg">
                        Impact-driven Frontend and Mobile Engineer with 5+ years of experience delivering performant, scalable digital experiences across fintech, banking, and e-commerce platforms.
                    </p>
                    <p className="mt-6 text-gray-700 text-lg">
                        Proven ability to enhance app usability, ship production-grade code in React Native and React.js, and contribute to cross-functional teams at scale.
                    </p>
                    <p className="mt-6 text-gray-700 text-lg">
                        Adept at translating design systems into engaging, pixel-perfect user interfaces and optimizing code for speed and reliability.
                    </p>
                </div>
            </div>
            <div className='flex-1'>
                <div className="flex justify-center items-center">
                    <Image src={ProfilePicture} alt="ariq profile picture" width={300} height={300} className='rounded-full border-4 border-black' />
                </div>
            </div>
        </div>
    )
}

export default HomePage