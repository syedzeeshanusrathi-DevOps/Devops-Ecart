import Link from "next/link";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="rounded-lg border p-6 shadow">
      <img
        src={product.image}
        alt={product.name}
        className="mx-auto h-48 w-full rounded object-cover"
      />

      <h2 className="mt-4 text-2xl font-semibold">{product.name}</h2>

      <p className="mt-2 text-gray-600">{product.description}</p>

      <p className="mt-3 text-xl font-bold">${product.price}</p>

      <Link
        href={`/products/${product.id}`}
        className="mt-4 inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        View Details
      </Link>
    </div>
  );
}