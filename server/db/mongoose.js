var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ToDoApp').then((res) => {
    console.log(`Successful connection`);
}, (e) => {
    console.log(`Unable to connect database`);
});

module.exports = {
    mongoose
};