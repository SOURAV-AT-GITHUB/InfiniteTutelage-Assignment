import React from 'react'
import magnifier from "../assets/magnifier.svg";
import bell from "../assets/bell.svg";
function Header({title="Title"}) {
  return (
    <div
    id="top-secton"
    className="bg-[#fcfcfc] h-16 w-full border-b flex justify-between items-center px-8"
  >
    <h3 className="font-semibold text-lg">{(title.charAt(0).toUpperCase() + title.slice(1).toLowerCase())}</h3>
    <div className="flex gap-6">
      <div className="flex gap-2 items-center border rounded-lg px-1">
        <img src={magnifier} alt="magnifier" className=" w-5 font-bold" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent"
        />
      </div>
      <img src={bell} alt="bell-icon" className="h-9" />
    </div>
  </div>
  )
}

export default Header