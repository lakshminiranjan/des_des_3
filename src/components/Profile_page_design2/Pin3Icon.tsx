import { memo, SVGProps } from 'react';

const Pin3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M15.5 8.5C15.5 13 10 18 10 18C10 18 4.5 13 4.5 8.5C4.5 7.04131 5.07946 5.64236 6.11091 4.61091C7.14236 3.57946 8.54131 3 10 3C11.4587 3 12.8576 3.57946 13.8891 4.61091C14.9205 5.64236 15.5 7.04131 15.5 8.5Z'
      stroke='#171A1F'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M10 11C11.3807 11 12.5 9.88071 12.5 8.5C12.5 7.11929 11.3807 6 10 6C8.61929 6 7.5 7.11929 7.5 8.5C7.5 9.88071 8.61929 11 10 11Z'
      stroke='#171A1F'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(Pin3Icon);
export { Memo as Pin3Icon };
