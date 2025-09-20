# 🛒 AI-Powered E-Commerce Platform

An **AI-powered full-stack E-Commerce Website** built with the **MERN stack (MongoDB, Express, React, Node.js)** featuring **AI-driven recommendations, Google Authentication, Razorpay Payment Gateway, and an Admin Dashboard**.  

This project is designed as a **Final Year Major Project** and also serves as a **production-ready resume project**.  

---

## 🚀 Features

- Modern E-Commerce UI with React.js  
- Secure Authentication (Google Login via Firebase)  
- Razorpay Integration for Payments  
- Admin Dashboard (Products, Orders, Users Management)  
- Add to Cart + Checkout + Order Booking  
- Real-Time Stock Updates  
- AI-Powered Product Recommendations  
- JWT Authentication & Role-Based Access  
- Cloudinary for Image Uploads  
- Responsive Design (Mobile + Desktop)  
- Free Deployment Ready (Render / Vercel)  

---

## 🏗️ Tech Stack

### Frontend
- React.js (Vite)
- React Router
- Context API (Auth & Cart Management)
- Tailwind CSS / Material UI

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Razorpay SDK
- Cloudinary API

### AI/ML
- Simple Recommendation System (based on user activity & product categories)

### Others
- Firebase (Google Auth)
- GitHub Actions (CI/CD Ready)

## 📂 Project Structure

```bash
ai-powered-ecommerce-platform/
│── backend/              # Express + MongoDB backend
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── controllers/      # Business logic
│   ├── middleware/       # Auth & error handlers
│   └── index.js          # Server entry point

│── frontend/             # React frontend
│   ├── src/              # Components, Pages, Context
│   ├── public/           # Static files
│   └── vite.config.js    # Vite config

│── .gitignore
│── README.md
│── package.json
```

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/GJBarhate/ai-powered-ecommerce-platform.git
cd ai-powered-ecommerce-platform
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install
```

### Create a .env file in backend/:
```bash
PORT=8000
MONGODB_URL=your_mongodb_url
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

### Run the server:
```bash
npm run dev
```

### 3️⃣ Frontend Setup
```bash
cd frontend
npm install
```


### Create a .env file in frontend/:
```bash
VITE_FIREBASE_APIKEY=your_firebase_api_key
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```


### Run the React app:
```bash
npm run dev
```

### 4️⃣ Admin Setup

```bash
cd admin
npm install
```
### Run the React app:
```bash
npm run dev
```

---

## 🚀 Live Deployment

You can access the live version of the platform here:

- **Frontend:** [AI-Powered E-Commerce Frontend](https://ai-powered-ecommerce-platform-frontendone.onrender.com)  
- **Admin Dashboard:** [Admin Panel](https://ai-powered-ecommerce-platform-admin.onrender.com)  


## 👨‍💻 Author

**Gaurav Barhate**