import React from "react";

export default function Moreinfosection() {
  return (
    <>
      <div
        className=" md:w-200 m-5 rounded-2xl "
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="flex flex-row justify-center mt-5 mb-5">
          <h1
            className=" text-4xl font-extrabold p-2"
            style={{ fontFamily: "Monoton" }}
          >
            Buy Now Pay Later
          </h1>
        </div>
        <div className="flex md:flex-row flex-col p-10 ">
          <div className="md:w-1/2 w-full md:h-auto flex justify-center">
            <img
              src="https://www.gearfi.in/assets/img/NFTs2.png"
              className="h-96 w-94 border-2 border-black"
              alt=""
            />
          </div>
          <div className="md:w-1/2 w-full flex flex-col md:m-3 mt-2">
            <div className="h-3/4 p-3 text-start mt-5">
            <h1
            className=" text-4xl font-extrabold p-2 mb-8"
            style={{ fontFamily: "Monoton" }}
          >
            Buyer
          </h1>
              <ul className="list-decimal">
                <li>
                  Lorem ipsum dolor sit amet consectetur
                  ipsam sequi eum dicta consequa
                  <br/><br/>
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br/><br/>
                  </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
              </ul>
            </div>
            <div className="md:h-1/4 h-20">
              <div className="h-3/4 p-2 flex flex-row">
                <button className="ml-4 text-black font-medium text-lg px-4 lg:px-5 py-3 lg:py-3 sm:mr-2 lg:mr-0 border-2 bg-green-200 border-black">
                  Open App
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col p-10 ">
          <div className="md:w-1/2 w-full flex flex-col md:m-3 mt-2">
            <div className="h-3/4 p-3 text-start mt-5">
              <h1
                className=" text-4xl font-extrabold p-2 mb-8"
                style={{ fontFamily: "Monoton" }}
              >
                Seller
              </h1>
              <ul className="list-decimal">
                <li>
                  Lorem ipsum dolor sit amet consectetur
                  <br/><br/>
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  <br/><br/>
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                
                </li>
              </ul>
            </div>
            <div className="md:h-1/4 h-20">
              <div className="h-3/4 p-2 flex flex-row">
                <button className="ml-4 text-black font-medium text-lg px-4 lg:px-5 py-3 lg:py-3 sm:mr-2 lg:mr-0 bg-purple-200 border-2 border-black">
                  Open App
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full md:h-auto flex justify-center">
            <img
              src="/assets/img/logo.jpeg"
              className="h-96 w-94 border-2 border-black"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
