// load the filesystem moudle
const fs = require('fs');

// Read file asynchronously
fs.readFile('../fruits.txt', 'utf-8', (err, data) => {

    if(err) {
        console.log('Error reading the file: ' + err);
        return;
    }

    console.log('File content: ' + data);

});

console.log('Reading file ... (this runs first!)');