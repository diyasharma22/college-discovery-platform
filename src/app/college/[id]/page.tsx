import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function CollegePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const college = await prisma.college.findUnique({
    where: {
      id,
    },
  });

  if (!college) {
    return (
      <main className="p-10">
        <h1 className="text-3xl font-bold">
          College Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="p-10">
      <Link
        href="/"
        className="text-blue-500 mb-6 inline-block"
      >
        ← Back to Colleges
      </Link>

      <div className="max-w-4xl mx-auto border rounded-xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-6">
          {college.name}
        </h1>

        <div className="space-y-4 text-lg">
          <p>📍 Location: {college.location}</p>
          <p>💰 Fees: ₹{college.fees}</p>
          <p>⭐ Rating: {college.rating}</p>
          <p>🎯 Placement: {college.placement}%</p>
          <p>📝 {college.description}</p>
        </div>

        <hr className="my-8" />

        <h2 className="text-2xl font-bold mb-4">
          Courses Offered
        </h2>

        <ul className="list-disc ml-6 mb-8">
          <li>Computer Science Engineering</li>
          <li>Electronics & Communication</li>
          <li>Mechanical Engineering</li>
          <li>Civil Engineering</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">
          Placement Overview
        </h2>

        <div className="mb-8">
          <p>Highest Package: ₹45 LPA</p>
          <p>Average Package: ₹12 LPA</p>
          <p>Placement Rate: {college.placement}%</p>
        </div>

        <h2 className="text-2xl font-bold mb-4">
          Student Reviews
        </h2>

        <div className="space-y-3">
          <div className="border p-3 rounded">
            ⭐⭐⭐⭐⭐ Excellent campus and faculty.
          </div>

          <div className="border p-3 rounded">
            ⭐⭐⭐⭐ Great placements and opportunities.
          </div>

          <div className="border p-3 rounded">
            ⭐⭐⭐⭐ Good infrastructure and hostel facilities.
          </div>
        </div>

        <Link
          href="/compare"
          className="inline-block mt-8 bg-blue-500 text-white px-6 py-3 rounded"
        >
          Compare Colleges
        </Link>
      </div>
    </main>
  );
}