import { db } from './index';
import { products } from './schema';

async function seed() {
  console.log('🌱 Seeding database...');

  await db.insert(products).values([
    {
      name: 'Laptop Pro',
      description: 'High-performance laptop for professionals',
      price: 1299.99,
      stock: 15,
    },
    {
      name: 'Wireless Mouse',
      description: 'Ergonomic wireless mouse with precision tracking',
      price: 29.99,
      stock: 50,
    },
    {
      name: 'Mechanical Keyboard',
      description: 'RGB mechanical keyboard with blue switches',
      price: 89.99,
      stock: 30,
    },
    {
      name: 'USB-C Hub',
      description: '7-in-1 USB-C hub with HDMI and card reader',
      price: 49.99,
      stock: 25,
    },
    {
      name: 'Monitor 27"',
      description: '4K monitor with HDR support',
      price: 399.99,
      stock: 10,
    },
  ]);

  console.log('✅ Database seeded successfully!');
}

seed().catch(console.error);
