const fs = require('fs');

const addNote = (title, body) => {
  let notes = [];
  const newNote = {
    title: title,
    body: body
  };

  fs.readFile('notes-data.json', 'utf8', (error, data) => {
    if(error) {
      console.log('Creating new text file...');
    } else {
      console.log("Adding a new note...");
      notes = JSON.parse(data);
    }
    notes.push(newNote);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  });

};

const listNotes = () => {
  fs.readFile('notes-data.json', 'utf8', (error, data) => {
    if (error) throw new Error('You dont have any note...');

    console.log("Listing all notes...");
    
    const notes = JSON.parse(data);

    notes.map((note, index) => {
      if(index === 0) console.log('----------------------------------------------');
      console.log(`Title: ${note.title} \nContent: ${note.body}`);
      console.log('----------------------------------------------');
    })
  });
};

module.exports = {
    addNote,
    listNotes
}
