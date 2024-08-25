import React, { useContext } from "react";
import ditchDollar from "../assets/ditch-dollar.svg";
import DashboardIcon from "../icons/DashboardIcon";
import CRMIcon from "../icons/CRMIcon";
import MAMIcon from "../icons/MAMIcon";
import PAMMIcon from "../icons/PAMMIcon";
import TradeIcon from "../icons/TradeIcon";
import WalletIcon from "../icons/WallentIcon";
import AccountIcon from "../icons/AccountIcon";
import HistoryIcon from "../icons/HistoryIcon";
import NotificationIcon from "../icons/NotificationIcon";
import SettingsIcon from "../icons/SettingsIcon";
import HelpSupportIcon from "../icons/HelpSupportIcon";
import LogoutIcon from "../icons/LogoutIcon";
import humanIcon from "../assets/humanIcon.svg";
import { NavLink } from "react-router-dom";
import { smallScreenContext } from "../contexts/SmallScreenProvider";
function Navbar({ activePage = "/dashboard" }) {
  const { isOpen, setIsOpen } = useContext(smallScreenContext);
  if (activePage == "/") {
    activePage = "/dashboard";
  }
  const elements = [
    {
      title: "Dashboard",
      icon: DashboardIcon,
    },
    {
      title: "CRM",
      icon: CRMIcon,
    },
    {
      title: "MAM",
      icon: MAMIcon,
    },
    {
      title: "PAMM",
      icon: PAMMIcon,
    },
    {
      title: "Trade",
      icon: TradeIcon,
    },
    {
      title: "Wallet",
      icon: WalletIcon,
    },
    {
      title: "Account",
      icon: AccountIcon,
    },
    {
      title: "History",
      icon: HistoryIcon,
    },
  ];
  const options = [
    {
      title: "Notifications",
      icon: NotificationIcon,
    },
    {
      title: "Settings",
      icon: SettingsIcon,
    },
    {
      title: "Help & Support",
      icon: HelpSupportIcon,
    },
    {
      title: "Logout",
      icon: LogoutIcon,
    },
  ];
  return (
    <div
      className={` overflow-y-auto fixed h-screen bg-[#9b76d6]  text-center  ${
        isOpen
          ? "block min-[900px]:hidden  w-4/6  z-10 top-0 left-0 animate-slideInFromLeft"
          : "hidden min-[900px]:block  w-2/12  "
      }  `}
    >
      &nbsp;
      <img
        src={ditchDollar}
        alt="ditch-dollar"
        className="h-16 text-center  m-auto "
      />
      <div className=" mt-6 ml-4 text-white">
        {elements.map((e) => (
          <NavLink to={`/${e.title.toLowerCase()}`} key={e.title}>
            <div
              className={`flex  my-1 gap-4 p-1 -ml-1  w-full items-center ${
                activePage
                  ? activePage.includes(e.title.toLowerCase())
                    ? "text-[#BEFB7A] border-r-4 border-r-[#BEFB7A] bg-gradient-to-r from-transparent to-[#a2aba2]"
                    : ""
                  : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              <e.icon
                fill={
                  activePage
                    ? activePage.includes(e.title.toLowerCase()) && "#BEFB7A"
                    : ""
                }
                height={8}
              />
              <h4 className="">{e.title}</h4>
            </div>
          </NavLink>
        ))}
      </div>
      <div className=" mt-12 ml-4 text-white">
        {options.map((e) => (
          <div
            key={e.title}
            className="flex my-1 gap-4 p-1  w-full items-center"
          >
            <e.icon />
            <h4>{e.title}</h4>
          </div>
        ))}
      </div>
      <hr />
      <div className=" truncate flex ml-2 sm:ml-4 mt-1 mr-2  gap-2   text-white  bottom-0 ">
        <img src={humanIcon} alt="Human-Icon" />
        <div className="  truncate ">
          <p className="font-semibold">Shyam Shakur</p>
          <p className="truncate">&nbsp;shyam01.shankur@masaischool.com</p>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
