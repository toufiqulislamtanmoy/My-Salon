"use client";
import { useState, useEffect } from "react";
import { GiBodySwapping } from "react-icons/gi";
import { PiNumberFiveBold } from "react-icons/pi";

const SerialContent = () => {
  const defaultDuration = 600; // 10 minutes in seconds
  const [timeLeft, setTimeLeft] = useState(defaultDuration);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => Math.max(prevTime - 1, 0)); // Ensures time doesn't go negative
      }, 1000);

      // Cleanup the interval on component unmount
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  // Function to format time into minutes and seconds
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <>
      <div className="bg-white shadow-2xl border border-red-100 px-5 py-1 mt-2 rounded-md flex items-center gap-6 justify-around">
        {/* serial number */}
        <p className="font-athletic text-5xl">01</p>
        {/* serial user information */}
        <div className="flex items-start gap-3">
          <img
            className="w-14 rounded-xl"
            src="https://picsum.photos/200"
            alt="The user photo"
          />
          <div>
            <p className="text-xl font-mono truncate">Toufiqul Islam Tanmoy</p>
            <address className="text-sm truncate">Nobogonga, Rajshahi</address>
          </div>
        </div>
        {/* countdown timer */}
        <div className="flex items-center gap-2">
          <p className="font-athletic text-3xl">{formatTime(timeLeft)}</p>
        </div>

        {/* action button */}
        <div className="flex items-center gap-5">
            {/* button for request to<GiBodySwapping /> the serial */}
            <button
              className=" bg-secondary px-5 py-1 rounded-md"
              onClick={() => setTimeLeft(defaultDuration)}
            >
             <GiBodySwapping />
            </button>
            <button
              className=" bg-secondary px-5 py-1 rounded-md"
              onClick={() => setTimeLeft(defaultDuration)}
            >
              <PiNumberFiveBold />
            </button>
        </div>
      </div>
      <div className="bg-white shadow-2xl border border-red-100 px-5 py-1 mt-2 rounded-md flex items-center gap-6 justify-around">
        {/* serial number */}
        <p className="font-athletic text-5xl">01</p>
        {/* serial user information */}
        <div className="flex items-start gap-3">
          <img
            className="w-14 rounded-xl"
            src="https://picsum.photos/200"
            alt="The user photo"
          />
          <div>
            <p className="text-xl font-mono truncate">Toufiqul Islam Tanmoy</p>
            <address className="text-sm truncate">Nobogonga, Rajshahi</address>
          </div>
        </div>
        {/* countdown timer */}
        <div className="flex items-center gap-2">
          <p className="font-athletic text-3xl">{formatTime(timeLeft)}</p>
        </div>

        {/* action button */}
        <div className="flex items-center gap-5">
            {/* button for request to<GiBodySwapping /> the serial */}
            <button
              className=" bg-secondary px-5 py-1 rounded-md"
              onClick={() => setTimeLeft(defaultDuration)}
            >
             <GiBodySwapping />
            </button>
            <button
              className=" bg-secondary px-5 py-1 rounded-md"
              onClick={() => setTimeLeft(defaultDuration)}
            >
              <PiNumberFiveBold />
            </button>
        </div>
      </div>
      <div className="bg-white shadow-2xl border border-red-100 px-5 py-1 mt-2 rounded-md flex items-center gap-6 justify-around">
        {/* serial number */}
        <p className="font-athletic text-5xl">01</p>
        {/* serial user information */}
        <div className="flex items-start gap-3">
          <img
            className="w-14 rounded-xl"
            src="https://picsum.photos/200"
            alt="The user photo"
          />
          <div>
            <p className="text-xl font-mono truncate">Toufiqul Islam Tanmoy</p>
            <address className="text-sm truncate">Nobogonga, Rajshahi</address>
          </div>
        </div>
        {/* countdown timer */}
        <div className="flex items-center gap-2">
          <p className="font-athletic text-3xl">{formatTime(timeLeft)}</p>
        </div>

        {/* action button */}
        <div className="flex items-center gap-5">
            {/* button for request to<GiBodySwapping /> the serial */}
            <button
              className=" bg-secondary px-5 py-1 rounded-md"
              onClick={() => setTimeLeft(defaultDuration)}
            >
             <GiBodySwapping />
            </button>
            <button
              className=" bg-secondary px-5 py-1 rounded-md"
              onClick={() => setTimeLeft(defaultDuration)}
            >
              <PiNumberFiveBold />
            </button>
        </div>
      </div>
      <div className="bg-white shadow-2xl border border-red-100 px-5 py-1 mt-2 rounded-md flex items-center gap-6 justify-around">
        {/* serial number */}
        <p className="font-athletic text-5xl">01</p>
        {/* serial user information */}
        <div className="flex items-start gap-3">
          <img
            className="w-14 rounded-xl"
            src="https://picsum.photos/200"
            alt="The user photo"
          />
          <div>
            <p className="text-xl font-mono truncate">Toufiqul Islam Tanmoy</p>
            <address className="text-sm truncate">Nobogonga, Rajshahi</address>
          </div>
        </div>
        {/* countdown timer */}
        <div className="flex items-center gap-2">
          <p className="font-athletic text-3xl">{formatTime(timeLeft)}</p>
        </div>

        {/* action button */}
        <div className="flex items-center gap-5">
            {/* button for request to<GiBodySwapping /> the serial */}
            <button
              className=" bg-secondary px-5 py-1 rounded-md"
              onClick={() => setTimeLeft(defaultDuration)}
            >
             <GiBodySwapping />
            </button>
            <button
              className=" bg-secondary px-5 py-1 rounded-md"
              onClick={() => setTimeLeft(defaultDuration)}
            >
              <PiNumberFiveBold />
            </button>
        </div>
      </div>
      <div className="bg-white shadow-2xl border border-red-100 px-5 py-1 mt-2 rounded-md flex items-center gap-6 justify-around">
        {/* serial number */}
        <p className="font-athletic text-5xl">01</p>
        {/* serial user information */}
        <div className="flex items-start gap-3">
          <img
            className="w-14 rounded-xl"
            src="https://picsum.photos/200"
            alt="The user photo"
          />
          <div>
            <p className="text-xl font-mono truncate">Toufiqul Islam Tanmoy</p>
            <address className="text-sm truncate">Nobogonga, Rajshahi</address>
          </div>
        </div>
        {/* countdown timer */}
        <div className="flex items-center gap-2">
          <p className="font-athletic text-3xl">{formatTime(timeLeft)}</p>
        </div>

        {/* action button */}
        <div className="flex items-center gap-5">
            {/* button for request to<GiBodySwapping /> the serial */}
            <button
              className=" bg-secondary px-5 py-1 rounded-md"
              onClick={() => setTimeLeft(defaultDuration)}
            >
              <GiBodySwapping />
            </button>
            <button
              className=" bg-secondary px-5 py-1 rounded-md"
              onClick={() => setTimeLeft(defaultDuration)}
            >
              <PiNumberFiveBold />
            </button>
        </div>
      </div>
      <div className="bg-white shadow-2xl border border-red-100 px-5 py-1 mt-2 rounded-md flex items-center gap-6 justify-around">
        {/* serial number */}
        <p className="font-athletic text-5xl">01</p>
        {/* serial user information */}
        <div className="flex items-start gap-3">
          <img
            className="w-14 rounded-xl"
            src="https://picsum.photos/200"
            alt="The user photo"
          />
          <div>
            <p className="text-xl font-mono truncate">Toufiqul Islam Tanmoy</p>
            <address className="text-sm truncate">Nobogonga, Rajshahi</address>
          </div>
        </div>
        {/* countdown timer */}
        <div className="flex items-center gap-2">
          <p className="font-athletic text-3xl">{formatTime(timeLeft)}</p>
        </div>

        {/* action button */}
        <div className="flex items-center gap-5">
            {/* button for request to<GiBodySwapping /> the serial */}
            <button
              className=" bg-secondary px-5 py-1 rounded-md"
              onClick={() => setTimeLeft(defaultDuration)}
            >
             <GiBodySwapping />
            </button>
            <button
              className=" bg-secondary px-5 py-1 rounded-md"
              onClick={() => setTimeLeft(defaultDuration)}
            >
              <PiNumberFiveBold />
            </button>
        </div>
      </div>
    </>
  );
};

export default SerialContent;
