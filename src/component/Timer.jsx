import React, { useRef, useState, useEffect } from "react";

const Timer = () => {
  const Ref = useRef(null);

  // The state for our timer
  const [timer, setTimer] = useState("20:00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    //const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,

      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    setTimer("20:00");

    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    deadline.setSeconds(deadline.getMinutes() + 1200);
    return deadline;
  };

  // useEffect(() => {
  //   clearTimer(getDeadTime());
  // }, []);

  const startTime = () => {
    clearTimer(getDeadTime());
  };

  const onClickReset = () => {
    clearTimer(getDeadTime());
  };

  return (
    <div className=" mx-auto w-2/3 mt-10 rounded-md border border-transparent  py-3 h-80 bg-gradient-to-r  from-cyan-400 to-blue-400">
      <div className="mt-16">
        <h2 className="font-sans font-bold  text-7xl text-cyan-50 text-center">
          {timer}
        </h2>
        <div className="mt-10 flex align-middle justify-center ">
          <button
            onClick={startTime}
            className="text-center rounded-md border w-36  py-3 px-3 font-semibold mr-3"
          >
            Start
          </button>

          <button
            onClick={onClickReset}
            className="text-center rounded-md border w-36  py-3 px-3 font-semibold"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
