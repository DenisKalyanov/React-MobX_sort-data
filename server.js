const json = require("./response.json");
const express = require("express");
const cors = require('cors')

const app = express();
app.use(express.json());

const port = 4000;
app.use(cors())

app.get("/operations", cors(), (req, res) => {
  res.status(200).json(json);
});

app.listen(port, () => {
  console.log(`Server was run: http://localhost:${port}`);
});
