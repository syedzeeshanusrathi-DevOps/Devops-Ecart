export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b p-4">
      <h1 className="text-2xl font-bold">
        My E-Commerce Store
      </h1>

      <div className="flex gap-6">
        <a href="/">Home</a>
        <a href="/cart">Cart (0)</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
}