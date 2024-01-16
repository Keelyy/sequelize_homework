import express from "express"
import { getlistlikeresld, getlistrateresld } from "../controller/restaurantController.js";


const restaurantRoutes=express.Router();

restaurantRoutes.get("/getlist-rate/:resId",getlistrateresld)
restaurantRoutes.get("/getlist-like/:resId",getlistlikeresld)
export default restaurantRoutes