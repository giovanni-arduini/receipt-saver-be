const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  bounghtFrom: { type: String, required: false },
  date: { type: String, required: true },
  category: { type: String, required: true },
  number: { type: String, required: false },
  payed: { type: Number, required: true },
  special: { type: Boolean, required: true },
  folderId: { type: Number },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("File", FileSchema);
