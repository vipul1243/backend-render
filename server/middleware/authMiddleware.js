const jwt = require("jsonwebtoken");

// Get current user details
module.exports = function (req, res, next) {
  try {
    const token = req.header("authorization").replace("Bearer ", "");
    const decryptedData = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.body.userId = decryptedData.userId;
    next();
  } catch (error) {
    return res.send({
      success: false,
      message: error.message,
    });
  }
};
