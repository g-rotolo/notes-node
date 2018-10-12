const person = {
  name: 'Tua mamma',
  age: 60
};

person.name = 'Giuseppe';

debugger; //breakpoint

// to start node in debug:
// node inspect <filename>
// in debug mode:
// n -> next line
// c -> next breakpoint or go to the end
// repl -> go the the variable inspector
// in repl mode:
// print anything just using variable name
// to exit:
// control + C


person.age = 28;
