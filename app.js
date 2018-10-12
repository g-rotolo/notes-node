console.log("Starting app.js");

const notes = require("./notes");
const yargs = require('yargs');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};

const argv = yargs
      .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
      })
      .command('list', 'List all notes')
      .command('fetch', 'Fetch a note', {
        title: titleOptions
      })
      .command('remove', 'Remove a note', {
        title: titleOptions
      })
      .help()
      .argv;
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
