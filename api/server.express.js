const express = require("express");
const app = express();
app.get("/getAll", (req, res) => {
  try {
    const dataDb = [{ gt: ["lucas", "alex", "carlos", "ray", "samuel"] }];
    res.status(200).json(dataDb);
  } catch (e) {
    console.error(e);
  }
});
const port = 3000;
app.listen(port, () => {
  console.log("meu servidor está rodando na porta " + port);
});
