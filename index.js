const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {

  tutorials.map(function(string){
  let lowerCase = string.toLowerCase()
  debugger
  let splitUp = lowerCase.split(' ')
  debugger
  splitUp.map(function(currentValue) {
  currentValue[0].toUpperCase() + currentValue.substring(1)
  debugger
  console.log(splitUp.join(" "))
  debugger
})})}
titleCased();



