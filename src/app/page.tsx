"use client";

import Calculator from "@/components/Calculator";
import { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState<number | string>("");
  const [calculatedValue, setCalculatedValue] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setInputValue(e.target.value);
    if (!isNaN(value)) {
      setCalculatedValue(value * 0.015);
    } else {
      setCalculatedValue(null);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-700">
      <Calculator
        inputValue={inputValue}
        calculatedValue={calculatedValue}
        handleInputChange={handleInputChange}
      />
    </main>
  );
};

export default Home;
