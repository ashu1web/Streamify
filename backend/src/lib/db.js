import mongoose, { mongo } from "mongoose";


const connectDb=async()=>{
    try{
        mongoose.connect(process.env.MONGODB_URL)
        console.log("Mongodb connected")
    }catch(error){
        console.log("Mongodb connection error->",error)
        process.exit(1)
    }
}

export default connectDb