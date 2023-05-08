import mongoose from "mongoose";

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        // console.log(`Connected to Mongodb database ${conn.connection.host}`)
    }catch(error) {
        console.log(`Mongoose Error ${error}`);
    }
}

export default connectDB;