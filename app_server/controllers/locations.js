/* home page*/
const homepage = (req, res) => {
    res.render('index', {title:'My-Home-Interio'});
};

module.exports = {
    homepage
}