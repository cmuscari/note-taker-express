const fs = require("fs");
const path = require("path");



function saveNewNote(body, savedNotesArray) {
  const newNote = body;
  savedNotesArray.push(newNote);
  fs.writeFileSync(
    path.join(__dirname, "../data/db.json"),
    JSON.stringify({ savedNotesArray }, null, 2)
  );
  return newNote;
}


module.exports = saveNewNote;