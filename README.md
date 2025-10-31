ChowNow is a food ordering application that enables users to browse menus, place online orders, and manage restaurant operations seamlessly.
This repository contains the backend service, built with Node.js, Express, and MongoDB, featuring secure authentication, file uploads, and integrations for modern web APIs.

🚀 Tech Stack

Core:

Node.js + Express

TypeScript

MongoDB + Mongoose

Utilities & Integrations:

dotenv – environment variable management

cloudinary – image upload and storage (for food images, restaurant logos, etc.)

multer – file upload middleware

jsonwebtoken – secure JWT-based authentication

express-validator – request validation

cors – cross-origin handling

Dev Tools:

nodemon – auto-restart on file changes

ts-node – TypeScript runtime support

📂 Project Structure
backend/
├── src/
│   ├── config/        # Database & cloud configs
│   ├── controllers/   # Request handlers (auth, orders, restaurants, etc.)
│   ├── models/        # Mongoose schemas
│   ├── routes/        # Express route definitions
│   ├── middleware/    # Auth, validation, etc.
│   └── index.ts       # Entry point
├── .env.example
├── package.json
└── tsconfig.json

⚙️ Setup Instructions
1. Clone the repository
git clone https://github.com/<your-username>/chownow.git
cd chownow/backend

2. Install dependencies
npm install

3. Configure environment variables

Create a .env file in the root of backend/ using the .env.example as a guide:

PORT=5000
MONGO_URI=mongodb+srv://...
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

4. Run the server
npm run dev


The server will start on http://localhost:5000.

🧪 Scripts
Command	Description
npm run dev	Run the app in development mode with nodemon
npm run build	Compile TypeScript to JavaScript
npm start	Run the compiled server (dist/index.js)
🧱 API Overview (Typical Endpoints)
Endpoint	Method	Description
/api/auth/register	POST	Register a new user
/api/auth/login	POST	Authenticate and get a token
/api/restaurants	GET	Fetch all restaurants
/api/restaurants/:id/menu	GET	Get a restaurant’s menu
/api/orders	POST	Place an order
/api/orders/:id	GET	Get order details
🔐 Security

JWT authentication for protected routes

Input validation using express-validator

Secure environment variable handling via dotenv

🧾 License

This project is licensed under the ISC License.
