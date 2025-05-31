

const SvgArrow = ({ className = "" }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      fill="none"
      
    >
      <path
        d="M6 1L12 7L6 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="4.62023"
      />
      <path
        d="M0 7L12 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="4.62023"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgArrow