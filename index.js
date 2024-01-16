// npm i express nodemon mysql12 sequelize sequelize-auto 
import express from "express";
import rootRoutes from "./src/routes/rootRoutes.js";



const app = express();

app.use(express.json());
app.use(rootRoutes);
// import rootRoutes

app.listen(8080,() =>{
    console.log("Starting with port 8080");
})