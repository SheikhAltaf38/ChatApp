import express from "express"

const router = express.Router()

router.get("/signup",(req,res)=>{
    res.send("Signup Point")
})

router.get("/login",(req,res)=>{
    res.send("login Point")
})

router.get("/logout",(req,res)=>{
    res.send("logout Point")
})

export default router;