"use client";

import { useState } from "react";

export default function PredictorPage() {
  const [rank, setRank] = useState("");
  const [result, setResult] = useState<string[]>([]);

  const predictCollege = () => {
    const userRank = Number(rank);

    if (userRank <= 1000) {
      setResult(["IIT Delhi", "IIT Bombay", "IIT Madras"]);
    } else if (userRank <= 5000) {
      setResult(["IIT Madras", "BITS Pilani", "NIT Trichy"]);
    } else {
      setResult(["NIT Trichy", "VIT Vellore", "BITS Pilani"]);
    }
  };

  return (
    <main className="p-10 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">
        College Predictor
      </h1>

      <div className="border rounded-xl p-6 shadow">
        <label className="block mb-2 font-semibold">
          Exam Rank
        </label>

        <input
          type="number"
          placeholder="Enter your rank"
          value={rank}
          onChange={(e) => setRank(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button
          onClick={predictCollege}
          className="bg-green-500 text-white px-5 py-3 rounded-lg"
        >
          Predict Colleges
        </button>

        {result.length > 0 && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-3">
              Recommended Colleges
            </h2>

            <ul className="list-disc pl-6">
              {result.map((college) => (
                <li key={college}>{college}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}