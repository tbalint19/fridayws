import filesystem from "fs"
let userInput: string = filesystem.readFileSync("./input.txt", "utf-8")
//let fruit1: string = "cseresznye"

let output: string = ""


if (userInput !== "fuck")
{
  output = userInput
}


//console.log(fruit1)
filesystem.writeFileSync("./output.txt", output, "utf-8")
