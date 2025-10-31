import { useState } from "react";
import BubbleSortVisualizer from "./components/BubbleSortVisualizer";
import SelectionSortVisualizer from "./components/SelectionSortVisualizer";
import InsertionSortVisualizer from "./components/InsertionSortVisualizer";
import MergeSortVisualizer from "./components/MergeSortVisualizer";

function App() {
  const [algorithm, setAlgorithm] = useState("bubble");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8">🚀 DSA Algorithm Visualizer</h1>

      <select
        value={algorithm}
        onChange={(e) => setAlgorithm(e.target.value)}
        className="mb-6 p-2 rounded bg-gray-700 text-white"
      >
        <option value="bubble">Bubble Sort</option>
        <option value="selection">Selection Sort</option>
        <option value="insertion">Insertion Sort</option>
        <option value="merge">Merge Sort</option>
      </select>

      {algorithm === "bubble" && <BubbleSortVisualizer />}
      {algorithm === "selection" && <SelectionSortVisualizer />}
      {algorithm === "insertion" && <InsertionSortVisualizer />}
      {algorithm === "merge" && <MergeSortVisualizer />}
    </div>
  );
}

export default App;
