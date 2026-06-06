"use client";

import { useState } from "react";

const colleges = [
  {
    name: "IIT Delhi",
    location: "Delhi",
    fees: 250000,
    rating: 4.8,
    placement: 95,
  },
  {
    name: "IIT Bombay",
    location: "Mumbai",
    fees: 240000,
    rating: 4.9,
    placement: 97,
  },
  {
    name: "BITS Pilani",
    location: "Pilani",
    fees: 300000,
    rating: 4.7,
    placement: 94,
  },
];

export default function ComparePage() {
  const [college1, setCollege1] = useState(colleges[0]);
  const [college2, setCollege2] = useState(colleges[1]);

  return (
    <main className="p-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">
        Compare Colleges
      </h1>

      <div className="flex gap-4 mb-8">
        <select
          title="Select first college"
          className="border p-2 rounded"
          value={college1.name}
          onChange={(e) => {
            const selected = colleges.find(
              (c) => c.name === e.target.value
            );

            if (selected) {
              setCollege1(selected);
            }
          }}
        >
          {colleges.map((college) => (
            <option
              key={college.name}
              value={college.name}
            >
              {college.name}
            </option>
          ))}
        </select>

        <select
          title="Select second college"
          className="border p-2 rounded"
          value={college2.name}
          onChange={(e) => {
            const selected = colleges.find(
              (c) => c.name === e.target.value
            );

            if (selected) {
              setCollege2(selected);
            }
          }}
        >
          {colleges.map((college) => (
            <option
              key={college.name}
              value={college.name}
            >
              {college.name}
            </option>
          ))}
        </select>
      </div>

      <table className="border w-full text-center">
        <thead>
          <tr>
            <th className="border p-3">Feature</th>
            <th className="border p-3">
              {college1.name}
            </th>
            <th className="border p-3">
              {college2.name}
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border p-3">
              Location
            </td>
            <td className="border p-3">
              {college1.location}
            </td>
            <td className="border p-3">
              {college2.location}
            </td>
          </tr>

          <tr>
            <td className="border p-3">Fees</td>
            <td className="border p-3">
              ₹{college1.fees}
            </td>
            <td className="border p-3">
              ₹{college2.fees}
            </td>
          </tr>

          <tr>
            <td className="border p-3">
              Rating
            </td>
            <td className="border p-3">
              ⭐ {college1.rating}
            </td>
            <td className="border p-3">
              ⭐ {college2.rating}
            </td>
          </tr>

          <tr>
            <td className="border p-3">
              Placement
            </td>
            <td className="border p-3">
              {college1.placement}%
            </td>
            <td className="border p-3">
              {college2.placement}%
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}