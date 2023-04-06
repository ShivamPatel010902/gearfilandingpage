import React from "react";
import WaveAnimation from "./WaveAnimation";

export default function () {
  return (
    <>

      <section>
        {/*<WaveAnimation />*/}
        <div className="grid px-4 pt-20 pb-8 mx-auto lg:gap-12 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28 mb-5 ml-20">
          <div
            className="xl:pt-10 xl:pb-10 pt-20 pb-20  lg:col-span-12"
            style={{
              fontFamily: "Inter, Arial",
              fontWeight: "500",
              letterSpacing: "0.25rem",
              lineHeight: "2.46875rem",
              fontSize: "1.125rem",
            }}
          >
            <h
              className="max-w-2xl mb-4 text-4xl  leading-none tracking-tight md:text-5xl xl:text-6xl light:text-black"
              style={{
                fontFamily: "Inter, Arial",
                fontWeight: "500",
                letterSpacing: "0.3rem",
                lineHeight: "2.46875rem",
                fontSize: "2rem",
              }}
            >
              GEAR UP YOUR NFT PURCHASE
            </h>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-800 mt-4">
              Open source protocols for NFT financing{" "}
              <a href="https://tailwindcss.com" className="hover:underline"></a>{" "}
              <a
                href="https://flowbite.com/docs/getting-started/introduction/"
                className="hover:underline"
              ></a>{" "}
              <a
                href="https://flowbite.com/blocks/"
                className="hover:underline"
              ></a>
            </p>
            <div className="space-y-4 sm:flex sm:space-y-0 space-x-4">
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-lg font-medium text-center text-black border-2 border-black" style={{backgroundColor : "#7BAE7F"}}
              >
                Discord
              </a>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-lg font-medium text-center text-black bg-gradient-to-r from-green-100 to-purple-200 rounded-lg border-2 border-black"
              >
                Docs
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
