var mongoose = require('mongoose');
var parkSchema = new mongoose.Schema({
  name: String,
  townCity: String,
  description: String,
  lat: Number,
  lng: Number
});
module.exports = mongoose.model('Park', parkSchema);
