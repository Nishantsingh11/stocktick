import React from "react";
import { useState } from "react";
import { MdOutlineArrowDropDown, MdArrowDropUp } from "react-icons/md";

const DropDownNavbar = () => {
  const [futurOpen, setFuturOpen] = useState(false);
  const [option, setOption] = useState(false);
  const [strategy, setStrategy] = useState(false);
  const [backtest, setBacktest] = useState(false);

  return (
    <div className="container mx-auto border-2px border-neutral-800 shadow-2xl">
      <div className="flex">
        <div className="items-forfuture">
          <button
            href="@"
            onClick={() => setFuturOpen((prev) => !prev)}
            className="flex m-3  hover:bg-slate-200 p-2 rounded-md"
          >
            Futur
            {!futurOpen ? (
              <MdOutlineArrowDropDown className="mt-1" />
            ) : (
              <MdArrowDropUp className="mt-1" />
            )}
          </button>
          {futurOpen && (
            <ul className="absolute border-2 shadow-2xl mt-2">
              <li>
                <a href="@">FUture analysis</a>
              </li>
              <li>
                <a href="@"> Long VS Short </a>
              </li>
              <li>
                <a href="@">Price VS OI</a>
              </li>
            </ul>
          )}
        </div>
        <div className="Option">
          <button
            onClick={() => setOption((prev) => !prev)}
            className=" flex m-3  hover:bg-slate-200 p-2 rounded-md"
          >
            Options
            {!option ? (
              <MdOutlineArrowDropDown className="mt-1" />
            ) : (
              <MdArrowDropUp className="mt-1" />
            )}
          </button>
          {option && (
            <ul className="absolute border-2 shadow-2xl mt-2">
              <li>
                <a href="@"> OPtions </a>
              </li>
              <li>
                <a href="@"> OPtions </a>
              </li>
              <li>
                <a href="@"> OPtions </a>
              </li>
              <li>
                <a href="@"> OPtions </a>
              </li>
              <li>
                <a href="@"> OPtions </a>
              </li>
              <li>
                <a href="@"> OPtions </a>
              </li>
              <li>
                <a href="@"> OPtions </a>
              </li>
              <li>
                <a href="@"> OPtions </a>
              </li>
            </ul>
          )}
        </div>
        <div className="Strategy">
          <button
            href="@"
            onClick={() => setStrategy((prev) => !prev)}
            className="flex m-3 hover:bg-slate-200 p-2 rounded-md"
          >
            Strategy
            {!strategy ? (
              <MdOutlineArrowDropDown className="mt-1" />
            ) : (
              <MdArrowDropUp className="mt-1" />
            )}
          </button>
          {strategy && (
          <ul className="absolute border-2 shadow-2xl mt-2">
            <li>
              <a href="@">Strategy</a>
            </li>
            <li>
              <a href="@">Strategy</a>
            </li>
            <li>
              <a href="@">Strategy</a>
            </li>
            <li>
              <a href="@">Strategy</a>
            </li>
          </ul>
          )}
        </div>
        <div className="Backtest">
          <button
            href="@" onClick={() => setBacktest((prev) => !prev)}
            className="flex m-3 hover:bg-slate-200 p-2 rounded-md"
          >
            BackTest
            {!backtest ? (
              <MdOutlineArrowDropDown className="mt-1" />
            ) : (
              <MdArrowDropUp className="mt-1" />
            )
              }
          </button>
          {backtest && (
            <ul className="absolute border-2 shadow-2xl mt-2">
            <li>
              <a href="@">BackTest</a>
            </li>
          </ul>
          )}
        </div>
        </div>
    </div>
    );
};

export default DropDownNavbar;
