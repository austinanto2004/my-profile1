import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

mongoose.connect(mongodb+srv://austinantoignatius:<db_password>@austi.pnwo1.mongodb.net/?retryWrites=true&w=majority&appName=austi
);
console.log("MongoDB Connected")

