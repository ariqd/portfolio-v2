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
            className="card p-10 mt-10 scroll-mt-6"
        >
            <div className='flex justify-center'>
                <span className="heading">Say hi!</span>
            </div>

            <section className='py-30 md:flex justify-center items-center gap-20'>
                <div className=''>
                    <p className='text-3xl font-bold md:text-right'>
                        Wanna get in touch?
                    </p>
                    <p className='text-lg mt-4 md:text-right'>
                        I am always available for exciting discussions.
                    </p>
                </div>
                <div>
                    <p className='text-lg mt-10 flex items-center gap-6'>
                        <Image src={gmail} alt="gmail" width={50} />
                        <span>ariqdaffaathallah@gmail.com</span>
                    </p>

                    <p className='text-lg mt-10 flex items-center gap-6'>
                        <Image src={linkedin} alt="linkedin" width={50} />
                        <a href="https://www.linkedin.com/in/ariqd" target="_blank" rel="noopener noreferrer" className='underline'>linkedin.com/in/ariqd</a>
                    </p>

                    <p className='text-lg mt-10 flex items-center gap-6'>
                        <Image src={github} alt="Github" width={50} />
                        <a href="https://www.github.com/ariqd" target="_blank" rel="noopener noreferrer" className='underline'>github.com/ariqd</a>
                    </p>
                </div>

            </section>

        </section>
    );
});

Contact.displayName = 'Contact';

export default Contact;