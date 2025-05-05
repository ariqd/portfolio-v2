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
      className="h-screen border-b p-10"
    >
      <h2 className="text-3xl font-bold">Education</h2>
    </section>
  );
});

Education.displayName = 'Education';

export default Education;