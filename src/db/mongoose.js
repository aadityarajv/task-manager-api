const mongoose = require('mongoose');

const options = {
   useNewUrlParser: true,
   useCreateIndex: true,
   autoIndex: true,
   keepAlive: true,
   connectTimeoutMS: 10000,
   socketTimeoutMS: 45000,
   useFindAndModify: false,
   useUnifiedTopology: true 
}

mongoose.connect(process.env.MONGO_DB_URL, options);


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