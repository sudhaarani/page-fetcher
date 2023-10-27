const request = require('request'); //using without TCP connection
const fs = require('fs');
const arg = process.argv.slice(2);

request(arg[0], (error, response, body) => {//callback 1 // this is GET request...........arg[0] is url we give in command line
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

  console.log('Calling writeFile...', arg[1]);
  fs.writeFile(arg[1], body, (error) => {// callback 2
    console.log("In writeFile's Callback: it has the data.");
    let stats = fs.statSync(arg[1]); //to calc no. of bytes of given file
    console.log(` Downloaded and saved ${stats.size} bytes to ${arg[1]}.`);
    if (error) console.log("ERROR");
  });
});

//stretch remaining