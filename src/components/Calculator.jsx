import { useState } from "react";
import { evaluate } from "mathjs";
import CalculatorButtons from "./CalculatorButtons";
import CalculatorHeader from "./CalculatorHeader";

export default function Calculator() {
  const [equal, setEqual] = useState("");
  const operators = ["+", "-", "*", "/", "%"];

  const validateOperators = (equation) => {
    // Verifica se há dois ou mais operadores consecutivos
    return !/[+\-*/]{2,}/.test(equation);
  };

  const handleButtonClick = (value) => {
    const lastChar = equal.slice(-1); // Obtém o último caractere da expressão

    // Se o valor for um operador, verifica se o último caractere também é um operador
    if (operators.includes(value) && operators.includes(lastChar)) {
      console.error("Não é permitido adicionar operadores consecutivos!");
      return; // Não faz nada se a validação falhar
    }

    // Atualiza o estado apenas se a validação passar
    if (validateOperators(equal + value)) {
      setEqual(equal + value); // Atualiza o valor da expressão
    } else {
      console.error(
        "Entrada inválida: operadores consecutivos não permitidos."
      );
    }
  };

  const handleEqual = () => {
    // Verifica se a expressão é válida antes de calcular
    if (!validateOperators(equal)) {
      console.error(
        "Entrada inválida: operadores consecutivos não permitidos."
      );
      return;
    }

    try {
      //realiza as operações matemáticas
      setEqual(evaluate(equal).toString());
    } catch (error) {
      console.error("Erro ao calcular a expressão:", error);
      setEqual(""); // Limpa a entrada se houver erro
    }
  };

  //Inverte sinal do número
  const handleToggleSign = () => {
    if (equal) {
      try {
        const toggled = String(-1 * parseFloat(equal)); // Inverte o sinal
        setEqual(toggled);
      } catch {
        setEqual("");
      }
    }
  };

  const handleDelete = () => {
    if (equal.length > 0) {
      setEqual(equal.slice(0, -1)); // Remove o último caractere da expressão
    }
  };

  //limpa toda a equação
  const handleClear = () => {
    setEqual("");
  };

  return (
    <main className="bg-gradient-to-t from-stone-900 to-stone-950 w-[340px] h-[680px] rounded-3xl border-stone-300 border-[6px] p-4 shadow-2xl">
      <section className="h-2/5 px-4 text-stone-50">
        <CalculatorHeader />
        <div className="h-5/6 flex justify-end items-end">
          <output className="text-4xl pb-6 overflow-x-scroll hide-scrollbar">
            {equal}
          </output>
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
