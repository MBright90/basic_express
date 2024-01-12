const home_get = (req, res) => {
    res.render('index', { title: 'Home' });
}

// about_get
const about_get = (req, res) => {
    res.render('about', { title: 'About' });
}

// contact_get
const contact_get = (req, res) => {
    res.render('contact', { title: 'Contact Me' });
}

module.exports = {
    home_get,
    about_get,
    contact_get
}
