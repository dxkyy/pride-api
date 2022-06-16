const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("https://github.com/dxkyy/pride-api");
});

module.exports = router;
