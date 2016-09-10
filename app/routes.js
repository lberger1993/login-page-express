var User = require('./models/user');



module.exports = function (app) {

    // api ---------------------------------------------------------------------
    
    app.post('/api/create_user', function (req, res) {
       
        // Creates a user with email 
        
        User.create({
            email_address: req.body.email_address
        }, function (err, todo) {
            if (err)
                res.send(err);
            // get and return all the todos after you create another
            
        });

    });


    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};