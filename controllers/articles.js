import ArticleModel from '../models/articlesmodel.js' 

let comment =[{
    name:'Robert John',
    comment:'This is a nice post'
}]


    const createArticle= (req,res)=>{
        try{
            // const data= req.body;
            const articleInstance= new ArticleModel({
                title:req.body.title,
                content:req.body.content,
                author:req.body.author || "Robs_dagreat",
                image: req.body.image,
                comment:comment
            });
            articleInstance.save()
            .then((data)=>{
                res.status(200).json({
                    message: "Data saved successfully",
                    error: "Error saving the Data",
                    data: data
                })
            }) 
        }
        catch(err){
            console.log("this is the error form createArticle Controller ", err)
            res.status(500).send({message: "Failed to save the data"})
         }




    // const commmentArticle= (req,res)=>{
    //     try{
    //         // const data= req.body;
    //         const articleInstance= new ArticleModel({
    //             title:req.body.title,
    //             content:req.body.content,
    //             author:req.body.author || "Robs_dagreat",
    //             image: req.body.image
    //         });
    //         articleInstance.save()
    //         .then((data)=>{
    //             res.status(200).json({
    //                 message: "Data saved successfully",
    //                 error: "Error saving the Data",
    //                 data: data
    //             })
    //         }) 
    //     }
    //     catch(err){
    //         console.log("this is the error form createArticle Controller ", err)
    //         res.status(500).send({message: "Failed to save the data"})
    //      }

    }



//This how you can use async and await to post in mongoDB instead of using .then (promise) 


    // const createArticle= async (req,res)=>{
    //     try{
    //         // const data= req.body;
    //         const articleInstance= new ArticleModel({
    //             title:req.body.title,
    //             content:req.body.content,
    //             author:req.body.author || "Robs_dagreat",
    //             image: req.body.image
    //         });
    //      let data= await articleInstance.save()
            
    //             res.status(200).json({
    //                 message: "Data saved successfully",
    //                 error: "Error saving the Data",
    //                 data: data
    //             })
        
    //     }
    //     catch(err){
    //         console.log("this is the error form createArticle Controller ", err)
    //         res.status(500).send({message: "Failed to save the data"})
    //      }

    // }


 


const readArticle= async (req,res)=>{
    try{
        const blogId= req.params.reqId
        const query= {_id:blogId};
        const response= await ArticleModel.find(query);
        
        if(response.length == 0){
            res.status(404).json({
                message: "Data fetched but nothing was found",
                error: "No Data found",
                data: response,
            },)
        } else{
            res.status(200).json({
                message: "Data fetched successfully",
                error: null,
                data: response,
            })
        }   

    }
    catch(err){
        console.log("Error occured in the readArticle controller", err);
        res.status(500).json({
            message: "Failed to read the data",
            error: "Error fetching the data",
            data: []
        })
     }
   
}




const readArticlelimit= async (req,res)=>{
   try{const page= req.query.page;
    const range= req.query.limit;

    let limitation= range * page;
    let start= limitation - range;

    let response= await ArticleModel.find({}).skip(start).limit(range);
    res.status(200).json({
        message: "Data fetched successfully",
        error: null,
        data: response
    });
    
    }

    catch(err){
        console.log("Error under the readArticleLimited")
        res.status(500).json({
            message: "Failed to read the articles specified",
            error: "internal error server",
            data:null
        })
    }


}



    const updateArticle= async(req,res)=>{
        try{  const articleId= req.params.articleId;
            const updates= req.body;
            let found= await ArticleModel.find({_id:articleId});
            if(found.length == 0){
                res.status(404).json({
                    message: "Article trying to update is not available",
                    error: "Article not found",
                    data: null
                });
    
            } else{
                let result= await ArticleModel.findOneAndUpdate(
                    {_id:articleId},
                    {$set:updates}
                )
                res.status(200).json({
                    message: "Article updated succcessfully",
                    error: null,
                    data: result
                })
            }
        }

        catch(err){
            console.log("Error updating the Article");
            res.status(500).json({
                message: "Failed to update the articles specified",
                error: "internal error server",
                data:null
            })
        }
        }
      

    

    
   







const createUser= (req,res)=>{
    try{
        res.send("this is the user create controllers")
    }
    catch(err){
        console.log("this is the error controllers", err)
     }
    
}

const readUser= (req,res)=>{
    try{
        res.send("this is the user read controllers")
    }
    catch(err){
        console.log("this is the error controllers", err)
     }
    
}

const updateUser= (req,res)=>{
    try{
        res.send("this is the user update controllers")
    }
    catch(err){
        console.log("this is the error controllers", err)
     }
    
}

// const deleteUser= async (req,res)=>{
//   try{
//       const articleId= req.params.articleId;
//       const found= await articleSchema.find()
//     }
//     catch(err){
//          console.log("this is the error controllers", err)
//      }
    
// }

export  {createArticle, readArticle, createUser, readUser, updateArticle, readArticlelimit} 