import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DBConnection = async () => {
    const MONGO_URI = process.env.MONGO_URL;
    try {
        await mongoose.connect(MONGO_URI, {useNewUrlParser: true});
        console.log("DB Connected Successfully");
    } catch (error) {
        console.log('Error while connecting with DB ', error.messqge);
    }
}

export default DBConnection;