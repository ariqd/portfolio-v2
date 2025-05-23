import Image from "next/image";
import ProfilePicture from '../public/profile-picture.png';
import { forwardRef } from "react";

type SectionProps = {
    id: string;
};

const HomePage = forwardRef<HTMLElement, SectionProps>(({ id }, ref) => {
    return (
        <section
            id={id}
            ref={ref}
            className="flex items-center justify-center px-4 py-16 md:px-32 grow"
        >
            <div className='flex flex-col items-center justify-center gap-12 md:flex-row'>
                <div className=''>
                    <Image src={ProfilePicture} alt="ariq profile picture" className='w-64 border-gray-100 rounded-full border-6' />
                </div>
                <div className=''>
                    <h1 className="text-6xl font-bold text-gray-800">
                        Hi, I’m Ariq
                    </h1>
                    <div className="mt-6">
                        <p className="text-lg leading-relaxed">
                            Engineer with over 5+ YoE building fast, reliable, and user-focused digital products in banking, edutech and e-commerce.
                        </p>
                        {/* <p className="mt-6 text-lg text-gray-700">
                            I’m a Frontend and Mobile Engineer with over 5 years of experience building fast, reliable, and user-focused digital products—mostly in banking, edutech and e-commerce.
                        </p>
                        <p className="mt-6 text-lg text-gray-700">
                            I’m passionate about crafting smooth, scalable experiences using React Native and React.js, and I love collaborating with teams to turn complex problems into elegant, intuitive interfaces.
                        </p>
                        <p className="mt-6 text-lg text-gray-700">
                            From translating design systems into pixel-perfect UIs to fine-tuning performance, I’m all about creating products that feel as good as they look.
                        </p> */}
                    </div>
                </div>
            </div>
        </section>
    )
});

HomePage.displayName = 'HomePage';

export default HomePage