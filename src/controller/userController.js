
import sequelize from "../models/connect.js"
import initModels from "../models/init-models.js";

const conn = initModels(sequelize);







const getUser = (req,res)=> {
    res.send("get user");
}

const createLike = async(req,res)=>{
    try{
        let {userId,res_id} = req.body;
        let newlike={
            user_id : userId,
            res_id : res_id,
            date_like:new Date()
        }
        await conn.like_res.create(newlike);
        res.send("create successfull")



       
    }catch(error){
res.send(error)
    }
    
}

const createUnlike = async(req,res) =>{
    try {
        let { likeId} = req.params;
        await conn.like_res.destroy({
          where: {
            like_id: likeId,
          },
        });
        res.send("Delete successful");
      } catch (error) {
        res.send(`Error: ${error}`);
      }
    };

const getlistlike=async(req,res)=>{
    try{
        let {userId} = req.params;
        let data = await conn.like_res.findAll({
            where:{
                user_id : userId
            }
        })
        res.send(data)
    }catch(error){
        res.send(error)
    }
   
}
const getuserid=(req,res)=>{
    res.send("getuserid")
}
const getratebased=async(req,res)=>{
    try{
        let {userId} = req.params;
        let data = await conn.rate_res.findAll({
            where:{
                user_id : userId
            }
        })
        res.send(data)
    }catch(error){
        res.send(error)
    }
   

}
const order=async(req,res)=>{
     try {
        let { code, arrSubId, userId, resId, amount, dateOrder } = req.body;
        let newOrder = {
          code,
          arr_sub_id: arrSubId,
          user_id: userId,
          res_id: resId,
          amount,
          date_order: dateOrder,
        };
        await conn.orders.create(newOrder);
        res.send(newOrder);
      } catch (error) {
        res.send(`BE error: ${error}`);
      }
}
const createrate=async(req,res)=>{
    try{
        let {user_id,res_id,amount} = req.body;
        let newrate={
            user_id : user_id,
            res_id : res_id,
            date_res:new Date(),
            amount:amount
        }
        await conn.rate_res.create(newrate);
        res.send("create successfull")



       
    }catch(error){
res.send(error)
    }
}


export {
    getUser,
    createLike,
    createUnlike,
    getlistlike,
    getuserid,
    getratebased,
    order,
    createrate,
}