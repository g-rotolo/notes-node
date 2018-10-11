console.log("Starting app.js");

const notes = require("./notes");
const yargs = require('yargs');

const argv = yargs.argv;
let command = process.argv[2];

switch (command) {
  case "add":
    notes.addNote(argv.title, argv.body);
    break;
  case "list":
    notes.listNotes();
    break;
  case "fetch":
    notes.fetchNote(argv.title);
    break;
  case "remove":
    notes.deleteNote(argv.title);
    break;
  default:
    console.log("Command not recognized!");
    break;
}
