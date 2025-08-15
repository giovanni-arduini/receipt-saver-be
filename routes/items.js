const express = require("express");
const router = express.Router();
const File = require("../models/File");

// CREATE
router.post("/", async (req, res) => {
  try {
    // Trova il massimo id esistente
    const lastFile = await File.findOne().sort({ id: -1 });
    const nextId = lastFile ? lastFile.id + 1 : 1;

    //  id progressivo e data attuale
    const newFile = new File({
      ...req.body,
      id: nextId,
      createdAt: new Date(),
    });

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
    const file = await File.findOne({ id: parseInt(req.params.id) });
    if (!file) return res.status(404).json({ error: "Elemento non trovato" });
    res.json(file);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedFile = await File.findOneAndUpdate(
      { id: parseInt(req.params.id) }, // cerca per id numerico
      { $set: req.body }, // aggiorna solo i campi presenti nel body
      { new: true, runValidators: true } // restituisce il documento aggiornato e applica validazioni
    );

    if (!updatedFile)
      return res.status(404).json({ error: "File non trovato" });

    res.json(updatedFile);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const deletedFile = await File.findOneAndDelete({
      id: parseInt(req.params.id),
    });

    if (!deletedFile)
      return res.status(404).json({ error: "File non trovato" });

    res.json({ message: "Elemento eliminato", file: deletedFile });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
