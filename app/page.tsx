import Navbar from "@/components/navbar";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";


export default function Home() {
  return (
  <>
    <Navbar />
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold">My E-Commerce Store</h1>

      <p className="mt-4 text-lg">
        Welcome to my DevOps e-commerce learning project.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
    </>
  );
}