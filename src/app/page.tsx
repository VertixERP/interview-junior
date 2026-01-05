import { db } from '@/db';
import { products } from '@/db/schema';
import { ProductCard } from './product-card';

export default async function Home() {
  const allProducts = await db.select().from(products);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
