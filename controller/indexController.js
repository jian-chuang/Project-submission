let indexController = {};
indexController.index = (req,res)=>{
    res.render('index.html')
}
indexController.root = (req,res)=>{
    res.redirect("/index")
}
module.exports = indexController