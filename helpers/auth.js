module.exports.checkAuth = function(req, res, next){

    const userId = req.session.userid

    //if the user is not in session then
    if(!userId){
        res.redirect('/login')
    }
    
    //if the user is logged in then proceed, understand? :D very good Jandson
    next()

}