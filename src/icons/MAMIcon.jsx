import React from "react";

function MAMIcon({ fill }) {
  return (
    <svg
      className="h-8"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 3.26245L14.3438 6.3562V12.5437L9 15.6375L3.65625 12.5437V6.3562L9 3.26245ZM5.34031 6.68116L9.00006 8.79993L12.6597 6.68118L9 4.56239L5.34031 6.68116ZM4.78125 7.65743V11.8951L8.43756 14.0119V9.77423L4.78125 7.65743ZM9.56256 14.0118L13.2188 11.8951V7.65747L9.56256 9.77423V14.0118Z"
        fill={fill || "white"}
      />
    </svg>
  );
}

export default MAMIcon;
