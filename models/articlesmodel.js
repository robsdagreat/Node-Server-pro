import mongoose from "mongoose"

const articleSchema= new mongoose.Schema({
    title:{
        type:String,
        required: "Title is required"
    },
    
    content:{
        type:String,
        required: "Content is required"
    },

    author: {
        type:String,
        required: false
    },
    
    image:{
        type: String,
        required: false
    },
    comment:{
        type: Array,
        default: [],
        
    }
})

export default mongoose.model("articles", articleSchema);