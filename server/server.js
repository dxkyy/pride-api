const express = require("express");
const apiRouter = require("./routes");
const redirectRouter = require("./redirectroute.js");

const app = express();

app.use(express.json());

app.use("/api", apiRouter);
app.use("/", redirectRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});
