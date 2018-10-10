const notes = [];

const addNote = (title, body) => {
  const newNote = {
    title: title,
    body: body
  };
  notes.push(newNote);
  console.log(notes);
};

const listNotes = () => {
  console.log(notes);
  notes.map((note, index) => {
    console.log(`${index}. ${note.title} \n ${note.body}`);
  });
};

module.exports = {
    addNote,
    listNotes
}
