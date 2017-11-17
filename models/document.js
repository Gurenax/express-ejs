let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// Document Schema
let DocumentSchema = new Schema({
  title: {type: String, required: true, max: 100},
  body: {type: String, required: true, max: 500},
  created_at: {type: Date},
});

// URL Virtual property
DocumentSchema.virtual('url').get(function () {
  return '/document/' + this._id;
});

// Export Model
module.exports = mongoose.model('Document', DocumentSchema);