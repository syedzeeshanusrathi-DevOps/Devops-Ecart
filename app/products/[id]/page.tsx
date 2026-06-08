import { products } from "@/data/products";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <main className="min-h-screen p-10">
      <img
        src={product.image}
        alt={product.name}
        className="h-72 w-full max-w-md rounded border object-cover"
      />

      <h1 className="mt-6 text-4xl font-bold">
        {product.name}
      </h1>

      <p className="mt-4 text-2xl font-semibold">
        ${product.price}
      </p>

      <p className="mt-4 text-lg">
        {product.description}
      </p>
    </main>
  );
}