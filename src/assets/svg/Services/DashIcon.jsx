import * as React from "react";

function EmailExcelIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 64 64" {...props}>
      <rect width="64" height="64" rx="12" fill="#4cd5c5" />
      <g fill="#0b093b">
        <path d="M16 20h32v24H16z" fill="none" stroke="#0b093b" strokeWidth="2" />
        <path d="M16 20l16 12 16-12" fill="none" stroke="#0b093b" strokeWidth="2" />
        <rect x="22" y="28" width="6" height="10" rx="1" />
        <rect x="32" y="28" width="10" height="10" rx="1" />
      </g>
    </svg>
  );
}

export default EmailExcelIcon;
