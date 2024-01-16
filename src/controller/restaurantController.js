import sequelize from "../models/connect.js"
import initModels from "../models/init-models.js";

const conn = initModels(sequelize);




const getlistrateresld=async (req,res)=>{
    try{
        let {resId} = req.params;
        let data = await conn.rate_res.findAll({
            where:{
                res_id : resId
            }
        })
        res.send(data)
    }catch(error){
        res.send(error)
    }
}

const getlistlikeresld=async(req,res)=>{
    try{
        let {resId} = req.params;
        let data = await conn.like_res.findAll({
            where:{
                res_id : resId
            }
        })
        res.send(data)
    }catch(error){
        res.send(error)
    }
}

export{
    getlistrateresld,
    getlistlikeresld,
}