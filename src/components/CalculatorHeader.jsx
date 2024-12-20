import rede from "../assets/image/sinal-de-rede.png";
import wifi from "../assets/image/sinal-wifi.png";
import bateria from "../assets/image/bateria-cheia.png";
import { useState, useEffect } from "react";

export default function CalculatorHeader() {
  const [time, setTime] = useState(new Date());

  //Obtém horário em tempo real
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <header className="flex items-center justify-between h-1/6">
      <div>
        <time className="font-medium text-stone-50">
          {time.toLocaleTimeString()}
        </time>
      </div>
      <div className="flex gap-2">
        <img src={rede} alt="rede" />
        <img src={wifi} alt="wifi" />
        <img src={bateria} alt="bateria" />
      </div>
    </header>
  );
}
