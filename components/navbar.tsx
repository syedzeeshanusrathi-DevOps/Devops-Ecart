"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="flex items-center justify-between border-b p-4">
      <h1 className="text-2xl font-bold">My E-Commerce Store</h1>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/cart">Cart ({cart.length})</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}