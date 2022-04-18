const path = require("path");
const router = require("express").Router();


// route to notes page
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// route to direct back to home page if anything else is searched for
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});


module.exports = router;