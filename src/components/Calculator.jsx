import React from "react";
import CalculatorButtons from "./CalculatorButtons";
import CalculatorHeader from "./CalculatorHeader";

export default function Calculator() {
  return (
    <main className="bg-stone-950 w-[350px] h-[650px] rounded-3xl border-stone-300 border-[6px] p-4 shadow-2xl">
      <section className="h-2/5 px-4 text-white">
        <CalculatorHeader/>
        <div className="h-5/6 flex justify-end items-end">
            <output className="text-6xl">0</output>
        </div>
      </section>
      <CalculatorButtons />
    </main>
  );
}
