import express from "express"
import { createLike,  createUnlike,  createrate,  getUser, getlistlike, getratebased, getuserid, order } from "../controller/userController.js";

const userRoutes = express.Router();




userRoutes.get("/get-user",getUser) 
userRoutes.post("/like",createLike)
userRoutes.delete("/unlike/:likeId",createUnlike)
userRoutes.get("/get-list-like/:userId",getlistlike)
userRoutes.get("/user-id",getuserid)
userRoutes.get("/get-list-userid/:userId",getratebased)
userRoutes.post("/order",order)
userRoutes.post("/create-rate",createrate)
export default userRoutes