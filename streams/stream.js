const fs = require('fs');


const readStream = fs.createReadStream('./blog.txt', { encoding:'utf8'});
const writeStream = fs.createWriteStream('./blog2.txt');

//on is an event listener listening on data(chunk of new data) event
// readStream.on('data', (chunk) => {
// //     console.log('-------NEW CHUNK------');
// //    console.log(chunk);

//    writeStream.write('\n NEW CHUNK \n');
//    writeStream.write(chunk);
// });


//Piping
readStream.pipe(writeStream);
