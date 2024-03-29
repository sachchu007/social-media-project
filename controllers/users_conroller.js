const User = require('../models/user')

module.exports.profile = function (req, res) {
    return res.render('user_profile', {
        title: 'User Profile'
    })
};
//to render signup page
module.exports.signUp = function (req, res) {
    return res.render('user_sign_up', {
        title: "buzz | Sign Up"
    })
};
//to render signin page
module.exports.signIn = function (req, res) {
    return res.render('user_sign_in', {
        title: "buzz | Sign In"
    })
};
//get the data from sign-up page
module.exports.create = function (req, res) {
    if (req.body.password != req.body.confirm_password) {
        return res.redirect('back');
    }

    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) {
            console.log('error in finding user in signing up');
            return;
        }
        if (!user) {
            User.create(req.body, function (err, user) {
                if (err) {
                    console.log('error in creating user while signing up');
                    return;
                }

                return res.redirect('/users/sign-in')
            })
        } else {
            return res.redirect('back');
        }
    });
};
module.exports.createSession = function (req, res) {

};
