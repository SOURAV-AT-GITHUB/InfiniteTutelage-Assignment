import React, { useContext, useState } from "react";
import magnifier from "../assets/magnifier.svg";
import bell from "../assets/bell.svg";
import { Icon, useMediaQuery } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Navbar from "./Navbar";
import { smallScreenContext } from "../contexts/SmallScreenProvider";
function Header({ title = "Title", activePage }) {
  const [isMaxWidth900] = useMediaQuery("(min-width: 900px)");
  const { isOpen, setIsOpen } = useContext(smallScreenContext);
  const toCapital = ["CRM", "MAM", "PAMM"];
  return (
    <div
      id="header"
      className={`fixed top-0  ${
        isOpen ? "justify-end " : "justify-between right-0"
      } z-10  bg-[#fcfcfc] h-16 w-screen min-[900px]:w-10/12  border-b flex items-center px-4 sm:px-8 `}
    >
      {!isMaxWidth900 &&
        (isOpen ? (
          <p
            className="bg-red-100 py-1 px-5  rounded-md animate-slideInFromLeft"
            onClick={() => setIsOpen(false)}
          >
            Close
          </p>
        ) : (
          <Icon
            as={HamburgerIcon}
            onClick={() => setIsOpen(true)}
            ml={isOpen ? "5em" : ""}
            fontSize={"1.4rem"}
          />
        ))}

      {isOpen && <Navbar activePage={activePage} />}
      {!isOpen && (
        <>
          <h3 className="font-semibold text-lg">
            {toCapital.includes(title.toUpperCase())
              ? title.toUpperCase()
              : title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()}
          </h3>
          <div className="flex gap-0 justify-evenly  sm:justify-between w-2/4">
            <div className="flex gap-0 items-center border rounded-lg px-1  sm:w-auto">
              <img src={magnifier} alt="magnifier" className=" w-5 font-bold" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent w-full"
              />
            </div>
            <img src={bell} alt="bell-icon" className="h-9" />
          </div>
        </>
      )}
    </div>
  );
}

export default Header;
