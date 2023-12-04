const express = require("express");
const bodyParser = require("body-parser");
const {
  paySecurityDeposit,
  payRent,
  postProperty,
} = require("./services/blockchainService");

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Pay Security Deposit
app.post("/paySecurityDeposit", (req, res) => {
  const { houseOwner, id } = req.body;
  const result = paySecurityDeposit(houseOwner, id);
  res.json({ result });
});

// Pay Rent
app.post("/payRent", (req, res) => {
  const { houseOwner, id } = req.body;
  const result = payRent(houseOwner, id);
  res.json({ result });
});

// Post Property
app.post("/postProperty", (req, res) => {
  const { depositAmount, rentAmount, tokenAddress } = req.body;
  const result = postProperty(depositAmount, rentAmount, tokenAddress);
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
