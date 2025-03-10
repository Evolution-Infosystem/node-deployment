const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Node.js app is running!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
