import rede from "../assets/image/sinal-de-rede.png";
import wifi from "../assets/image/sinal-wifi.png";
import bateria from "../assets/image/bateria-cheia.png";
import React from "react";

export default function CalculatorHeader() {
  return (
    <header className="flex items-center justify-between h-1/6">
      <div>
        <time datetime="" className="font-medium">19:27</time>
        {/* deixar horário em tempo real */}
      </div>
      <div className="flex gap-2">
        <img src={rede} alt="rede" />
        <img src={wifi} alt="wifi" />
        <img src={bateria} alt="bateria" />
      </div>
    </header>
  );
}