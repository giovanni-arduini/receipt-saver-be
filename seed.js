// const mongoose = require("mongoose");
// require("dotenv").config();
// const File = require("./models/File");

// const filesList = [
//   {
//     name: "Dibase",
//     boughtFrom: "farmacia",
//     id: 1,
//     date: "2025-02-01",
//     category: "Ricetta",
//     number: 456,
//     payed: 20,
//     special: false,
//     folderId: null,
//   },
//   {
//     name: "Robilas",
//     boughtFrom: "farmacia",
//     id: 2,
//     date: "2025-01-01",
//     category: "Ricetta",
//     number: 234,
//     payed: 11,
//     special: true,
//     folderId: 1,
//   },
//   {
//     name: "Finestre",
//     boughtFrom: "Serramenti SRL",
//     id: 3,
//     date: "2025-02-01",
//     category: "Fattura",
//     number: 123,
//     payed: 1100,
//     special: false,
//     folderId: null,
//   },
//   {
//     name: "Cicci",
//     boughtFrom: "farmacia",
//     id: 5,
//     date: "2024-02-01",
//     category: "Fattura",
//     number: 456,
//     payed: 20,
//     special: true,
//     folderId: null,
//   },
//   {
//     name: "Picci",
//     boughtFrom: "farmacia",
//     id: 7,
//     date: "2024-02-01",
//     category: "Ricetta",
//     number: 324234,
//     payed: 34,
//     special: false,
//     folderId: 1,
//   },
//   {
//     name: "Gigi",
//     boughtFrom: "farmacia",
//     id: 8,
//     date: "2023-02-01",
//     category: "Ricetta",
//     number: 23543,
//     payed: 55,
//     special: false,
//     folderId: null,
//   },
// ];

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(async () => {
//     console.log("Connesso a MongoDB, inserisco dati...");
//     await File.deleteMany(); // pulisce la collezione
//     await File.insertMany(filesList);
//     console.log("✅ Dati inseriti!");
//     process.exit();
//   })
//   .catch((err) => console.error(err));
