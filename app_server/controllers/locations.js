/* home page*/
const homepage = (req, res) => {
    res.render('index', {title:'My-Home-Interio'});
};

const designpage = (req, res) => {
    res.render('design',{title:"Design Interio"});
};

const signuppage = (req, res) => {
    res.render('signup',{title:"Sign Up"});
};

const signinpage = (req, res) => {
    res.render('signin',{title:'Sign in'});
};

module.exports = {
    homepage,
    designpage,
    signuppage,
    signinpage
}