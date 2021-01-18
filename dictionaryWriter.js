// Input Processing
var fs = require('fs');
var myArgs = process.argv.slice(2);
let stringLength = myArgs[0];
let stringType = myArgs[1];
let outputFileName = myArgs[2];

if(!stringLength){console.error("Please provide string length"); return;}
if(!stringType){console.error("Please provide string type(A or N)"); return;}
if(!outputFileName){console.error("Please provide output file name"); return;}

// Clear file if already exists
fs.writeFileSync(outputFileName, "", function (err) {
if (err) throw err;
});

let numbers = [0,1,2,3,4,5,6,7,8,9];
let alphabets = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let elements = stringType === "A" ? alphabets : numbers;
let pointers = [];
let length = stringLength;
let cursor = length-1;

for(let i=0;i<length;i++){
  pointers[i] = 0;
}

flag = true;

while(flag){
  
  let str = "";
  for(let j=0;j<pointers.length;j++){
    str += elements[pointers[j]];
  }
  
  console.log(str);
  fs.appendFileSync(outputFileName, str+"\r\n", function (err) {
    if (err) throw err;
  });
  
  allPointersSet = true;
  for(let i=0;i<pointers.length;i++){
    if(pointers[i] !== elements.length-1){
      allPointersSet = false
    }
  }
  if(allPointersSet){
    flag = false;
  }
  
  pointers[cursor] = pointers[cursor]+1;
  if(pointers[cursor] === elements.length){
    
    pointers[cursor] = 0;
    let tempCursor = cursor-1;
    
    let digitIncremented = false;
    while(tempCursor >= 0 && !digitIncremented){
        if(pointers[tempCursor] === elements.length-1){
          pointers[tempCursor] = 0;
        } else {
          pointers[tempCursor] = pointers[tempCursor]+1;
          digitIncremented = true;
        }
      
      tempCursor--;
    }// While
    
  }// IF
  
}// WHILE










