import React, { useState } from "react";
import Header from "../components/Header";

import depositeIcon from "../assets/depositeIcon.svg";
import withdrawIcon from "../assets/withdrawIcon.svg";
import settingsIcon from "../assets/settingsIcon.svg";
import verificationIcon from "../assets/verificationIcon.svg";
import bonusesIcon from "../assets/bonusesIcon.svg";
import mt5Icon from "../assets/mt5Icon.svg";
import transferIcon from "../assets/transferIcon.svg";
import historyIcon from "../assets/historyIcon.svg";
import partnerIcon from "../assets/partnerIcon.svg";
import exchangeIcon from "../assets/exchangeIcon.svg";
import analyticsIcon from "../assets/analyticsIcon.svg";
import downloadIcon from "../assets/downloadIcon.svg";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Dashboard() {
  const quickLinks = [
    {
      title: "Deposite",
      icon: depositeIcon,
    },
    {
      title: "Withdraw",
      icon: withdrawIcon,
    },
    {
      title: "Settings",
      icon: settingsIcon,
    },
    {
      title: "Verification",
      icon: verificationIcon,
    },
    {
      title: "Bonuses",
      icon: bonusesIcon,
    },
    {
      title: "MT5",
      icon: mt5Icon,
    },
    {
      title: "Transfer",
      icon: transferIcon,
    },
    {
      title: "History",
      icon: historyIcon,
    },
    {
      title: "Partner",
      icon: partnerIcon,
    },
    {
      title: "Exchange",
      icon: exchangeIcon,
    },
    {
      title: "Analytics",
      icon: analyticsIcon,
    },
  ];
  const chartData = [
    {
      month: "Jan",
      value: 750,
    },
    {
      month: "Feb",
      value: 450,
    },
    {
      month: "Mar",
      value: 1000,
    },
    {
      month: "Apr",
      value: 1400,
    },
    {
      month: "May",
      value: 500,
    },
    {
      month: "Jun",
      value: 750,
    },
    {
      month: "Jul",
      value: 400,
    },
    {
      month: "Aug",
      value: 1500,
    },
    {
      month: "Sep",
      value: 450,
    },
    {
      month: "Oct",
      value: 600,
    },
    {
      month: "Nov",
      value: 200,
    },
    {
      month: "Dec",
      value: 400,
    },
  ];
  const tradingAccounts = [
    {
      name: "Master Account",
      platform: "CTrader",
      id: "#273728",
      balance: 0.0,
    },
    {
      name: "Master Account",
      platform: "CTrader",
      id: "#273728",
      balance: 0.0,
    },
  ];
  const openTrades = [
    {
      currencyPair: "GBPUSD",
      position: "Long",
      decVal: 0.12,
      profit: +56.0,
    },
    {
      currencyPair: "USDJPY",
      position: "Long",
      decVal: 0.52,
      profit: -0.09,
    },
    {
      currencyPair: "EURUSD",
      position: "Short",
      decVal: 0.34,
      profit: -1.09,
    },
  ];
  return (
    <div className="w-10/12 text-right  absolute right-0 ">
      <Header title={"Dashboard"} />
      <main className="flex gap-6  text-center  w-12/12  ml-4 pr-2  ">

      <section className=" w-9/12 right-0 mt-4 ml-4 p-1 text-left">
        <div
          className=" p-2 border-2 border-[#f3f4f8] rounded-lg"
          id="quick-links"
        >
          <p className="">Quick Links</p>
          <div className="grid grid-cols-7 w-auto gap-2 m-2   items-center">
            {quickLinks.map((e) => (
              <div
                key={e.title}
                className="border border-gray-100  p-2   text-center"
              >
                <img
                  src={e.icon}
                  alt={e.title + "Icon"}
                  className="h-7 m-auto "
                />
                <p className="text-[#37414a] font-medium text-base mt-2">
                  {e.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4  p-2  border-2 border-[#f3f4f8] rounded-lg">
          <div className="flex justify-between items-center">
            <p>Overview</p>
            <div className="flex gap-1 px-4  text-[#AD8EDD] items-center">
              <img src={downloadIcon} alt="Download" className="h-6" />
              <p>Download Report</p>
            </div>
          </div>
          <br />
          <div className="flex gap-2 text-lg text-[#99a2b3]">
            <button>Monthly</button>
            <button className="bg-pink-100 px-4 rounded-lg text-[#1d2839]" > Yearly</button>
          </div>
          <div>
            <div className=" font-roboto mt-4 ">
              <BarChart
                width={800}
                height={300}
                data={chartData}
                margin={{
                  top: 5,
                  right: 0,
                  left: 0,
                  bottom: 0,
                }}
                barSize={25}
              >
                <XAxis
                  dataKey="month"
                  padding={{ left: 10, right: 10 }}
                  axisLine={false} // No line for X-axis
                  tick={{ fontSize: 12 }}
                  tickLine={false}
                />
                <YAxis
                  tickFormatter={(value) => `$${value}`}
                  axisLine={{ stroke: "#d1d5db", strokeWidth: 1 }} // Gray line for Y-axis
                  tick={{ fontSize: 15 }}
                  tickLine={false}
                />

                <Bar dataKey="value" fill="#AD8EDD" radius={[5, 5, 0, 0]} />
              </BarChart>
            </div>
          </div>
        </div>
      </section>





      <section className="  w-4/12 right-0 top-36 mr-4  mt-4  px-2  text-left">
        <section
          id="trading-accounts"
          className=" px-4  border-2 border-[#f3f4f8] rounded-lg"
        >
          <p className="font-medium text-lg text-[#364456]">Trading Accounts</p>
          <div className="pb-2">
            {tradingAccounts.map((e,i) => (
              <div
                key={e.id + i}
                className="mt-2  text-left border-2 border-[#f3f4f8] rounded-lg p-3 "
              >
                <p className="font-medium text-[#364456]">{e.name}</p>
                <div className="flex gap-2 mt-2">
                  <p className=" bg-[#f1f4f9] text-[#364456]  rounded-lg px-2 font-medium ">
                    {e.platform}
                  </p>
                  <p className="text-[#747474]">{e.id}</p>
                </div>
                <div className="flex justify-between items-center mt-2 text-[#344154]">
                  <p className="font-medium text-lg">
                    <span className="font-bold text-3xl mr-2">
                      {e.balance.toFixed(2)}
                    </span>
                    USD
                  </p>
                  <img
                    src={withdrawIcon}
                    alt="up-right-arrow"
                    className="h-7"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-2  px-4 pb-4 pt-2  border-2 border-[#f3f4f8] rounded-lg">
          <p className="font-medium text-lg text-[#364456]">Open Trades</p>
          <div>
            {openTrades.map(e=>(
              <div key={e.currencyPair} className="mt-2 p-2 border-2 border-[#f3f4f8] rounded-lg">
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <p className="font-medium text-[#657084]">{e.currencyPair}</p>
                      <p className={`px-2 rounded-lg  ${e.position == 'Long' ? 'bg-[#eaffee]' : 'bg-[#feeae9]'}`}>{e.position}</p>
                  </div>
                  <p className="text-[#657084]">{e.decVal}</p>
                </div>
                <p className='font-medium mt-2'><span className={`text-2xl font-bold mr-3 ${e.profit>0 ? 'text-[#15ae5c]' : "text-[#ec221e]"}`}>{e.profit>0 && '+'}{e.profit.toFixed(2)}</span>USD</p>
              </div>
            ))}
          </div>
        </section>
      </section>
      </main>


    </div>
  );
}

export default Dashboard;
