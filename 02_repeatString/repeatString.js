const repeatString = function(string, num) {
 let i = 0;
 let repeatedString ="";
 if(num < 0){
  return "ERROR"
 }
for (i; i < num; i++){
  repeatedString += string;
}
return repeatedString;
}

// Do not edit below this line
module.exports = repeatString;
