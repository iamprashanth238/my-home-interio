/* home page*/
const homepage = (req, res) => {
    res.render('index', {title:'My-Home-Interio'});
};

const designpage = (req, res) => {
    res.render('design',{title:"Design Interio"});
};

module.exports = {
    homepage,
    designpage
}