import mongoose from "mongoose";

export const connectToDatabase = async() => {
    try{
        const connection = await mongoose.connect (process.env.MONGO_URI)
        console.log(connection)
        
        console.log('MongoDB connected : ${connection.connection.host}');

    } catch(error ){
        console.log('Error: ${error.message}');

    }
};