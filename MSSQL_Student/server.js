const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());
const routes = require("./routes/student");
//middleaware
app.use(express.json());
require("dotenv").config();

//middleaware
app.use("/api/v1", routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`);
});
