'use client';

import { forwardRef } from 'react';

type SectionProps = {
  id: string;
};

const Education = forwardRef<HTMLElement, SectionProps>(({ id }, ref) => {
  return (
    <section
      id={id}
      ref={ref}
      className="card p-10 mt-10 scroll-mt-6"
    >
      <h2 className="text-3xl font-bold text-center font-(family-name:--font-poppins-bold)">Education</h2>

      <section className='mt-30 text-center'>
        <p className='text-xl font-bold'>Institut Teknologi Harapan Bangsa</p>
        <p>Bandung, Indonesia - ithb.ac.id</p>
        <p>🎓 B.S. in Information Systems, IT Infrastructure Management</p>
        <p>📈 GPA: 3.71 / 4.00 • 🗓️  June 2020</p>
      </section>

      {/* vertical line */}
      <div className='hidden rounded md:block w-1 bg-gray-300 h-20 mx-auto my-10'></div>

      <section className='text-center mb-30'>
        <p className='text-xl font-bold'>
          SMKN 4 Bandung
        </p>
        <p>
          🎓 Majored in Software Engineering
        </p>
        <p>
          🗓️  June 2016
        </p>
      </section>

    </section>
  );
});

Education.displayName = 'Education';

export default Education;