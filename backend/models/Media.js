const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  type: String, // photo, video, gif
  title: String,
  url: String,
  uploader: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  likes: Number,
  downloads: Number,
});

module.exports = mongoose.model('Media', mediaSchema);