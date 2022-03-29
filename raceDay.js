let raceNumber = Math.floor(Math.random() * 1000);

let inscription = "false";

let runnerAge = 10;

if (runnerAge >= 18 && inscription) {
  raceNumber += 1000;
}
if (runnerAge >= 18 && inscription) {
  console.log(`The car number ${raceNumber} will run at 9:30 am`);
} else if (runnerAge >= 18 && !inscription) {
  console.log(`The car number ${raceNumber} will run at 11:00 am`);
} else if (runnerAge < 18 && inscription) {
  console.log(`The youth car number ${raceNumber} will run at 12:30 pm`);
} else if (runnerAge < 18 && !inscription) {
  console.log(`The youth driver who are not registrants will not run`);
}
