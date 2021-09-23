import React from "react";
import ilustration from "./images/illustration-hero.svg";
import icon from "./images/icon-music.svg";

function App() {
  return (
    <div className=" bg-primary flex h-screen justify-center items-center">
      <div className=" max-w-sm rounded-3xl overflow-hidden sm: w-11/12 m-auto ">
        <img className="w-full" src={ilustration} alt="ilustration" />
        <div className=" bg-third p-8">
          <h1 className=" text-xl text-darkBlue   mb-2 text-center">
            Order Summary
          </h1>
          <p className="text-center text-four mb-5 ">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>

          <div className=" bg-opacity-5 bg-four flex items-center p-3 rounded-md mb-5">
            <img src={icon} alt="icon-music" />
            <div className="ml-4 mr-auto">
              <h2 className=" text-darkBlue  ">Annual Plan</h2>
              <span className="text-four font-thin">$59.99/year</span>
            </div>
            <a
              href="/"
              className="underline text-secondary text-sm transition duration-150 ease-in-out hover:text-opacity-90 hover:no-underline"
            >
              Change
            </a>
          </div>

          <button className="text-center text-third w-full p-4 bg-secondary shadow-2xl rounded-xl transition duration-150 ease-in-out hover:bg-opacity-60">
            Proceed to Payment
          </button>
          <button className="text-center text-four opacity-75 mt-5 w-full transition duration-150 ease-in-out  hover:opacity-100 hover:text-darkBlue">
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
