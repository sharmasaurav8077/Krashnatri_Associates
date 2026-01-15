import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.warn('⚠️  MONGODB_URI not found in environment variables');
}

export const connectDatabase = async () => {
  try {
    if (!MONGODB_URI) {
      console.log('📝 Database connection skipped (MONGODB_URI not configured)');
      return;
    }

    await mongoose.connect(MONGODB_URI);
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};
