export interface Question {
  question: string;
  options: string[];
  answer: string;
}

const questions: Question[] = [
 {
    question: 'Which of the following is not a JavaScript data type?',
    options: ['Number', 'String', 'Boolean', 'Float'],
    answer: 'Float'
  },
  {
    question: 'What is the output of the following code? console.log(typeof null);',
    options: ['null', 'object', 'undefined', 'string'],
    answer: 'object'
  },
  {
    question: 'Which method is used to add elements at the end of an array in JavaScript?',
    options: ['push()', 'pop()', 'shift()', 'unshift()'],
    answer: 'push()'
  },
  {
    question: 'What does the "use strict" directive do in JavaScript?',
    options: ['Enforces stricter parsing and error handling', 'Enables strict mode for faster execution', 'Enables additional debugging features', 'None of the above'],
    answer: 'Enforces stricter parsing and error handling'
  },
  {
    question: 'Which of the following is a valid way to define a component in React?',
    options: ['class MyComponent extends React.Component', 'const MyComponent = React.createClass()', 'function MyComponent()', 'All of the above'],
    answer: 'All of the above'
  },
  {
    question: 'What does JSX stand for in React?',
    options: ['JavaScript XML', 'Java Syntax Extension', 'JSON XML', 'JSX has no specific meaning'],
    answer: 'JavaScript XML'
  },
  {
    question: 'In React, what is used to pass data to a component from its parent?',
    options: ['props', 'state', 'context', 'relay'],
    answer: 'props'
  },
  {
    question: 'Which React hook is used to manage state in functional components?',
    options: ['useState()', 'useEffect()', 'useContext()', 'useReducer()'],
    answer: 'useState()'
  },
  {
    question: 'What is the result of the following expression: 3 + 2 + "7"?',
    options: ['57', '12', '327', '22'],
    answer: '57'
  },
  {
    question: 'What is the output of the following code? console.log(0.1 + 0.2 === 0.3);',
    options: ['true', 'false'],
    answer: 'false'
  },
  {
    question: 'Which array method is used to iterate over the elements and return a new array based on a condition?',
    options: ['map()', 'filter()', 'reduce()', 'forEach()'],
    answer: 'filter()'
  },
  {
    question: 'What is the purpose of the key prop in React when rendering a list of elements?',
    options: ['To uniquely identify each element in the list', 'To specify the order of the elements', 'To assign a CSS class to each element', 'To enable conditional rendering of each element'],
    answer: 'To uniquely identify each element in the list'
  },
  {
    question: 'In JavaScript, what does the "this" keyword refer to?',
    options: ['The current function', 'The parent function', 'The global object', 'The current object'],
    answer: 'The current object'
  },
  {
    question: 'Which method is used to remove an item from an array in JavaScript?',
    options: ['splice()', 'slice()', 'remove()', 'delete()'],
    answer: 'splice()'
  },
  {
    question: 'What is the purpose of the useEffect() hook in React?',
    options: ['To handle HTTP requests', 'To manage state in functional components', 'To perform cleanup and side effects', 'To render JSX elements'],
    answer: 'To perform cleanup and side effects'
  },

];

export default questions;
