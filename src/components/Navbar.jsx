import React, { useState } from "react";
import ditchDollar from "../assets/ditch-dollar.svg";



import DashboardIcon from '../icons/DashboardIcon'
import CRMIcon from '../icons/CRMIcon'
import MAMIcon from "../icons/MAMIcon";
import PAMMIcon from "../icons/PAMMIcon";
import TradeIcon from '../icons/TradeIcon'
import WalletIcon from '../icons/WallentIcon'
import AccountIcon from'../icons/AccountIcon';
import HistoryIcon from '../icons/HistoryIcon'

import NotificationIcon from '../icons/NotificationIcon'
import SettingsIcon from '../icons/SettingsIcon'
import HelpSupportIcon from '../icons/HelpSupportIcon'
import LogoutIcon from '../icons/LogoutIcon'

import humanIcon from "../assets/humanIcon.svg";



function Navbar() {
  const elements = [
    {
      title: "Dashboard",
      icon: DashboardIcon,
    },
    {
      title: "CRM",
      icon:CRMIcon,
    },
    {
      title: "MAMM",
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
  ]
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
    <div className="fixed h-screen w-2/12 bg-[#9b76d6]  text-center ">
      &nbsp;
      <img
        src={ditchDollar}
        alt="ditch-dollar"
        className="h-16 text-center  m-auto "
      />
      <div className=" mt-6 ml-4 text-white">
        {elements.map((e) => (
          <div
            key={e.title}
            className="flex my-1 gap-4 p-1  w-full items-center"
          >
            <e.icon />
            <h4 className="">{e.title}</h4>
          </div>
        ))}
      </div>
      <div className=" mt-12 ml-4 text-white">
        {options.map((e) => (
          <div
            key={e.title}
            className="flex my-1 gap-4 p-1  w-full items-center"
          >
            <e.icon/>
            <h4 className="">{e.title}</h4>
          </div>
        ))}
      </div>
      <hr />
      <div className=" truncate flex ml-4 mt-3 mr-2  gap-4   text-white  bottom-0 ">
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
