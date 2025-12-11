# Express Backend API

A full-stack Express.js backend application with support for both MongoDB and PostgreSQL databases, configured for serverless deployment on Vercel.

## Features

- 🚀 Express.js 5.x backend
- 🗄️ Dual database support (MongoDB & PostgreSQL)
- 🔐 JWT authentication with bcrypt password hashing
- 🌐 CORS enabled for cross-origin requests
- ☁️ Serverless-ready for Vercel deployment
- 🏥 Health check endpoint
- 🧪 Database connection testing endpoints

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js 5.2.1
- **Databases**:
  - MongoDB (via Mongoose 9.0.1)
  - PostgreSQL (via Sequelize 6.37.7)
- **Authentication**: JWT (jsonwebtoken 9.0.3), bcryptjs 3.0.3
- **Deployment**: Vercel (serverless-http 4.0.0)

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB database (for MongoDB connection)
- PostgreSQL database (for PostgreSQL connection, e.g., Aiven)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd Express-December-2025
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=8000
NODE_ENV=development

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/your-database-name

# PostgreSQL Configuration (Aiven or other)
DATABASE_URL=postgresql://user:password@host:port/database
PG_CA_CERT=your-certificate-content (optional, for SSL)

# JWT Configuration (if using authentication)
JWT_SECRET=your-secret-key
```

## Running the Project

### Development Mode

```bash
npm run dev
```

This will start the server with nodemon for auto-reloading on file changes.

### Production Mode

```bash
npm start
```

The server will run on `http://localhost:8000` (or the port specified in your `.env` file).

## API Endpoints

### Health Check

- **GET** `/health`
  - Returns server status
  - Response: `{ message: "Server is running" }`

### Database Testing

- **GET** `/test-db`
  - Tests PostgreSQL connection (Aiven)
  - Response: `{ ok: true, message: "Aiven Postgres connected!" }`

### Root

- **GET** `/`
  - Welcome message
  - Response: `{ message: "Hello from Vercel + Express!" }`

## Project Structure

```
Express-December-2025/
├── api/
│   └── index.js          # Main application entry point
├── config/
│   ├── mongo.js          # MongoDB connection configuration
│   └── postgres.js       # PostgreSQL connection configuration
├── models/
│   └── index.js          # Sequelize instance and database models
├── routes/
│   ├── home.js           # Home/health check routes
│   └── db.js             # Database testing routes
├── vercel.json           # Vercel deployment configuration
├── package.json          # Project dependencies and scripts
└── README.md             # This file
```

## Deployment

### Vercel Deployment

This project is configured for serverless deployment on Vercel:

1. Install Vercel CLI:

```bash
npm i -g vercel
```

2. Deploy:

```bash
vercel
```

3. Set environment variables in Vercel dashboard:
   - `MONGODB_URI`
   - `DATABASE_URL`
   - `PG_CA_CERT` (if needed)
   - `JWT_SECRET` (if using authentication)
   - `NODE_ENV=production`

The `vercel.json` file configures the project to use the `/api/index.js` file as a serverless function.

## Environment Variables

| Variable       | Description                          | Required                      |
| -------------- | ------------------------------------ | ----------------------------- |
| `PORT`         | Server port (default: 8000)          | No                            |
| `NODE_ENV`     | Environment (development/production) | No                            |
| `MONGODB_URI`  | MongoDB connection string            | Yes (if using MongoDB)        |
| `DATABASE_URL` | PostgreSQL connection string         | Yes (if using PostgreSQL)     |
| `PG_CA_CERT`   | PostgreSQL SSL certificate           | No                            |
| `JWT_SECRET`   | Secret key for JWT tokens            | Yes (if using authentication) |

## Development Notes

- The application connects to MongoDB on startup
- PostgreSQL connection is lazy-loaded when needed via `getSequelize()`
- CORS is configured to allow all origins (`*`) - consider restricting this in production
- The serverless export is commented out in `api/index.js` - uncomment for Vercel deployment

## License

ISC
