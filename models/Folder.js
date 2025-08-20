const mongoose = require("mongoose");

const FolderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  id: { type: Number, required: true },
  date: { type: Date, required: true },
  category: { type: String, reuquired: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Folder", FolderSchema);
