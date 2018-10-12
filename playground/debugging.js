const person = {
  name: 'Tua mamma',
  age: 60
};

person.name = 'Giuseppe';

debugger; //breakpoint

// if started with nodemon instead of node
// the debugger will react to changes in real time

// to start node in debug using terminal:
// node inspect <filename>
// in debug mode:
// n -> next line
// c -> next breakpoint or go to the end
// repl -> go the the variable inspector
// in repl mode:
// print anything just using variable name
// to exit:
// control + C

// to start node in debug mode using chrome:
// node --inspect-brk <filename>
// then open chrome at:
// chrome://inspect
// click on Open dedicated devTools
// Enjoy


person.age = 28;
