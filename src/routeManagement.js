const userRoutes = require('./controllers/userController');

const apiVersion = '/api';

function RegisterAllRoutes(app){

    app.use(apiVersion,userRoutes)
}

// Export the function so it can be used in other files
module.exports = {
    RegisterAllRoutes: RegisterAllRoutes
};






