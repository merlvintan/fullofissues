cat <<EOF > backend/middleware/auth.js
const jwt = require("jsonwebtoken");

const SECRET = "supersecret123";

module.exports = function (req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.status(401).send("No token provided");

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return res.status(403).send("Invalid token");
    req.user = decoded;
    next();
  });
};
EOF
