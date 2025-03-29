const express = require("express");
const app = express();
app.get("/getAll/:quantity", async (req, res) => {
  try {
    const quantity = req.params.quantity;
    const quantityArr = [];
    for (let i = 0; i < quantity; i++) {
      quantityArr.push(Math.floor(Math.random() * 10));
    }
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${quantityArr.join(",")}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
  }
});
const port = 3000;
app.listen(port, () => {
  console.log("meu servidor está rodando na porta " + port);
});
