'use client';

import { createOrder } from './actions';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  createdAt: Date | null;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const handleOrder = async () => {
    const quantity = 1;
    const result = await createOrder(product.id, quantity);
    
    if (result.success) {
      alert(`Order created successfully! Order ID: ${result.orderId}`);
    } else {
      alert(`Error: ${result.error}`);
    }
  };

  return (
    <div className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
      <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <div className="flex justify-between items-center mb-4">
        <span className="text-xl font-bold text-green-600">
          ${product.price.toFixed(2)}
        </span>
        <span className="text-sm text-gray-500">
          Stock: {product.stock}
        </span>
      </div>
      <button
        onClick={handleOrder}
        disabled={product.stock === 0}
        className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white font-semibold py-2 px-4 rounded transition-colors"
      >
        {product.stock === 0 ? 'Out of Stock' : 'Order Now'}
      </button>
    </div>
  );
}
