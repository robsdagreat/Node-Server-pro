import express  from "express"
import cors from "cors"
import welcome from "./controllers/welcome.js"
import articles from "./routes/articles.js";
import names from "./routes/articles.js";
import users from './routes/users.js'
import mongoose from "mongoose"



const app= express();
app.use(cors());

const connect= ()=>{
    mongoose.connect("mongodb+srv://robs:robs@cluster0.cjzod8h.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
console.log("connected to mongdb")
})
.catch((error)=>{
    console.log(" can't connected to mongdb",error)
})
}




app.get("/api/v1", welcome );

app.use("/api/v1/articles", articles)

app.use("/api/v1", names);

app.use("api/v1/users", users)


const port= 3000;
app.listen(port,()=>{
    console.log("congs your server is running on port" + port);
    connect()
})
