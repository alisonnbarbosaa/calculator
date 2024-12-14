import React from "react";
import { useState } from "react";
import { evaluate } from "mathjs";
import CalculatorButtons from "./CalculatorButtons";
import CalculatorHeader from "./CalculatorHeader";

export default function Calculator() {

  const [equal, setEqual] = useState('')

  const handleClear =  ()=>{
    setEqual('')
  }

  const handleButtonClick = (value)=>{
    setEqual((prevInput) => prevInput + value);
  }

  const handleEqual = ()=>{
    if(equal){
      try {
      setEqual(evaluate(equal))
    } catch {
      setEqual('Erro')
    }
  }
  }

  const handleToggleSign = () => {
    if (equal) {
      try {
        const toggled = String(-1 * parseFloat(equal)); // Inverte o sinal
        setEqual(toggled);
      } catch {
        setEqual("Erro");
      }
    }
  };

  const handleDelete = () => {
    if (equal.length > 0) {
      setEqual(equal.slice(0, -1));
    } 
  };

  return (
    <main className="bg-stone-950 w-[340px] h-[680px] rounded-3xl border-stone-300 border-[6px] p-4 shadow-2xl">
      <section className="h-2/5 px-4 text-stone-50">
        <CalculatorHeader/>
        <div className="h-5/6 flex justify-end items-end">
            <output className="text-6xl pb-6">{equal}</output>
        </div>
      </section>
      <CalculatorButtons 
      onClear={handleClear}
      onButtonClick={handleButtonClick}
      onEqual={handleEqual}
      onDelete={handleDelete}
      onToggleSign={handleToggleSign}
      />
    </main>
  );
}
