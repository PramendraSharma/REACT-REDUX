import { useEffect } from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


function ClockTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <p className="newlead fw-bolder">
        This is the current time: {time.toLocaleDateString()} -{" "}
        {time.toLocaleTimeString()}
      </p>
    </>
  );
}

export default ClockTime;
