const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StudentSchema = new Schema({
 name: {
  type: String
 },
 email: {
  type: String
 },
 roll: {
  type: String
 }
});


module.exports = mongoose.model('Student', StudentSchema);
