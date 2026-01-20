import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";


inquirer.prompt([
    /* Pass your questions in here */
    {
        message: "Type url here: ",
        name: "url",
    },
  ])
  .then((answers) => {
        // Use user feedback for... whatever!!
        const typeUrl = answers.url;
        var qr_png = qr.image(typeUrl);
                     qr_png.pipe(fs.createWriteStream('arifInstagram.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
