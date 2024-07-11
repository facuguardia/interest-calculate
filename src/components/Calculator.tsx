import React from "react";

type PropsCalculator = {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: number | string;
  calculatedValue: number | null;
};

function Calculator({
  handleInputChange,
  calculatedValue,
  inputValue,
}: PropsCalculator) {
  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <h1 className="text-6xl font-bold">Calculadora de 1.5%</h1>
      <div className="mt-8">
        <input
          type=""
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Ingresa un valor"
          className="px-4 py-2 border rounded-md text-black"
        />
      </div>
      {calculatedValue !== null && (
        <div className="mt-4 text-xl">
          <p>
            El 1.5% de {inputValue} es{" "}
            <span className="text-2xl font-semibold text-red-500">
              {" "}
              $ {calculatedValue}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default Calculator;
