import filesystem from "fs";
let userInput: string = filesystem.readFileSync("./input.txt", "utf-8");
//let fruit1: string = "cseresznye"

let output: string = "";

let shouldStop: boolean = false;

for (let roundNumber = 1; shouldStop === false; roundNumber++) {
  let character = userInput[roundNumber - 1]

  if (character !== undefined) {
    if (character === "e") {
      output += "a"
    } else {
      output += character
    }
  }

  if (character === undefined) {
    shouldStop = true;
  } 
}

//console.log(fruit1)
filesystem.writeFileSync("./output.txt", output, "utf-8");
