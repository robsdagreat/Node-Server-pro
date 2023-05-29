import UserModel from "../models/usersmodel.js";
import loginModel from "../models/usersmodel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


const signUp = async (req,res)=>{
    try{
        let input=req.body
        const salt= await bcrypt.genSalt(8);
        const hashedPassword = await bcrypt.hash(input.password, salt)
        input.password= hashedPassword;

        const auth= await UserModel.findOne({email:input.email});
        if(auth){
            res.status(409).json({
                message: "User already exists"
            })
        }
        const userInstance = new UserModel({
            name: input.name,
            email:input.email,
            password:input.password
        });
        
        let response = await userInstance.save();

         res.status(200).json(
                {
                    message:"User signed up Successfully",
                    error:null,
                    data:response
                }
            )

    }
    catch(error){
        console.log("error from createUser Controller");
        res.status(500).json(
            {
                message:"Failed to signUp the user",
                error:"Failed to save",
                data:error
            }
        )
    }
}
 

const signIn= async (req,res)=>{
    try{
        const input= req.body 
        const userVerify= await loginModel.findOne({email:input.email});
        const log = await bcrypt.compare(input.password, userVerify.password);
        if(log){
            let userId= log._id
            let token= jwt.sign({userId}, "Tekcode");
            
            res.status(200).json({
                message: "user logged in successfully",
                error: null,
            })
        }else{
           res.status(401).json({
            message: "Invalid email or password",
            error: "Authentication failed"
           });
        }
    }
    catch(error){
        res.status(500).json({
            message: "Errror occered during log in",
            error: error
        })
    }
}



export {signIn,signUp}
