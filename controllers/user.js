import UserModel from "../models/usersmodel.js";

const createUser = async (req, res)=>{
    try{
        
        const userInstance = new UserModel({
            name: req.body.name,
            email:req.body.email,
            password:req.body.password,
            userId: req.body.serId
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
    catch(err){
        console.log("error from createUser Controller");
        res.status(500).json(
            {
                message:"Failed to signUp the user",
                error:"Failed to save",
                data:err
            }
        )
    }
}


const readUser = async (req, res)=>{
    try{
        const userId = req.params.userId;
        const query = {_id:userId};
        let response = await UserModel.find(query);
        if (response.length == 0) {
            res.status(404).json({
              message: "Data fetched, nothing was found ",
              data: response,
              error: "no data found",
            });
          }else{
          res.status(200).json(
            {
                message:"User read Successfully",
                error:null,
                data:response
            }
        )  
          }
        
    }
    catch(err){
        console.log("error from readUser Controller");
        res.status(500).json(
            {
                message:"Failed to read the user",
                error:"Failed to read",
                data:err
            }
        )
    }
}

const updateUser = async ()=>{
    try{
        const userId = req.params.userId;
        const query = {_id:userId};
        let response = await UserModel.updateOne(query,req.body);
        if(response.length === 0){
            res.status(404).json({
              message: "Data fetched, nothing was found ",
              data: response,
              error: "no data found",
            });
          }else{
           res.status(200).json(
            {
                message:"User updated Successfully",
                error:null,
                data:response
            }
        ) 
        }
        
    }
    catch(err){
        console.log("error from updateUser Controller");
        res.status(500).json(
            {
                message:"Failed to update the user",
                error:"Failed to update",
                data:err
            }
        )
    }
}



export { readUser, createUser, updateUser };
