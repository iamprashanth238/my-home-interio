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

// register page
const registerpage = (req,res) => {
    res.render('register', {title:'register'});
};


module.exports = {
    homepage,
    gallerypage,
    aboutpage,
    registerpage
}