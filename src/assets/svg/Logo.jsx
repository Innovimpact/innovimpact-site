import * as React from "react";

function SvgComponent(props) {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path d="M40,150 L90,40 Q100,20 110,40 L160,130" fill="none" stroke="#00AEEF" stroke-width="20" stroke-linecap="round" />
      <line x1="110" y1="40" x2="135" y2="80" stroke="#00AEEF" stroke-width="6" />
      <line x1="120" y1="55" x2="145" y2="95" stroke="#00AEEF" stroke-width="6" />
      <circle cx="135" cy="80" r="6" fill="#00AEEF" />
      <circle cx="145" cy="95" r="6" fill="#00AEEF" />
    </svg>

  );
}

export default SvgComponent;
