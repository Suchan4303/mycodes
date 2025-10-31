import React, { useState } from "react";

const BubbleSortVisualizer = () => {
  const [array, setArray] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [highlightIndices, setHighlightIndices] = useState([]);

  const generateArray = () => {
    const arr = Array.from({ length: 12 }, () =>
      Math.floor(Math.random() * 90) + 10
    );
    setArray(arr);
    setHighlightIndices([]);
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const bubbleSort = async () => {
    setSorting(true);
    const arr = [...array];

    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        setHighlightIndices([j, j + 1]);
        await sleep(200);
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
          await sleep(200);
        }
      }
    }

    setHighlightIndices([]);
    setSorting(false);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-6">🔵 Bubble Sort Visualizer</h1>

      <div
        className="flex space-x-2 mb-10 items-end border-t border-gray-700 pt-4"
        style={{ height: "350px", minHeight: "350px" }}
      >
        {array.map((val, idx) => {
          const isHighlighted = highlightIndices.includes(idx);
          return (
            <div key={idx} className="flex flex-col items-center justify-end">
              <span className="mb-2 text-sm">{val}</span>
              <div
                className={`w-8 rounded-t ${
                  isHighlighted ? "bg-red-500" : "bg-blue-400"
                }`}
                style={{ height: `${val * 3}px` }}
              ></div>
            </div>
          );
        })}
      </div>

      <div className="space-x-4">
        <button
          onClick={generateArray}
          disabled={sorting}
          className="bg-green-500 px-4 py-2 rounded hover:bg-green-600 disabled:opacity-50"
        >
          Generate Array
        </button>
        <button
          onClick={bubbleSort}
          disabled={sorting || array.length === 0}
          className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {sorting ? "Sorting..." : "Start Bubble Sort"}
        </button>
      </div>
    </div>
  );
};

export default BubbleSortVisualizer;
