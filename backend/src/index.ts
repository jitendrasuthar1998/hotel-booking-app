import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";

const app = express();
// express.json() converts api response into JSON automatically
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get("/api/test",async(req:Request,res:Response)=>{
    res.json({message:"Hello from express endpoint!"});
})

app.listen(5000,()=>{
    console.log("Server running on port",5000);
})


