import React from "react";

function AccountIcon({ fill }) {
  return (
    <svg className="h-8"  viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 16.2C5.27198 16.2 2.25 13.178 2.25 9.44995C2.25 5.72193 5.27198 2.69995 9 2.69995C12.728 2.69995 15.75 5.72193 15.75 9.44995C15.75 13.178 12.728 16.2 9 16.2ZM9 14.85C10.4322 14.85 11.8057 14.281 12.8184 13.2683C13.8311 12.2556 14.4 10.8821 14.4 9.44995C14.4 8.01778 13.8311 6.64427 12.8184 5.63157C11.8057 4.61888 10.4322 4.04995 9 4.04995C7.56783 4.04995 6.19432 4.61888 5.18162 5.63157C4.16893 6.64427 3.6 8.01778 3.6 9.44995C3.6 10.8821 4.16893 12.2556 5.18162 13.2683C6.19432 14.281 7.56783 14.85 9 14.85ZM6.6375 10.8H10.35C10.4395 10.8 10.5254 10.7644 10.5886 10.7011C10.6519 10.6378 10.6875 10.552 10.6875 10.4625C10.6875 10.3729 10.6519 10.2871 10.5886 10.2238C10.5254 10.1605 10.4395 10.125 10.35 10.125H7.65C7.20245 10.125 6.77322 9.94716 6.45676 9.63069C6.14029 9.31423 5.9625 8.885 5.9625 8.43745C5.9625 7.9899 6.14029 7.56068 6.45676 7.24421C6.77322 6.92774 7.20245 6.74995 7.65 6.74995H8.325V5.39995H9.675V6.74995H11.3625V8.09995H7.65C7.56049 8.09995 7.47464 8.13551 7.41135 8.1988C7.34806 8.2621 7.3125 8.34794 7.3125 8.43745C7.3125 8.52696 7.34806 8.61281 7.41135 8.6761C7.47464 8.73939 7.56049 8.77495 7.65 8.77495H10.35C10.7976 8.77495 11.2268 8.95274 11.5432 9.26921C11.8597 9.58568 12.0375 10.0149 12.0375 10.4625C12.0375 10.91 11.8597 11.3392 11.5432 11.6557C11.2268 11.9722 10.7976 12.15 10.35 12.15H9.675V13.5H8.325V12.15H6.6375V10.8Z"
        fill={fill || "white"}
      />
    </svg>
  );
}

export default AccountIcon;
