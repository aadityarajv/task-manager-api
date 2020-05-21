const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_DB_URL, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
});




// const me = new User({
//     name: 'NewName',
//     email: 'mail@mail.com',
//     password: 'redothetrick',
//     age: 28
// })

// me.save().then(() => {
//     console.log(me);
// }).catch((error) => {
//     console.log('Error', error);
// });




// const newTask = new Task({
//     description: "Complete the goal",
//     completed: true
// })

// newTask.save().then(() => {
//     console.log(newTask);
// }).catch((error) => {
//     console.log(error);
// })