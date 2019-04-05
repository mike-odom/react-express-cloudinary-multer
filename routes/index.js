const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  console.log('env: ', process.env.NODE_ENV);
  console.log('req: ', req.url);
  if (process.env.NODE_ENV == 'production') {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  } else {
    res.send("Woah, check your route dude. It's whack: " + req.method + " " + req.url);
  }
});

module.exports = router;
