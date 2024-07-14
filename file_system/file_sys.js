const fs = require("fs");

//sync call to create a file and over-write it(not append)

// fs.writeFileSync("./new_file.txt", "hola");

//async write

// fs.writeFile("./new_file.txt", "hola", (err) => {});

//reads entire file(not lines)
//it returns the value

// const result = fs.readFileSync("./hello.txt", "utf-8");
// console.log(result);

//async doest returns anything but it expects a callback function to handle error and give result

fs.readFile("./hello.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});

fs.appendFileSync("./new_file.txt", "data to append");
//we can also copy unlink and check stats , create directories etc
