import User from "../models/user.js";
import bcrypt from 'bcryptjs';
import { generateVerificationToken } from "../utils/generateVerificationToken.js";
import { generateJWTToken } from "../utils/generateJWTToken.js";


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

        const verificationToken = generateVerificationToken();
        const newUser = new User({
            name,
            email,
            password : hashedPassword,
            verificationToken : verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 *60 * 1000 // for 24 hours
        })

        await user.save();

        generateJWTToken(res, user._id);

        res.status(201).json({
            success:true,  
            message : "User created successfully",

            user : {
                ...user._doc, // this will return all the fields of the user
                password : "undefined" // this will hide the password field
            },
            token : res.token
        });
 
    } catch (error) { // if any error occurs
        res.status(500).json({success: false , message : "Internal server error"}) // 500 is internal server error
        
    }
}

export const login = (req , res) =>{
    res.send("login route")
}

export const logout = (req , res) =>{
    res.send("logout route")
}