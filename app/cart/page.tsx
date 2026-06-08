"use client";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart } = useCart();

  const total = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="mt-4">Your cart is currently empty.</p>
      ) : (
        <>
          <div className="mt-8 space-y-4">
            {cart.map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-4 rounded border p-4 shadow"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-24 w-24 rounded object-cover"
                />

                <div>
                  <h2 className="text-xl font-bold">{product.name}</h2>
                  <p>${product.price}</p>
                  <p className="text-gray-600">
                    Quantity: {product.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-2xl font-bold">
            Total: ${total.toFixed(2)}
          </div>
        </>
      )}
    </main>
  );
}