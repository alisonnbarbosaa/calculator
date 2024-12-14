import React from "react";
import btdelete from "../assets/image/delete.png";

export default function CalculatorButtons({
  onButtonClick,
  onClear,
  onEqual,
  onDelete,
  onToggleSign,
}) {
  return (
    <section className="h-3/5 text-2xl flex flex-wrap justify-between items-center">
      <button
        className="w-16 h-16 rounded-full bg-stone-400 uppercase text-stone-800"
        onClick={onClear}
      >
        ac
      </button>

      <button
        className="w-16 h-16 rounded-full bg-stone-400 uppercase text-stone-800"
        onClick={onToggleSign}
      >
        &plusmn;
      </button>

      <button
        className="w-16 h-16 rounded-full bg-stone-400 uppercase text-stone-800"
        onClick={() => onButtonClick("%")}
      >
        %
      </button>
      <button
        className="w-16 h-16 rounded-full bg-amber-500 text-3xl text-stone-50"
        onClick={() => onButtonClick("/")}
      >
        &divide;
      </button>

      {[7, 8, 9].map((num) => (
        <button
          key={num}
          className="w-16 h-16 rounded-full bg-stone-800 uppercase text-stone-50"
          onClick={() => onButtonClick(num)}
        >
          {num}
        </button>
      ))}

      <button
        className="w-16 h-16 rounded-full bg-amber-500 text-3xl text-stone-50"
        onClick={() => onButtonClick("*")}
      >
        x
      </button>

      {[4, 5, 6].map((num) => (
        <button
          key={num}
          className="w-16 h-16 rounded-full bg-stone-800 uppercase text-stone-50"
          onClick={() => onButtonClick(num)}
        >
          {num}
        </button>
      ))}

      <button
        className="w-16 h-16 rounded-full bg-amber-500 text-3xl text-stone-50"
        onClick={() => onButtonClick("-")}
      >
        -
      </button>

      {[1, 2, 3].map((num) => (
        <button
          key={num}
          className="w-16 h-16 rounded-full bg-stone-800 uppercase text-stone-50"
          onClick={() => onButtonClick(num)}
        >
          {num}
        </button>
      ))}

      <button
        className="w-16 h-16 rounded-full bg-amber-500 text-3xl text-stone-50"
        onClick={() => onButtonClick("+")}
      >
        +
      </button>
      <button
        className="w-16 h-16 rounded-full bg-stone-800 uppercase text-stone-50"
        onClick={() => onButtonClick(0)}
      >
        0
      </button>
      <button
        className="w-16 h-16 rounded-full bg-stone-800 uppercase text-stone-50"
        onClick={() => onButtonClick(".")}
      >
        .
      </button>
      <button
        className="w-16 h-16 rounded-full bg-stone-800 uppercase text-stone-50 flex items-center justify-center"
        onClick={() => onDelete()}
      >
        <img src={btdelete} alt="delete" className="w-8" />
      </button>
      <button
        className="w-16 h-16 rounded-full bg-amber-500 text-3xl text-stone-50"
        onClick={() => onEqual()}
      >
        =
      </button>

      <div className="w-full flex items-center justify-center pt-4">
        <div className="w-1/2 h-[4px] bg-stone-50 rounded-md"></div>
      </div>
    </section>
  );
}
