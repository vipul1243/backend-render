const express = require("express");
const dotenv = require("dotenv");
var cors = require("cors");
const connectionDB = require("./config/dbConnection");
const userRoute = require("./routes/userRoute");
const razorRoute = require("./routes/razorpayRoute");
const adminRoute = require("./routes/adminRoute");
const app = express();
const path = require("path");
// Allow cross-origin-policy
app.use(cors());

//Get req.body in JSON format
app.use(express.json());

// Confidentail Info
dotenv.config({ path: "./server/config.env" });

const PORT = process.env.PORT || 8000;

// Database connection
connectionDB();


// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:5173");
//   // res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });

// Routes
app.use("/api/student", userRoute);
app.use("/api/payment", razorRoute);
app.use("/api/admin", adminRoute);

const dirname = path.resolve();
app.use('/public', express.static(path.join(dirname, '/public')))

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
