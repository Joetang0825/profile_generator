const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let message = '';

rl.question('What\'s your name? Nicknames are also acceptable.  ', (answer) => {
  rl.question('What\'s an activity you like doing?  ', (answer2) => {
    rl.question('What do you listen to while doing that?  ', (answer3) => {
      message += `Listen: ${answer3}`;
      console.log(message);
      rl.close();
    })
    message += `Activity: ${answer2}, `;
  })
  message += `Name: ${answer}, `;
});

