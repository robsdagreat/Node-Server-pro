const createNames= (request,response)=>{
    let n= request.query.name
    let body= request.body
    response.send([n,body])
}

const updateNames= (req,res)=>{
    res.send("this is the update names controller")
}

const deleteNames= (req,res)=>{
    res.send("this is the delete names controller")
}

export {createNames,updateNames,deleteNames}