import express from "express"
import authRoute from "./route/auth.js"
const server = express()

server.use("/api/auth",authRoute);

server.listen(4000,()=>{
    console.log("server is running on port"+ 4000)
})