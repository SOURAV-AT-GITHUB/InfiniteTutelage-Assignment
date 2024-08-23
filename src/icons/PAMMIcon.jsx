import React from "react";

function PAMMIcon({ fill }) {
  return (
    <svg
      className="h-8"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 16.2C5.27198 16.2 2.25 13.178 2.25 9.44995C2.25 6.4273 4.23652 3.86905 6.975 3.0091V4.4428C5.81462 4.91398 4.85401 5.7737 4.25749 6.8749C3.66097 7.97611 3.4656 9.25036 3.7048 10.4797C3.944 11.709 4.60291 12.8171 5.56882 13.6142C6.53472 14.4114 7.74761 14.8482 9 14.85C10.0758 14.8499 11.1271 14.5287 12.0192 13.9274C12.9112 13.3261 13.6035 12.4721 14.0071 11.475H15.4409C14.5809 14.2134 12.0227 16.2 9 16.2ZM15.7163 10.125H8.325V2.7337C8.54708 2.71143 8.77253 2.69995 9 2.69995C12.728 2.69995 15.75 5.72193 15.75 9.44995C15.75 9.67743 15.7385 9.90288 15.7163 10.125ZM9.675 4.0918V8.77495H14.3582C14.2079 7.58534 13.6662 6.4795 12.8183 5.63163C11.9704 4.78377 10.8646 4.24205 9.675 4.0918Z"
        fill={fill || "white"}
      />
    </svg>
  );
}

export default PAMMIcon;
