module.exports = function(req,res,next){
	console.log(`Ip client ${req.connection.remoteAddress}`);
	next();
}; 
