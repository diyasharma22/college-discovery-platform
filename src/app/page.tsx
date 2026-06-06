import SearchColleges from "@/components/SearchColleges";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

async function getColleges() {
  return await prisma.college.findMany();
}

export default async function Home() {
  const colleges = await getColleges();

  return (
    <main className="p-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">
        College Discovery Platform
      </h1>

      <div className="flex gap-4 mb-6">
        <Link
          href="/compare"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Compare Colleges
        </Link>

        <Link
          href="/predictor"
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          College Predictor
        </Link>
      </div>

      <SearchColleges colleges={colleges} />
    </main>
  );
}