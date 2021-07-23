const mongoose = require("mongoose");

//Schema is for the form and to validate it
const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "{PATH} is required."],
    minlength: [2, "{PATH} must be at least {MINLENGTH} characters."]
  },
 
  

},
{ timestamps: true });

const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author


/*
Register schema with mongoose and privide a string to name the collection. This also returns a reference to our model that we can use for DB operations
*/

//Below we would get a checkbox 
// summer: {
//   type: Boolean,
//   default: false,
// },
// spring: {
//   type:Boolean,
//   default: false,
// },
// winter: {
//   type: Boolean,
//   default: false
// },
// winter: {
//   type: Boolean,
//   default: false
// }