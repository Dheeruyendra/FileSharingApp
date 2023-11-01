import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DBConnection = async () => {
    const MONGO_URL = process.env.MONGO_URL;
    try {
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
        });
        console.log("MongoDB Connected");
    } catch (error) {
        console.log('Error while connecting with DB', error.messqge);
    }
}

export default DBConnection;