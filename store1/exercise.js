var store1 = require('./store1-data.js');

// *********** ACCESSING DATA *********** \\

// Return the value '4.63' from store1
function accessesingData1() {
return store1["2015-01-08"][0][1];

}


// Return how many 'Mint Wafers' were sold on January 6th
function accessesingData2() {
return store1["2015-01-06"][1][2];

}


// *********** LOOPING OVER DATA *********** \\


// Create a loop to read which candies were sold by store1 on Jan 8. After simply outputting the data, try creating an array that contains the candy names.
function loopingData1() {

let myarray=[];
for(let i=0;i<store1["2015-01-08"].length;i++)
{
    myarray[i] = store1["2015-01-08"][i][0]
}
return myarray;

}

// Create a loop to count the total number of candies sold on Jan 10 at store1. Where do you have to initialize the counter variable? Why?
function loopingData2() {
let sum = 0;
for(let i=0;i<store1["2015-01-10"].length;i++)
{
    sum = sum +store1["2015-01-10"][i][2]
}
return sum;

}

// Use `Object.keys()` to get an array of the dates that candies were sold at store1.
function loopingData3() {

//let prop=[];

//for(let i in store1 ){

return Object.keys(store1);

//}

//return prop

}


// Use a loop to calculate the total number of candies sold at store1.
function loopingData4() {

keys=Object.keys(store1);
let sum=0;
for(let i=0;i<keys.length;i++){

  for(j=0;j<store1[keys[i]].length;j++){

  sum=sum+store1[keys[i]][j][2]
  }


}

return sum;

}

// In the previous exercise, where did you have to initialize the counter variable? Why?
function loopingData5() {
  return 'To iterate through the property name'
}

// *********** CHALLENGE *********** \\

// Calculate the total revenue of the candies sold by store1 on January 10th.
// Be sure to return a number! Example `14.55`
function challenge1() {

keys=Object.keys(store1);

let rev=0.0;

for(let i=0;i<store1["2015-01-10"].length;i++){

  rev=rev+ parseFloat(store1["2015-01-10"][i][1])*store1["2015-01-10"][i][2]

}

return rev.toFixed(2);
  
}

module.exports = {
  accessesingData1,
  accessesingData2,
  loopingData1,
  loopingData2,
  loopingData3,
  loopingData4,
  loopingData5,
  challenge1
}
