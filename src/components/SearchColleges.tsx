"use client";

import { useState } from "react";
import Link from "next/link";

type College = {
  id: string;
  name: string;
  location: string;
  fees: number;
  rating: number;
  placement: number;
  description: string;
};

export default function SearchColleges({
  colleges,
}: {
  colleges: College[];
}) {
  const [search, setSearch] = useState("");

  const filteredColleges = colleges.filter(
    (college) =>
      college.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      college.location
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search colleges..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 border rounded-lg mb-6"
      />

      <div className="grid gap-4">
        {filteredColleges.map((college) => (
          <Link
            href={`/college/${college.id}`}
            key={college.id}
          >
            <div className="border rounded-lg p-4 hover:bg-gray-100 transition cursor-pointer">
              <h2 className="text-xl font-semibold mb-2">
                {college.name}
              </h2>

              <p>📍 {college.location}</p>
              <p>💰 Fees: ₹{college.fees}</p>
              <p>⭐ Rating: {college.rating}</p>
              <p>🎯 Placement: {college.placement}%</p>

              <p className="mt-2 text-gray-600">
                📝 {college.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}