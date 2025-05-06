import Image from "next/image";
import ProfilePicture from '../../public/profile-picture.png';
import { forwardRef } from "react";

type SectionProps = {
    id: string;
};

const HomePage = forwardRef<HTMLElement, SectionProps>(({ id }, ref) => {
    return (
        <section
            id={id}
            ref={ref}
            className="scroll-mt-4"
        >
            <div className='card md:flex md:justify-between md:items-center px-12 py-20'>
                <div className='flex-1 md:order-2'>
                    <div className="flex justify-center items-center">
                        <Image src={ProfilePicture} alt="ariq profile picture" width={250} height={250} className='rounded-full border-6 border-gray-400' />
                    </div>
                </div>
                <div className='flex-2 md:order-1 mt-10 md:mt-0'>
                    <h1 className="text-5xl font-bold">
                        Hi, I’m Ariq
                    </h1>
                    <div className="mt-10">
                        <p className="mt-6 text-gray-700 text-lg">
                            I’m a Frontend and Mobile Engineer with over 5 years of experience building fast, reliable, and user-focused digital products—mostly in banking, edutech and e-commerce.
                        </p>
                        <p className="mt-6 text-gray-700 text-lg">
                            I’m passionate about crafting smooth, scalable experiences using React Native and React.js, and I love collaborating with teams to turn complex problems into elegant, intuitive interfaces.
                        </p>
                        <p className="mt-6 text-gray-700 text-lg">
                            From translating design systems into pixel-perfect UIs to fine-tuning performance, I’m all about creating products that feel as good as they look.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
});

HomePage.displayName = 'HomePage';

export default HomePage