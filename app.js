console.log("Starting app.js");

const notes = require("./notes");
const yargs = require('yargs');

const argv = yargs.argv;
let command = process.argv[2];

switch (command) {
  case "add":
    console.log("Adding a new note...");
    notes.addNote(argv.title, argv.body);
    break;
  case "list":
    console.log("Listing all notes...");
    notes.listNotes();
    break;
  case "read":
    console.log("Fetching note...");
    break;
  case "remove":
    console.log("Removing note...");
    break;
  default:
    console.log("Command not recognized!");
    break;
}
