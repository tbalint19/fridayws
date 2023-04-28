import filesystem from "fs"
let fruit1: string = filesystem.readFileSync("./input.txt", "utf-8")
//let fruit1: string = "cseresznye"




for (let roundNumber = 1; roundNumber <= 300; roundNumber++)
{
  fruit1 += "!"
}


//console.log(fruit1)
filesystem.writeFileSync("./output.txt", fruit1, "utf-8")





