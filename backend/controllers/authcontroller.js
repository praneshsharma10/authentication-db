import User from "../models/user.js";
import bcrypt from 'bcryptjs';

export const signup = async (req , res) =>{
    const { name , email , password } = req.body ;
    try {
        if(!name || !email || !password){
            return res.status(400).json({message : "All fields are required"})
        }
        const userALreadyExists = await User.findOne({email});
        if(userALreadyExists){
            return res.status(400).json({message : "User already exists"})
        }

        const hashedPassword = await bcrypt.hash(password, 10);


        
    } catch (error) {
        
    }
}

export const login = (req , res) =>{
    res.send("login route")
}

export const logout = (req , res) =>{
    res.send("logout route")
}