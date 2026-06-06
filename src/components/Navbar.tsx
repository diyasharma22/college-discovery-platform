import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="max-w-6xl mx-auto flex gap-6">
        <Link href="/">Home</Link>

        <Link href="/compare">
          Compare
        </Link>

        <Link href="/predictor">
          Predictor
        </Link>
      </div>
    </nav>
  );
}