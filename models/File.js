const mongoose = require("mongoose");
const Counter = require("./Counter.js");

const FileSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  boughtFrom: { type: String, required: false },
  date: { type: String, required: true },
  category: { type: String, required: true },
  number: { type: String, required: false },
  payed: { type: Number, required: true },
  special: { type: Boolean, required: true },
  folderId: { type: Number },
  createdAt: { type: Date, default: Date.now },
});

FileSchema.pre("save", async function (next) {
  if (this.isNew) {
    const counter = await Counter.findOneAndUpdate(
      { name: "fileId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
    this.id = counter.seq;
  }
  next();
});

module.exports = mongoose.model("File", FileSchema);
