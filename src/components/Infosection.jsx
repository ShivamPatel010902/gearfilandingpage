import React from "react";

export default function Infosection() {
  return (
    <>
      <section className="bg-white w-full mb-20 md:mt-80 mt-40">
        <div className="m-10 rounded-2xl flex flex-row justify-evenly" style={{height : "400px"}}>
          <div className="flex md:flex-row flex-col w-full">
            <div className="md:w-1/2 w-full md:h-ful h-full flex flex-row justify-center items-center">
              <img
                src="/assets/img/info2.jpeg"
                className="h-full w-full"
                alt=""
              />
            </div>
            <div className="md:w-1/2 w-full flex flex-col" style={{backgroundColor : "#7BAE7F"}}>
              <div className="h-3/4 text-start mt-5 flex flex-row justify-center items-center">
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
