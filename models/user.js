let mongoose = require('mongoose');

// Article Schema
let recipeSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  address:{
    type: String,
    required: true
  },
  contact:{
    type: String,
    required: true
  },
  email:{
    type:String,
    required:true
  }

});

let User = module.exports = mongoose.model('User', recipeSchema);
