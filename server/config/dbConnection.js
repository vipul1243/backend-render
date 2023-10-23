const mongoose = require("mongoose");

const connectionDB = async () => {
  try {
    const connectDB = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology:true,
    });
    console.log(`MongoDB connected ${connectDB.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectionDB;