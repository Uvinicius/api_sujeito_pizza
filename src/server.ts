import express, { Request, Response ,NextFunction } from "express";
import "express-async-errors";
import { routes } from "./routes";
import cors from "cors";


const app = express(); 
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/api", routes);


app.use((err:Error, req:Request, res:Response, next:NextFunction)=>{
    if(err instanceof Error){
        return res.status(400).json({
            error:err.message
        })
    }
    
    return res.status(500).json({
        status:'error',
        message:"Internal server error."
    })

})


app.listen(3333, () => console.log('Node.js Running ...'));
