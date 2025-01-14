import { Request,Response,NextFunction} from "express";
import dotenv from 'dotenv'
import { setInterval } from "timers/promises";
import { request } from "http";

dotenv.config();

const generateApiValue = ():string =>{
    let key = Math.random().toString(36).substring(2,15);
    console.log("generate api key: ",key);
    return key
}

const API_KEY = process.env.API_KEY || 'TOKEN'
let apiValue :string = generateApiValue();
let lastUpdated:number = 0;

export const getApiValue = ():string=>{
    return apiValue;
}


const refreshApiValue = () =>{
    apiValue = generateApiValue();
    lastUpdated=Date.now();
    console.log(`API UPDATED: ${apiValue}`)
}

// refreshApiValue();
global.setInterval(()=>{
    refreshApiValue();
    },10*60*1000)

export const validateApiKey = (req:Request,res:Response,next:NextFunction):void=>{
    // const apikey = req.headers[''];
    const requestKey = req.headers['x-api-key'];
    console.log(requestKey)
    if(!requestKey || requestKey !== apiValue){
        res.status(401).json({message:"unauthorised : Invalid Api Key"});
        return;
    }
    next();
}