import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

mongoose.connect(env.MONGO_URI);
console.log("MongoDB Connected")

