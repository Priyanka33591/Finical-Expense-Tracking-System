Financial Expense Tracker
A web application for tracking personal income and expenses with authentication. This application allows users to manage their financial records month-wise and visualize their spending patterns.

Features
User authentication with JWT
Dashboard with financial overview and charts
Track expenses by category
Track income by source
Filter transactions by month, year, and category
Responsive design for mobile and desktop
Tech Stack
Backend
Node.js
Express.js
MongoDB
JWT Authentication
Mongoose ODM
Frontend
React.js
React Router for navigation
Chart.js for data visualization
Axios for API requests
React Toastify for notifications
Installation
Prerequisites
Node.js (v14 or higher)
npm or yarn
MongoDB Compass
Setup Steps
Clone the repository:

git clone <repository-url>
cd financial-expense-tracker
Install backend dependencies:

cd server
npm install
Create a .env file in the server directory with the following variables:

PORT=5000
MONGO_URI=mongodb://localhost:27017/financial-expense-tracker
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=30d
JWT_COOKIE_EXPIRE=30
Install frontend dependencies:

cd ../client
npm install
Start the application:

For backend:
cd server
npm run dev
For frontend:
cd client
npm start
Open your browser and navigate to http://localhost:3000

Usage
Register a new account or login with existing credentials
Use the dashboard to view your financial overview
Add new expenses or income entries
Filter transactions by month, year, or category
View charts to understand spending patterns
API Endpoints
Auth Routes
POST /api/auth/register - Register a new user
POST /api/auth/login - Login a user
GET /api/auth/me - Get current user
GET /api/auth/logout - Logout user
Expense Routes
GET /api/expenses - Get all expenses (with filters)
GET /api/expenses/:id - Get a single expense
POST /api/expenses - Create a new expense
PUT /api/expenses/:id - Update an expense
DELETE /api/expenses/:id - Delete an expense
GET /api/expenses/stats - Get expense statistics
Income Routes
GET /api/income - Get all income entries (with filters)
GET /api/income/:id - Get a single income entry
POST /api/income - Create a new income entry
PUT /api/income/:id - Update an income entry
DELETE /api/income/:id - Delete an income entry
GET /api/income/stats - Get income statistics
License
This project is licensed under the MIT License.

Acknowledgements
React.js
Node.js
Express.js
MongoDB
Chart.js
React Icons
