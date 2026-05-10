export function Logo({ className }: { className?: string }) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="SR Logo"
    >
      {/* Background square with rounded corners */}
      <rect width="36" height="36" rx="8" fill="var(--accent)" />

      {/* S letterform */}
      <path
        d="M8 11.5C8 10.1 9.1 9 10.5 9H16C17.4 9 18.5 10.1 18.5 11.5V13C18.5 14.4 17.4 15.5 16 15.5H11.5C10.1 15.5 9 16.6 9 18V19C9 20.4 10.1 21.5 11.5 21.5H17C18.4 21.5 19.5 20.4 19.5 19V17"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* R letterform */}
      <path
        d="M22 9H26.5C27.9 9 29 10.1 29 11.5V13C29 14.4 27.9 15.5 26.5 15.5H22V27"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 15.5L28.5 27"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
