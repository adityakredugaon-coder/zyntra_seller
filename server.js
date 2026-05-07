const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");

const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

// Routes
const ProductRoutes = require("./Routes/Product_Routes");


app.use("/api/Product", ProductRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Zyntra Seller API running on port ${PORT}`);
});