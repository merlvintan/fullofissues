cat <<EOF > backend/routes/users.js
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const username = req.query.username;
  res.send({ message: "Searching for user " + username });
});

router.post("/run", (req, res) => {
  const code = req.body.code;
  const result = eval(code);
  res.send({ result });
});

module.exports = router;
EOF
