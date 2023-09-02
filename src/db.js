import mongoose from "mongoose";

export const connectDB = async() =>{
    const DB = `mongodb://mongo:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:5875`
    try {
        await mongoose.connect(DB)
        console.log(">>>>DB is connected")
    } catch (error) {
        console.log(error)    
    }
}


