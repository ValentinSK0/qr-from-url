/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
    type: 'input',
    name: 'url',
    message: 'What is the url of the website?'
   }])
  .then((answers) => {
    var qr_png = qr.image(answers.url, {type:'png'});
    fs.writeFile('qr_code.png', qr_png);
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log('toto je 1 napicu\n' + error);
    } else {
      console.log('toto je 2 napicu\n' + error);
    }
  });