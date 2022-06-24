const express = require("express");
const cors = require('cors');
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(PORT, () => console.log("Server running..."));