'use client';

import Image from 'next/image';
import { forwardRef } from 'react';
import gmail from '../public/gmail.png';
import linkedin from '../public/linkedin.png';
import github from '../public/github.png';

type SectionProps = {
    id: string;
};

const Contact = forwardRef<HTMLElement, SectionProps>(({ id }, ref) => {
    return (
        <section
            id={id}
            ref={ref}
            className="card gap-12 md:gap-0"
        >
            <div className='flex justify-center'>
                <span className="heading">Say hi!</span>
            </div>

            <section className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 grow text-center'>
                <div className=''>
                    <p className='text-3xl font-bold md:text-right'>
                        Wanna get in touch?
                    </p>
                    <p className='text-lg mt-4 md:text-right'>
                        I am always available for exciting discussions.
                    </p>
                </div>
                <div className='flex flex-col gap-10'>
                    <div className='text-lg flex flex-col gap-4 items-center md:items-start'>
                        <Image src={gmail} alt="gmail" width={50} />
                        <a href='mailto:ariqdaffaathallah@gmail.com' target="_blank" rel="noopener noreferrer" className='underline'>ariqdaffaathallah@gmail.com</a>
                    </div>

                    <div className='text-lg flex flex-col gap-4 items-center md:items-start'>
                        <Image src={linkedin} alt="linkedin" width={50} />
                        <a href="https://www.linkedin.com/in/ariqd" target="_blank" rel="noopener noreferrer" className='underline'>linkedin.com/in/ariqd</a>
                    </div>

                    <div className='text-lg flex flex-col gap-4 items-center md:items-start'>
                        <Image src={github} alt="Github" width={50} className='border border-black rounded-full' />
                        <a href="https://www.github.com/ariqd" target="_blank" rel="noopener noreferrer" className='underline'>github.com/ariqd</a>
                    </div>
                </div>

            </section>

        </section>
    );
});

Contact.displayName = 'Contact';

export default Contact;