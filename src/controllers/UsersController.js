const Users = require("../models/UserMode")

const getUsersController = async(req,res)=>{
    const users = await Users.find()

    res.json({
        status:true,
        message:"All Users Fetched Successfully",
        data:users
    })
}

module.exports = {getUsersController}