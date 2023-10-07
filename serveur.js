const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "index.html");
  res.sendFile(filePath);
});

app.get("/style", (req, res) => {
  const filePath = path.join(__dirname, "style.css");
  res.sendFile(filePath);
});

app.get("/js", (req, res) => {
    const filePath = path.join(__dirname, "index.js");
    res.sendFile(filePath);
});

app.listen(port, () => {
  console.log(`Serveur Express en cours d'exécution sur le port ${port}`);
});
