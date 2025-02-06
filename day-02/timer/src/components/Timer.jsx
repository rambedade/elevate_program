import React, { useState, useEffect, useRef } from "react";

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const intervalRef=useRef(null)

    useEffect(() => {
        if (isActive) {
            intervalRef.current = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(intervalRef.current);
        }

        return () => clearInterval(intervalRef.current);
    }, [isActive, seconds]);

    const handleStart = () => {
        setIsActive(true);
    };

    const handlePause = () => {
        setIsActive(false);
    };

    const handleReset = () => {
        setSeconds(0);
        setIsActive(false);
    };

    const handleStop = () => {
        setIsActive(false);
        setSeconds(0);
    };

    return (
        <>
            <h1>time : {seconds}</h1>
            <button onClick={handleStart}>start</button>
            <button onClick={handlePause}>pause</button>
            <button onClick={handleReset}>reset</button>
            <button onClick={handleStop}>stop</button>
        </>
    );
};

export default Timer;