const express = require("express");
const router = express.Router();
const File = require("../models/File");

// CREATE
router.post("/", async (req, res) => {
  try {
    const newFile = new File(req.body);
    const savedFile = await newFile.save();
    res.json(savedFile);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ
router.get("/", async (req, res) => {
  try {
    const files = await File.find();
    res.json(files);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//SHOW
router.get("/:id", async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    res.json(file);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedFile = await File.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedFile);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await File.findByIdAndDelete(req.params.id);
    res.json({ message: "Elemento eliminato" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
