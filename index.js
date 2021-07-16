const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config("./.env");

const authRoutes = require("./Routes/auth");
const itemRoutes = require("./Routes/item");
const cartRoutes = require("./Routes/cart");
const orderRoutes = require("./Routes/order");

const app = express();
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", itemRoutes);
app.use("/api", cartRoutes);
app.use("/api", orderRoutes);
// used in production to serve client files
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// connecting to mongoDB and then running server on port 4000

const port = process.env.PORT || 4000;
mongoose
  .connect(process.env.dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => app.listen(port))
  .then(() => console.log(`Server running on port ${port}`))
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log(err));
