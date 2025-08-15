const express = require("express");
const router = express.Router();
const Folder = require("../models/Folder");

//Create new folder

router.post("/", async () => {
  try {
    const lastFolder = await File.findOne().sort({ id: -1 });
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

// Show folder

router.get("/", () => {});

module.exports = router;
