const express = require("express");
const sexualities = require("../db/sexualities");
const genders = require("../db/gender");

const router = express.Router();

router.get("/sexuality", (req, res) => {
  res.send(sexualities);
});
router.get("/sexuality/:search", (req, res, next) => {
  const search = req.params.search;
  if (search) {
    res.send(
      sexualities.filter((s) =>
        s.name.toLowerCase().includes(search.toLowerCase())
      )
    );
    return;
  }
  res.status(200).json(sexualities);
});

router.get("/gender", (req, res) => {
  res.send(genders);
});
router.get("/gender/:search", (req, res) => {
  const search = req.params.search;
  if (search) {
    res.send(
      genders.filter((s) => s.name.toLowerCase().includes(search.toLowerCase()))
    );
    return;
  }
  res.status(200).json(genders);
});
module.exports = router;
