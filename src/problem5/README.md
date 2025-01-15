# Problem 5: Backend Server with Express.js and TypeScript

Here’s a basic implementation of a backend server with Express.js using TypeScript, along with CRUD operations and a connection to a SQLite database via Sequelize.

---

## **Project Structure**
```
/src
  |-- /controllers        # Controllers for resource logic
  |-- /models             # Sequelize models
  |-- /routes             # Routes for CRUD operations
  |-- /config             # Database configuration
  |-- index.ts            # Entry point
/README.md                # Instructions to configure and run
/tsconfig.json            # TypeScript configuration
/package.json             # Dependencies
```

---

## Requirements
- Node.js (v14+)
- npm (v6+)

## Installation
1. Clone this repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Compile the TypeScript code:
   ```bash
   npx tsc
   ```

## Running the Application
### Development Mode
Use hot-reloading:
```bash
npx ts-node-dev src/index.ts
```

### Production Mode
1. Compile the code:
   ```bash
   npx tsc
   ```
2. Start the server:
   ```bash
   node dist/index.js
   ```

## API Endpoints
| Method | Endpoint       | Description              |
|--------|----------------|--------------------------|
| POST   | /resources     | Create a new resource    |
| GET    | /resources     | List all resources       |
| GET    | /resources/:id | Get a resource by ID     |
| PUT    | /resources/:id | Update a resource by ID  |
| DELETE | /resources/:id | Delete a resource by ID  |
