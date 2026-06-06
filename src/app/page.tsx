import SearchColleges from "@/components/SearchColleges";
import Link from "next/link";

async function getColleges() {
  const res = await fetch("http://localhost:3000/api/colleges", {
    cache: "no-store",
  });

  return res.json();
}

export default async function Home() {
  const colleges = await getColleges();

  return (
    <main className="p-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        College Discovery Platform
      </h1>

      {/* Buttons */}
      <div className="flex gap-4 mb-6">
        <Link
          href="/compare"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Compare Colleges
        </Link>

        <Link
          href="/predictor"
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          College Predictor
        </Link>
      </div>

      {/* Search + Listing */}
      <SearchColleges colleges={colleges} />
    </main>
  );
}