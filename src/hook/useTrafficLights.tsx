import { useEffect, useState } from "react";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};

type TrafficLightColor = keyof typeof colors;

export const useTrafficLights = () => {
  const [light, setLight] = useState<TrafficLightColor>("red");
  const [countdown, setCountdown] = useState<number>(5);

  // Effect to change the light color when countdown reaches 0
  useEffect(() => {
    if (countdown === 0) return;

    const intervalId = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      console.log("cleanup");
      clearInterval(intervalId);
    };
  }, [countdown]);

  // Effect to switch lights and reset countdown
  useEffect(() => {
    if (countdown > 0) return;

    const nextLight =
      light === "red" ? "green" : light === "green" ? "yellow" : "red";
    setLight(nextLight);
    setCountdown(5);
  }, [countdown, light]);

  return {
    // properties
    light,
    countdown,
    colors,
    //Computed
    percent: (countdown / 5) * 100,
    redLight: light === "red" ? colors[light] : "bg-gray-500",
    yellowLight: light === "yellow" ? colors[light] : "bg-gray-500",
    greenLight: light === "green" ? colors[light] : "bg-gray-500",
    //methods
  };
};
