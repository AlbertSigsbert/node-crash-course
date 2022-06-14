const fs = require("fs");

//Reading files
// fs.readFile('./docs/sample.txt', (err, data) => {
//    //Error handling
//    if(err){
//       console.log(err);
//    }
//    //Consume data
//    console.log(data.toString());
// })

// console.log('Last Line');

//Writing files

// fs.writeFile('./docs/blog.txt', 'Sample Blog', () => {
//     console.log('File was written');
// })

//Directories

// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("Folder was created succesfully");
//   });
// }

// else{
//     fs.rmdir('./assets', (err) =>{
//         if(err) console.log(err);
//         console.log('Folder was deleted succesfully');
//     })
// }

//Deleting files
if(fs.existsSync('./docs/deleteme.txt')){
  fs.unlink('./docs/deleteme.txt', (err) => {
     if(err){
         console.log(err);
     }
     console.log('File deleted');
  })
}