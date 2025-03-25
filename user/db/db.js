const mongoose = require('mongoose');

function connect(){
    mongoose.connect(process.env.MONGODB_URL).then(() =>{
        console.log("database connected");
    }).catch(err=>{
        console.log(err);
        
    })
}

module.exports = connect;