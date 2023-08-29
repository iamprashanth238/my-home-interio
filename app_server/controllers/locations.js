/* home page*/
const homelist = (req, res) => {
    res.render('index', {title:'Home'});
};

/* location page */
const locationInfo = (req, res) => {
    res.render('index', {title: 'Location Info'});
};

/* Add Review page */
const addReview = (req, res) => {
    res.render('index', {title: 'Add review'});
};

module.exports = {
    homelist,
    locationInfo,
    addReview
}