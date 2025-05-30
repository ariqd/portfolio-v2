'use client';

import { forwardRef } from 'react';
import Image from 'next/image';
import simobiplus from '../public/simobiplus.png';
import lw from '../public/lw.png';
import sinarmas from '../public/sinarmas.png';
import urhub from '../public/urhub.png';
import bandungchoral from '../public/bandungchoral.png';
import vsp from '../public/vsp.png';

type SectionProps = {
    id: string;
};

const Experience = forwardRef<HTMLElement, SectionProps>(({ id }, ref) => {
    return (
        <section
            id={id}
            ref={ref}
            className="card"
        >
            <div className='flex justify-center'>
                <span className="heading">Experience</span>
            </div>

            <section className='experience-container'>
                <Image src={simobiplus} alt="simobiplus" width={500} />
                <div className='mt-10 md:mt-0'>
                    <h3 className="text-2xl font-bold">IT Developer</h3>
                    <p className='text-lg'>@ PT Citra Distribusi Indonesia (Mobius Digital)</p>
                    <p className='text-lg'>Jakarta, Indonesia. 2023 - 2025</p>
                    <ul className='mt-6 ml-10 text-lg text-gray-700 list-disc list-outside'>
                        <li>
                            Spearheaded UI revamp of Simobi+, PT Bank Sinarmas, Tbk digital banking app used by 1M+ users, boosting user engagement and retention.
                        </li>
                        <li>
                            Developed mission-critical features including Interbank Transfers and Loan Dashboards, contributing to a 20% increase in feature adoption.
                        </li>
                        <li>
                            Implemented Clevertap-based analytics, enabling data-driven decisions across product and marketing teams.
                        </li>
                        <li>Reduced crash rate by 15% through rigorous unit testing with Jest.</li>
                    </ul>
                </div>
            </section>

            <section className='experience-container'>
                <Image src={lw} width={700} alt="screenshot of little wallet website" className='order-1 border border-black lg:order-2' />
                <div className='order-2 mt-10 lg:order-1 md:mt-0'>
                    <h3 className="text-2xl font-bold">Frontend Web Engineer</h3>
                    <p className='text-lg'>@ Little Wallet</p>
                    <p className='text-lg'>Bandung, Indonesia. 2023</p>
                    <ul className='mt-6 ml-10 text-lg text-gray-700 list-disc list-outside'>
                        <li>
                            Launched Little Wallet’s marketing site (littlewallet.co) in under 4 weeks, driving a 30% increase in app downloads post-launch.
                        </li>
                        <li>
                            Streamlined event registration for 200+ teams via custom Google Apps Script automation, reducing admin time by 70%.
                        </li>
                    </ul>
                </div>
            </section>

            <section className='experience-container'>
                <Image src={sinarmas} alt="picture of bank sinarmas" width={500} />
                <div className='mt-10 md:mt-0'>
                    <h3 className="text-2xl font-bold">Section Head - Digital Banking Developer</h3>
                    <p className='text-lg'>@ PT Bank Sinarmas Tbk</p>
                    <p className='text-lg'>Jakarta, Indonesia. 2020 - 2023</p>
                    <ul className='mt-6 ml-10 text-lg text-gray-700 list-disc list-outside'>
                        <li>
                            Co-engineered new digital banking app with Sunline IDE, supporting thousands of daily transactions. Working remotely with teams from Indonesia and China.
                        </li>
                        <li>
                            Led redesign of Bill Payment UX, contributing to a 25% decrease in transaction drop-offs.
                        </li>
                        <li>
                            Mentored 10+ interns, leading to improved onboarding and productivity in the mobile team.
                        </li>
                    </ul>
                </div>
            </section>

            <section className='experience-container'>
                <Image src={urhub} width={700} alt="screenshot of UR Hub login page" className='order-1 border border-black lg:order-2' />
                <div className='order-2 mt-10 lg:order-1 md:mt-0'>
                    <h3 className="text-2xl font-bold">Full Stack Engineer</h3>
                    <p className='text-lg'>@ PT Rahmat Tuhan Lestari (UR – Easy & Quick Order)</p>
                    <p className='text-lg'>Bandung, Indonesia. 2020</p>
                    <ul className='mt-6 ml-10 text-lg text-gray-700 list-disc list-outside'>
                        <li>
                            Built 3 internal platforms from scratch, used by 10+ restaurants for sales analytics and subscription management.
                        </li>
                        <li>
                            Cut restaurant onboarding time by 40% through intuitive dashboards and guided workflows.            </li>
                    </ul>
                </div>
            </section>

            <section className='experience-container'>
                <div className='flex flex-col items-center'>
                    <Image width={500} src={bandungchoral} alt="screenshot of Bandung Choral Society website" className='border border-black' />
                    <p className='mt-6 text-lg font-bold text-center'>
                        Bandung Choral Society
                    </p>
                    <p className='mt-4 text-center'>
                        Website & registration system for  Bandung Choral Society events.
                    </p>
                </div>
                <div className='flex flex-col items-center mt-20 md:mt-0'>
                    <Image width={500} src={vsp} alt="screenshot of VSP website" className='border border-black' />
                    <p className='mt-6 text-lg font-bold text-center'>
                        Verry Sitorus & Partners
                    </p>
                    <p className='mt-4 text-center'>
                        Professional legal firm site.
                    </p>
                </div>
                <div className='flex-col flex-auto mt-20 mb-20 text-center md:mt-0 md:mb-0'>
                    <p className='text-lg italic'>
                        and more...
                    </p>
                </div>
            </section>
        </section>
    );
});

Experience.displayName = 'Experience';

export default Experience;