import { useState } from "react";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="h-dvh w-screen flex justify-center items-center bg-gradient-to-tr from-stone-700 to-stone-500">
      <Calculator />
    </div>
  );
}

export default App;
