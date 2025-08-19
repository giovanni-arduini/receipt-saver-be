const express = require("express");
const router = express.Router();
const Folder = require("../models/Folder");

// Read folders
router.get("/", async (req, res) => {
  try {
    const folders = await Folder.find();
    res.json(folders);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Show folder
router.get("/:id", async (req, res) => {
  try {
    id = parseInt(req.params.id);
    const folderToDelete = await Folder.findOneAndDelete(id);

    if (!folderToDelete)
      return res.status(404).json({ error: "Cartella non trovata" });

    res.json({ message: "Cartella eliminata", file: folderToDelete });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
});

//Create new folder
router.post("/", async () => {
  try {
    const lastFolder = await Folder.findOne().sort({ id: -1 });
    const nextId = lastFolder ? lastFolder.id + 1 : 1;

    const newFolder = new Folder({
      ...req.body,
      id: nextId,
      createdAt: new Date(),
    });

    const savedFolder = await newFolder.save();
    res.json(savedFolder);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
});

// Update folder
router.put("/:id", async (req, res) => {
  try {
    const updatedFolder = await Folder.findOneAndUpdate(
      { id: parseInt(req.params.id) },
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updatedFolder)
      return res.status(404).json({ error: "File non trovato" });

    res.json(updatedFolder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
