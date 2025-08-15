const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connessione a MongoDB
async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connesso a MongoDB");
  } catch (err) {
    console.error("❌ Errore di connessione:", err);
  }
}

// Rotte
const filesRoute = require("./routes/files");
const foldersRoutes = require("./routes/folders");

app.use("/api/files", filesRoute);
app.use("/api/folders", foldersRoutes);

// Avvio server
connect();
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server in ascolto sulla porta ${process.env.PORT}`);
});
