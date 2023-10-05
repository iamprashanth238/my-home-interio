const models = require('../../app_api/models/user');
/* home page*/
const homepage = (req, res) => {
    res.render('index', {title:'My-Home-Interio'});
};

// gallery page
const gallerypage = (req, res) => {
    res.render('gallery', {title:'gallery'});
};

// about page
const aboutpage = (req, res) => {
    res.render('about', {title:'about'});
};

// GET register page
const registerpage = (req,res) => {
    res.render('register', {title:'register'});
};
//POST register page
const registerr = function(req,res){
    try{
    models.collection.insertOne({
        name:"sample",
        email:"Helloworld",
        number:"1234567890"  });
    }
    catch(err){
        console.log(err);
    }
    res.render("success",{title:'Success'});


}

//sucess page
const successpage = (req, res) => {
    res.render('success', {title:'success'});
}


module.exports = {
    homepage,
    gallerypage,
    aboutpage,
    registerpage,
    successpage,
    registerr
}