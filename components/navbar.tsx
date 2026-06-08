import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b p-4">
      <h1 className="text-2xl font-bold">
        My E-Commerce Store
      </h1>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/cart">Cart (0)</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}