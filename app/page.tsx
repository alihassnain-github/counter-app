"use client";

import Controls from "@/components/controls";
import { useState } from "react";

export default function Home() {

  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(prev => prev + 1)
  }

  const decreaseCounter = () => {
    setCounter(prev => prev - 1)
  }

  const resetCounter = () => {
    setCounter(0)
  }

  return (
    <main className="bg-slate-50 h-screen w-full">
      <h1 className="text-center text-4xl font-semibold py-4">Counter App</h1>
      <h2 className="text-center text-4xl py-8 font-semibold">{counter}</h2>
      <Controls increaseCounter={increaseCounter} decreaseCounter={decreaseCounter} resetCounter={resetCounter} />
    </main>
  );
}
