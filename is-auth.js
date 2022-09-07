const jwt = require("jsonwebtoken");

const isAuth = (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    req.isAuth = false;
    console.log("authHeader");
    return next();
  }

  const token = authHeader.split(" ")[1];
  if (!token || token === "") {
    req.isAuth = false;
    console.log("token");
    return next();
  }

  let decodedToken;
  try {
    decodedToken = jwt.verify(token, "somesupersecretkey");
  } catch (err) {
    req.isAuth = false;
    console.log("decodedToken");
    return next();
  }
  if (!decodedToken) {
    req.isAuth = false;
    console.log("decodedToken");
    return next();
  }
  req.isAuth = true;
  req.userId = decodedToken.userId;
  next();
};

module.exports = isAuth;
