import { memo, SVGProps } from 'react';

const MailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M16 17L4 17C3.172 17 2.5 16.328 2.5 15.5L2.5 5.5C2.5 4.672 3.172 4 4 4L16 4C16.828 4 17.5 4.672 17.5 5.5L17.5 15.5C17.5 16.328 16.828 17 16 17Z'
      stroke='#171A1F'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M4.5 7L10 11.5L15.5 7' stroke='#171A1F' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(MailIcon);
export { Memo as MailIcon };
