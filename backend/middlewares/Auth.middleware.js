import jwt from "jsonwebtoken";
import "dotenv/config";
export default function authMiddleware(req, res, next) 
{
   let token = req.headers.authorization.split(" ")[1];
   if(!token)
   {
       return res.status(401).json({message:"Token not found"})
   }
   try {
    jwt.verify(token, process.env.JWT_SECRET_KEY);
    next();
   } catch (error) {
    return res.status(401).json({message:"Invalid token"})
   }
   
}