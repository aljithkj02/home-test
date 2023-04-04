import mongoose from "mongoose";

const connectDB = async () => {
    const res = await mongoose.connect(process.env.MONGO_URL);
    console.log('Database connection established');
    return res;
}

export default connectDB;