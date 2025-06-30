import * as React from "react";

function BotIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 64 64" {...props}>
      <rect width="64" height="64" rx="12" fill="#4cd5c5" />
      <g fill="#0b093b">
        <circle cx="22" cy="26" r="4" />
        <circle cx="42" cy="26" r="4" />
        <rect x="20" y="38" width="24" height="6" rx="3" />
        <path d="M32 10a2 2 0 012 2v4h-4v-4a2 2 0 012-2z" />
        <path d="M16 20c0-4 4-6 8-6h16c4 0 8 2 8 6v20H16V20z" fill="none" stroke="#0b093b" strokeWidth="2" />
      </g>
    </svg>
  );
}

export default BotIcon;
