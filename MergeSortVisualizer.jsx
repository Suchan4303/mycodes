import React, { useState, useEffect } from "react";

const MergeSortVisualizer = () => {
  const [array, setArray] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [highlightIndices, setHighlightIndices] = useState([]);

  useEffect(() => {
    generateArray();
  }, []);

  // Generate a random array
  const generateArray = () => {
    const arr = Array.from({ length: 12 }, () =>
      Math.floor(Math.random() * 90) + 10
    );
    setArray(arr);
    setHighlightIndices([]);
  };

  // Sleep helper for animation
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Merge function with animation
  const merge = async (arr, l, mid, r) => {
    const left = arr.slice(l, mid + 1);
    const right = arr.slice(mid + 1, r + 1);

    let i = 0, j = 0, k = l;

    while (i < left.length && j < right.length) {
      setHighlightIndices([k, l + i, mid + 1 + j]);
      await sleep(200);

      if (left[i] <= right[j]) {
        arr[k] = left[i++];
      } else {
        arr[k] = right[j++];
      }
      k++;
      setArray([...arr]);
    }

    while (i < left.length) {
      arr[k++] = left[i++];
      setHighlightIndices([k - 1]);
      setArray([...arr]);
      await sleep(200);
    }

    while (j < right.length) {
      arr[k++] = right[j++];
      setHighlightIndices([k - 1]);
      setArray([...arr]);
      await sleep(200);
    }
  };

  // Merge Sort recursive function
  const mergeSort = async (arr, l = 0, r = arr.length - 1) => {
    if (l >= r) return;
    const mid = Math.floor((l + r) / 2);
    await mergeSort(arr, l, mid);
    await mergeSort(arr, mid + 1, r);
    await merge(arr, l, mid, r);
  };

  // Start Merge Sort
  const startMergeSort = async () => {
    setSorting(true);
    const arrCopy = [...array];
    await mergeSort(arrCopy);
    setArray(arrCopy);
    setHighlightIndices([]);
    setSorting(false);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-6">💗 Merge Sort Visualizer</h1>

      {/* Bars Container with fixed height */}
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
                  isHighlighted ? "bg-red-500" : "bg-pink-400"
                }`}
                style={{ height: `${val * 3}px` }}
              ></div>
            </div>
          );
        })}
      </div>

      {/* Buttons */}
      <div className="space-x-4">
        <button
          onClick={generateArray}
          disabled={sorting}
          className="bg-green-500 px-4 py-2 rounded hover:bg-green-600 disabled:opacity-50"
        >
          Generate Array
        </button>
        <button
          onClick={startMergeSort}
          disabled={sorting || array.length === 0}
          className="bg-pink-500 px-4 py-2 rounded hover:bg-pink-600 disabled:opacity-50"
        >
          {sorting ? "Sorting..." : "Start Merge Sort"}
        </button>
      </div>
    </div>
  );
};

export default MergeSortVisualizer;
