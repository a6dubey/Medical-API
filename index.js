const express = require("express");
const app = express();
const dotenv = require("dotenv");

const cors = require("cors");
const connectDB = require("./config/mongoose");
dotenv.config();
var port = process.env.PORT 

connectDB();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => res.send("Hello"));

app.use("/doctors", require("./routes/doctor"));
app.use("/patients", require("./routes/patient"));
app.use("/reports", require("./routes/report"));

app.listen(port, (error) => {
   if (error) {
      console.log("error in the port");
   }
   console.log(
      `HEY! SERVER IS RUNNING on Link :  http://localhost:${process.env.PORT}`
   );
});

