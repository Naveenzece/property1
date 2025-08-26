import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import propertyRoutes from './src/routes/properties.js';
import connectDB from './src/config/db.js';
import { fileURLToPath } from 'url';
import path from 'path';


dotenv.config();

// Connect to database
connectDB();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve uploaded images as static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v1/properties', propertyRoutes);

// Test route
//app.get('/', (req, res) => {
//  res.send('API is running...');
//});


app.get('/', (req, res) => {
  res.send('Backend is another instance running successfully');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
