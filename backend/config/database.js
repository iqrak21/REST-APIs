const mongoose = require("mongoose");


const connectDatabse =()=>{
    
mongoose.connect("mongodb://localhost:27017/RestApis",{useNewUrlParser:true}).then((data)=>{
    console.log(`mongodb connected with server: ${data.connection.host} `);
}).catch((err)=>{
    console.log(err)
})
}

module.exports = connectDatabse