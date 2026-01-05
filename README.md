# interview-junior

Starter Kit for Junior Developer Interview - Product Store with Order Management

## Stack

- **Runtime**: Bun
- **Framework**: Next.js 14
- **ORM**: Drizzle
- **Database**: SQLite
- **Styling**: Tailwind CSS

## Project Structure

```
.
├── src/
│   ├── app/
│   │   ├── actions.ts          # Server actions (TODO: implement createOrder)
│   │   ├── page.tsx            # Home page - lists products
│   │   ├── product-card.tsx    # Product card component
│   │   ├── layout.tsx          # Root layout
│   │   └── globals.css         # Global styles
│   └── db/
│       ├── schema.ts           # Database schema (products, orders)
│       ├── index.ts            # Database connection
│       └── seed.ts             # Seed script
├── drizzle.config.ts           # Drizzle configuration
├── package.json
├── .env
└── tsconfig.json
```

## Setup Instructions

1. **Install dependencies** (requires Bun):
   ```bash
   bun install
   ```

2. **Push database schema**:
   ```bash
   bun run db:push
   ```

3. **Seed the database**:
   ```bash
   bun run db:seed
   ```

4. **Run development server**:
   ```bash
   bun run dev
   ```

5. **Open browser**: http://localhost:3000

## Interview Task

**Objective**: Implement the `createOrder` function in `src/app/actions.ts`

### Requirements

The function should:

1. **Validate inputs**:
   - Check that `productId` exists in the database
   - Check that `quantity` is positive

2. **Check stock availability**:
   - Verify the product has enough stock

3. **Execute a transaction**:
   - Insert a new order into the `orders` table
   - Update the product stock (decrement by quantity)
   - Calculate `totalPrice = product.price * quantity`

4. **Return appropriate response**:
   - On success: `{ success: true, orderId: number }`
   - On error: `{ success: false, error: string }`

### Hints

- Use Drizzle ORM methods: `db.select()`, `db.insert()`, `db.update()`
- Use `db.transaction()` to ensure data consistency
- Import necessary items from `@/db` and `@/db/schema`

## Database Schema

### Products Table
- `id`: Auto-increment primary key
- `name`: Product name
- `description`: Product description
- `price`: Product price (decimal)
- `stock`: Available quantity
- `createdAt`: Timestamp

### Orders Table
- `id`: Auto-increment primary key
- `productId`: Foreign key to products
- `quantity`: Ordered quantity
- `totalPrice`: Total price (price × quantity)
- `createdAt`: Timestamp

## Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run db:generate` - Generate migrations
- `bun run db:push` - Push schema to database
- `bun run db:studio` - Open Drizzle Studio
- `bun run db:seed` - Seed database with sample data
