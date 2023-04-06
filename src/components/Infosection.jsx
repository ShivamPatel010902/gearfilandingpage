import React from "react";

export default function Infosection() {
  return (
    <>
      <section className="bg-white w-full mb-20 mt-20">
        <div className="m-10 bg-gradient-to-r from-green-100 to-purple-200 p-8 h-1/4 rounded-2xl flex flex-col justify-evenly">
          <div className="flex md:flex-row flex-col p-10 ">
            <div className="md:w-1/2 w-full md:h-full h-96 w-94 bg-gray-200 border-2xl border-black">
              {/* <img
              src="https://www.gearfi.in/assets/img/NFTs2.png"
              className="h-96 w-94 border-2 border-black"
              alt=""
            /> */}
            </div>
            <div className="md:w-1/2 w-full flex flex-col md:m-3 mt-2">
              <div className="h-3/4 p-3 text-start mt-5">
                <p className=" text-center text-2xl">
                  We are on a mission to boost the NFT Ecosystem by increasing
                  the buying potential of users
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
