import express from "express"
import authRoute from "./route/auth.js"
import path from "path"
import dotenv from "dotenv"

const server = express()

server.use("/api/auth",authRoute);

const __dirname= path.resolve()

if(process.env.NODE_ENV === "production"){

    server.use(express.static(path.join(__dirname,"../../frontend","dist")));

    server.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"../../frontend","dist","index.html"))
    });
}

server.listen(4000,()=>{
    console.log("server is running on port"+ 4000)
})