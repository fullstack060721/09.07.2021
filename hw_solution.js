

const path = require('path')
const fs = require('fs')
console.log(path.join(__dirname, 'myfile.txt'))

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Which file you want to search (full-name)? ', file_name => {
    console.log(`Searching for there ${file_name}!`);
    readline.close();

    fs.readdir(__dirname, (err, files) => {
        if (err) console.log(`Error ${err}`)
        else console.log(`[async] Files ${files}`)
        if (files.find( item => item.toUpperCase() == file_name.toUpperCase())) {
            console.log(`${file_name} exist in ${__dirname} folder`)
        }
        else {
            console.log(`${file_name} does NOT exist in ${__dirname} folder`)
        }
     })
    
  });

