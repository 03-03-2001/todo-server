const errorHandler = (err,req,res,next)=>{
   req.status(500).json({
      success:false,
      message:error.message
   })
}


module.exports= errorHandler;