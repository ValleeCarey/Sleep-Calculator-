//each day represents the amount of sleep that i got on each day
const getSleepHours = (day) => {
  switch (day) {
    case 'monday':
    return 6
    case 'tuesday':
    return 5
    case 'wednesday':
    return 5
    case 'thursday':
    return 6
    case 'friday':
    return 5
    case 'saturday':
    return 6
    case 'sunday':
    return 5
  };
}
//actual sleep can be altered depending on the user 
const getActualSleepHours = () => 
6 + 5 + 5 +10 + 10 + 10 + 5; 

//ideal sleep can be changed depending on user
const getIdealSleepHours = () => {
  const idealHours = 8
  return idealHours * 7
}
console.log(getActualSleepHours());
console.log(getIdealSleepHours());

//sleep debt calculated
const calculateSleepDebt = () => {
const actualSleepHours = getActualSleepHours();
const idealSleepHours = getIdealSleepHours();

//if statements for sleep debt

if (actualSleepHours === idealSleepHours){
console.log('You got the perfect amount of sleep');
}
if (actualSleepHours > idealSleepHours) {
  
//telling user the exact amount of sleep they got more or less of 
  
console.log('You got ' + (actualSleepHours - idealSleepHours) +' hour(s) more sleep than needed');
}

if (actualSleepHours < idealSleepHours) {

console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours less than ideal, you should get some rest');
}

};
//prints the function 
calculateSleepDebt();
