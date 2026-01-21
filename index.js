import inquirer from "inquirer";

import qr from "qr-image";
import fs from "fs";


inquirer.prompt([
    {
        message: "Type url here: ",
        name: "url",
    },
  ])
  .then((answers) => {
        const typeUrl = answers.url;
        var qr_png = qr.image(typeUrl);
        qr_png.pipe(fs.createWriteStream('googel.png'));
        fs.readFile('readme.txt', 'utf8', (err, answers) => {
            if (err) throw err;
            console.log(answers);
        });

  })
  .catch((error) => {
    if (error.isTtyError) {
      } else {
      }
  });
