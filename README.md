# Scrap Inventory System

A backend API for managing scrap metal and material inventory in a manufacturing/fabrication shop. Tracks plates, structural steel, and saw materials with status management, reservation tracking, and activity logging.

## Tech Stack

- **Runtime**: Node.js + Express 5
- **Database**: MongoDB (Mongoose ODM) via MongoDB Atlas
- **Auth**: JWT tokens + bcrypt password hashing
- **Dev**: nodemon for auto-reload

## Features

- **3-Tier Role-Based Auth** — Operator, Engineer, and Manager roles with JWT authentication
- **Scrap Piece Tracking** — Add, filter, reserve, and manage plate scrap with dimensions, grade, and location
- **Saw Material Tracking** — Structural materials (angle, tube, I-beam, channel, pipe, etc.) with flexible dimensions
- **Reservation System** — Unique reservation IDs (`RES-YYYYMMDD-XXXX`), job tracking, and unreserve with history
- **Predefined Catalogs** — 43+ plate materials, 95+ structural materials, and hierarchical storage locations
- **Dashboard Stats** — Counts by status, grade, thickness, material type, and recent activity
- **Activity Logging** — Full audit trail of all inventory operations (add, reserve, unreserve, mark used, delete)
- **Soft Deletes** — Materials marked as "used" rather than deleted, preserving history

## Project Structure

```
src/
├── server.js                # Express app, routing, middleware
├── config/
│   ├── database.js          # MongoDB connection
│   ├── plateCatalog.js      # Plate materials for plasma cutting
│   ├── materialCatalog.js   # Structural materials catalog
│   └── locationCatalog.js   # Hierarchical location system
├── models/
│   ├── User.js              # User schema with roles and password hashing
│   ├── ScrapPiece.js        # Plate scrap schema
│   ├── SawMaterial.js       # Structural material schema
│   └── ActivityLog.js       # Audit trail schema
├── middleware/
│   └── auth.js              # JWT verification and role authorization
├── routes/
│   ├── auth.js              # Register, login, current user
│   ├── scrap.js             # Scrap piece CRUD + reserve/unreserve
│   ├── sawMaterial.js       # Saw material CRUD + reserve/unreserve
│   ├── dashboard.js         # Scrap statistics
│   └── sawDashboard.js      # Saw material statistics
├── utils/
│   ├── reservationId.js     # Reservation ID generation
│   └── seedDefaultUsers.js  # Auto-seed default users
└── scripts/
    └── seedUsers.js         # Manual user seeding script
```

## Setup

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```
PORT=3000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/scrap-inventory?retryWrites=true&w=majority
JWT_SECRET=your-secret-key-here
NODE_ENV=development
```

### Run the Server

```bash
# Development (auto-reload)
npm run dev

# Production
npm start
```

### Seed Users Manually

```bash
npm run seed:users
```

Default users are also auto-seeded on startup:

| Username   | Password    | Role     |
|------------|-------------|----------|
| operator1  | operator123 | Operator |
| engineer1  | engineer123 | Engineer |
| manager1   | manager123  | Manager  |

## API Endpoints

### Authentication

| Method | Endpoint             | Description       |
|--------|----------------------|-------------------|
| POST   | `/api/auth/register` | Create new user   |
| POST   | `/api/auth/login`    | Get JWT token     |
| GET    | `/api/auth/me`       | Current user info |

### Scrap Pieces (auth required)

| Method | Endpoint                      | Description          |
|--------|-------------------------------|----------------------|
| GET    | `/api/scrap`                  | List/filter pieces   |
| POST   | `/api/scrap`                  | Add new piece        |
| PUT    | `/api/scrap/:id`              | Update piece         |
| DELETE | `/api/scrap/:id`              | Mark as used         |
| POST   | `/api/scrap/:id/reserve`      | Reserve for job      |
| POST   | `/api/scrap/:id/unreserve`    | Cancel reservation   |

### Saw Materials (auth required)

| Method | Endpoint                             | Description          |
|--------|--------------------------------------|----------------------|
| GET    | `/api/saw-material`                  | List/filter materials|
| POST   | `/api/saw-material`                  | Add new material     |
| PUT    | `/api/saw-material/:id`              | Update material      |
| DELETE | `/api/saw-material/:id`              | Mark as used         |
| POST   | `/api/saw-material/:id/reserve`      | Reserve for job      |
| POST   | `/api/saw-material/:id/unreserve`    | Cancel reservation   |

### Catalogs & Locations

| Method | Endpoint                                          | Description      |
|--------|---------------------------------------------------|------------------|
| GET    | `/api/scrap/catalog`                              | Plate materials  |
| GET    | `/api/scrap/locations/areas`                      | Storage areas    |
| GET    | `/api/scrap/locations/sections/:areaId`           | Area sections    |
| GET    | `/api/scrap/locations/bins/:areaId/:sectionId`    | Storage bins     |

### Dashboards

| Method | Endpoint                    | Description             |
|--------|-----------------------------|-------------------------|
| GET    | `/api/dashboard/stats`      | Scrap statistics        |
| GET    | `/api/dashboard/recent`     | Recent scrap pieces     |
| GET    | `/api/saw-dashboard/stats`  | Saw material statistics |
