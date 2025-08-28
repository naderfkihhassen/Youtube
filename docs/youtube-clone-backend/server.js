const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files (HTML, CSS, JS, images)
app.use(express.static(path.join(__dirname, ".."))); 

// Example API route (later for videos, comments, etc.)
app.get("/api/hello", (req, res) => {
  res.json({ message: "Backend is working!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
