// const person = {
//   name: 'Giuseppe',
//   age: 28
// };
//
// const personToJson = JSON.stringify(person);
// console.log(personToJson);
// const personToObj = JSON.parse(personToJson);
// console.log(personToObj);

const fs = require('fs');

const orignalNote = {
  title: 'My note title',
  body: 'My body'
}

const orignalNoteString = JSON.stringify(orignalNote);

fs.writeFileSync('notes.json', orignalNoteString);

const noteString = fs.readFileSync('notes.json');

const note = JSON.parse(noteString);

console.log(note.title);
