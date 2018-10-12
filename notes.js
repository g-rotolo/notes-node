const fs = require('fs');

const getNotes = () => {
  try {
    const notes = fs.readFileSync('notes-data.json');

    return JSON.parse(notes);
  } catch(e) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

const addNote = (title, body) => {
  console.log('Adding a new note...');
  let notes = getNotes();
  let duplicatedNote;

  const newNote = {
    title: title,
    body: body
  };

  duplicatedNote = notes.find(note => note.title === title);

  if(!duplicatedNote) {
    console.log(`Note: ${title} was successfully added`);
    notes.push(newNote);
    saveNotes(notes);
  } else {
    console.log('Note title has already been taken.');
  }

};

const listNotes = () => {
  console.log("Listing all notes...");

  const notes = getNotes();
  if (notes.length === 0) console.log('You dont have any note...');
  if (notes.length > 0) notes.forEach(note => logNote(note));
};

const fetchNote = (title) => {
  console.log("Fetching a note...");
  let note;

  const notes = getNotes();

  note = notes.find(note => note.title === title);

  if(note) {
    logNote(note);
  } else {
    console.log(`Note with title: ${title} not found.`);
  }
};

const deleteNote = (title) => {

  console.log("Deleting a note...");
  let noteIndex;

  const notes = getNotes();
  if (notes.length === 0) {
    console.log('You dont have any note...');
  } else {
    noteIndex = notes.findIndex(note => note.title === title);

    if(noteIndex !== -1) {
      notes.splice(noteIndex, 1);
      saveNotes(notes);
      console.log(`Note with title: ${title} was successfully deleted`);
    } else {
      console.log(`Note with title: ${title} not found.`);
    }
  }
}

const logNote = (note) => {
  console.log('------------------');
  console.log(`Title: ${note.title} \nContent: ${note.body}`);
}

module.exports = {
    addNote,
    listNotes,
    fetchNote,
    deleteNote
}
