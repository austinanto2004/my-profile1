import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://austinantoinatius:<db_password>@austi.pnw01.mongodb.net/?retryWrites=true&w=majority&appName=austi")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));

