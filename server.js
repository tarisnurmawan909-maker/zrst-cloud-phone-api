
const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "ZRST Cloud Phone API",
    status: "online",
    note: "API test only; no Android emulator attached"
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
    androidVirtual: false
  });
});

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log(`ZRST API listening on ${port}`);
});
