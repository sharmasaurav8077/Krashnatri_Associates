# Krashnatri Associates

A professional full-stack MERN (MongoDB, Express, React, Node.js) web application for Krashnatri Associates, featuring a modern React frontend with TypeScript and a robust Express.js backend API.

## 📋 Table of Contents

- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Technologies](#technologies)
- [Development](#development)
- [Building for Production](#building-for-production)

## 📁 Project Structure

```
krishnatri-associates/
├── frontend/                 # React + TypeScript + Vite
│   ├── src/
│   │   ├── api/            # API client
│   │   ├── assets/          # Static assets
│   │   ├── components/     # Reusable components
│   │   ├── constants/       # App constants
│   │   ├── pages/          # Page components
│   │   ├── sections/       # Page sections
│   │   ├── types/          # TypeScript types
│   │   ├── utils/          # Utility functions
│   │   ├── App.tsx         # Main app component
│   │   └── main.tsx       # Entry point
│   ├── public/             # Public assets
│   ├── package.json
│   └── .env.example
│
├── backend/                 # Node.js + Express
│   ├── src/
│   │   ├── config/         # Configuration files
│   │   ├── constants/      # App constants
│   │   ├── controllers/     # Route controllers
│   │   ├── data/           # Static data
│   │   ├── middleware/      # Custom middleware
│   │   ├── models/         # MongoDB models
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   ├── utils/          # Utility functions
│   │   └── index.js        # Entry point
│   ├── package.json
│   └── .env.example
│
├── package.json            # Workspace root
├── .gitignore
└── README.md
```

## 🔧 Prerequisites

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)
- **MongoDB** (optional, for database features)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd krishnatri-associates
```

### 2. Install dependencies

Install all dependencies for both frontend and backend:

```bash
npm run install:all
```

Or install separately:

```bash
# Frontend
cd frontend
npm install

# Backend
cd backend
npm install
```

### 3. Configure environment variables

#### Backend

Copy the example environment file and configure it:

```bash
cd backend
cp .env.example .env
```

Edit `backend/.env` with your configuration (see [Environment Variables](#environment-variables)).

#### Frontend

Copy the example environment file:

```bash
cd frontend
cp .env.example .env
```

Edit `frontend/.env` if you need to change the API URL (default: `http://localhost:4000/api`).

### 4. Run the application

#### Option 1: Run both frontend and backend together

From the project root:

```bash
npm run dev
```

#### Option 2: Run separately

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

The application will be available at:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:4000

## 🔐 Environment Variables

### Backend (`backend/.env`)

#### Required

```env
PORT=4000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

#### Optional

```env
# MongoDB
MONGODB_URI=mongodb://localhost:27017/krishnatri-associates

# Email (Nodemailer)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM=noreply@krishnatriassociates.com

# Cloudinary
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# File Upload
MAX_FILE_SIZE=5242880
```

### Frontend (`frontend/.env`)

```env
VITE_API_URL=http://localhost:4000/api
```

## 📡 API Documentation

### Base URL

```
http://localhost:4000/api
```

### Endpoints

#### Health Check

```http
GET /api/health
```

**Response:**
```json
{
  "status": "OK",
  "message": "Server is running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

#### Contact Form

```http
POST /api/contact
Content-Type: application/json
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Example Corp",
  "phone": "+1234567890",
  "message": "Hello, I'm interested in your services."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your message! We will get back to you soon.",
  "data": {
    "id": 1234567890,
    "submittedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

## 🛠 Technologies

### Frontend

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **GSAP** - Advanced animations
- **React Router** - Routing

### Backend

- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** - Database (Mongoose)
- **Nodemailer** - Email service
- **Cloudinary** - Cloud storage
- **Multer** - File uploads

## 💻 Development

### Available Scripts

#### Root Level

```bash
npm run dev              # Run both frontend and backend
npm run dev:frontend     # Run frontend only
npm run dev:backend     # Run backend only
npm run build            # Build frontend for production
npm run install:all      # Install all dependencies
```

#### Frontend

```bash
cd frontend
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

#### Backend

```bash
cd backend
npm run dev      # Start development server (with auto-reload)
npm start        # Start production server
```

## 🏗 Building for Production

### Frontend

```bash
cd frontend
npm run build
```

The build output will be in `frontend/dist/`.

### Backend

```bash
cd backend
npm start
```

Make sure to set `NODE_ENV=production` in your `.env` file.

## 📝 License

ISC

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
