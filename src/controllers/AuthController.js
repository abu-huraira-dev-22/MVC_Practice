const signupController = async(req,res) =>{
    res.json({
        status:true,
        message:"User Signed up Successfully"
    })
}

const loginController = async(req,res) =>{
    res.json({
        status:true,
        message:"User logged in Successfully"
    })
}

module.exports = {signupController,loginController}