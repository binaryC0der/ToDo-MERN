const errorHandler = (err,req,res,next) => {
    //If we haven't passed any statusCode then by default it will bet set to 500
    const statusCode = res.statusCode ? res.statusCode : 500; 
    res.status(statusCode);
    res.json({
        message:err.message,
        //If we are in development mode then only we would display error stack
        stack:process.env.NODE_ENV === "production" ? null : err.stack, 
    })
}

module.exports = {
    errorHandler,
}