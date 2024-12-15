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
        className="w-16 h-16 rounded-full uppercase text-stone-800 bg-gradient-to-tl from-stone-500 to-stone-300 hover:bg-gradient-to-tl hover:from-stone-400 hover:to-stone-200 duration-150"
        onClick={onClear}
      >
        ac
      </button>

      <button
        className="w-16 h-16 rounded-full uppercase text-stone-800 bg-gradient-to-tl from-stone-500 to-stone-300 hover:bg-gradient-to-tl hover:from-stone-400 hover:to-stone-200 duration-150"
        onClick={onToggleSign}
      >
        &plusmn;
      </button>

      <button
        className="w-16 h-16 rounded-full uppercase text-stone-800 bg-gradient-to-tl from-stone-500 to-stone-300 hover:bg-gradient-to-tl hover:from-stone-400 hover:to-stone-200 duration-150"
        onClick={() => onButtonClick("%")}
      >
        %
      </button>
      <button
        className="w-16 h-16 rounded-full text-3xl text-stone-50 bg-gradient-to-tl from-amber-700 to-amber-400 hover:bg-gradient-to-tl hover:from-amber-600 hover:to-amber-300 duration-150"
        onClick={() => onButtonClick("/")}
      >
        &divide;
      </button>

      {[7, 8, 9].map((num) => (
        <button
          key={num}
          className="w-16 h-16 rounded-full text-stone-50 bg-gradient-to-tl from-stone-900 to-stone-600 hover:bg-gradient-to-tl hover:from-stone-800 hover:to-stone-500 duration-150"
          onClick={() => onButtonClick(num)}
        >
          {num}
        </button>
      ))}

      <button
        className="w-16 h-16 rounded-full text-3xl text-stone-50 bg-gradient-to-tl from-amber-700 to-amber-400 hover:bg-gradient-to-tl hover:from-amber-600 hover:to-amber-300 duration-150"
        onClick={() => onButtonClick("*")}
      >
        x
      </button>

      {[4, 5, 6].map((num) => (
        <button
          key={num}
          className="w-16 h-16 rounded-full text-stone-50 bg-gradient-to-tl from-stone-900 to-stone-600 hover:bg-gradient-to-tl hover:from-stone-800 hover:to-stone-500 duration-150"
          onClick={() => onButtonClick(num)}
        >
          {num}
        </button>
      ))}

      <button
        className="w-16 h-16 rounded-full text-3xl text-stone-50 bg-gradient-to-tl from-amber-700 to-amber-400 hover:bg-gradient-to-tl hover:from-amber-600 hover:to-amber-300 duration-150"
        onClick={() => onButtonClick("-")}
      >
        -
      </button>

      {[1, 2, 3].map((num) => (
        <button
          key={num}
          className="w-16 h-16 rounded-full text-stone-50 bg-gradient-to-tl from-stone-900 to-stone-600 hover:bg-gradient-to-tl hover:from-stone-800 hover:to-stone-500 duration-150"
          onClick={() => onButtonClick(num)}
        >
          {num}
        </button>
      ))}

      <button
        className="w-16 h-16 rounded-full text-3xl text-stone-50 bg-gradient-to-tl from-amber-700 to-amber-400 hover:bg-gradient-to-tl hover:from-amber-600 hover:to-amber-300 duration-150"
        onClick={() => onButtonClick("+")}
      >
        +
      </button>
      <button
        className="w-16 h-16 rounded-full bg-gradient-to-tl from-stone-900 to-stone-600 uppercase text-stone-50 hover:bg-gradient-to-tl hover:from-stone-800 hover:to-stone-500 duration-150"
        onClick={() => onButtonClick(0)}
      >
        0
      </button>
      <button
        className="w-16 h-16 rounded-full bg-gradient-to-tl from-stone-900 to-stone-600 uppercase text-stone-50 hover:bg-gradient-to-tl hover:from-stone-800 hover:to-stone-500 duration-150"
        onClick={() => onButtonClick(".")}
      >
        .
      </button>
      <button
        className="w-16 h-16 rounded-full bg-gradient-to-tl from-stone-900 to-stone-600 uppercase text-stone-50 flex items-center justify-center hover:bg-gradient-to-tl hover:from-stone-800 hover:to-stone-500 duration-150"
        onClick={() => onDelete()}
      >
        <img src={btdelete} alt="delete" className="w-8" />
      </button>
      <button
        className="w-16 h-16 rounded-full text-3xl text-stone-50 bg-gradient-to-tl from-amber-700 to-amber-400 hover:bg-gradient-to-tl hover:from-amber-600 hover:to-amber-300 duration-150"
        onClick={() => onEqual()}
      >
        =
      </button>

      <div className="w-full flex items-center justify-center pt-4">
        <div className="w-1/2 h-[4px] bg-stone-200 rounded-md"></div>
      </div>
    </section>
  );
}
