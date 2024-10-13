// Node.js Basics

// 1) Not a programming Language
// 2) Not a Technology
// 3) Not a Library
// 4) Not a Framework

// Introduction to Node.js

// It is JS Runtime Environment

// JS se backend nai ban sakta kyunki JS ke pass pehle wo functionality nai tha jisse backend banta hai
// Ryan Dahl isne socha JS se backend banna chaiye
// Google Chrome ka v8 engine ka code open source hai and Ryan Dahl uss code mein chedkhani kar raha hai
// Kyunki chrome ka v8 engine bana hai C++ mein
// Fir usne socha ki humein to JS mein code karna hai

// Ab hum JS ka code likhenge jo ki wrapper layer of JS receive karegi and wo code v8 engine ke C++ code ke sath ek server create karega

// Installing Node.js and npm

// Working with node and npm
// npm init -> package.json -> lekha jokha of the project


// Node basic usage

// Working with modules
// File System operations
const fs = require('fs');

// Create a new File with some texts
fs.writeFile("hey.txt", "Hey hello kaise ho", function (err) {
    if (err) {
        console.error(err);
    } else {
        console.log("File Created");
    }
})

// Append texts to the File
fs.appendFile("hey.txt", "Main to badhiya hu", function (err) {
    if (err) {
        console.error(err);
    } else {
        console.log("Text Appended");
    }
})

// Rename the File
fs.rename("hey.txt", "hello.txt", function (err) {
    if (err) {
        console.error(err);
    } else {
        console.log("File name Changed")
    }
})


// Make another copy of File in any directory
fs.copyFile("hey.txt", "./copy/papa.txt", function (err) {
    if (err) {
        console.error(err.message);
    } else {
        console.log("File Copied")
    }
})

// Removes File
fs.unlink("hello.txt", function (err) {
    if (err) {
        console.err(err);
    } else {
        console.log("File Removed")
    }
})

// Delete a Folder
fs.rmdir("./copy", { recursive: true }, function (err) {
    if (err) {
        console.err(err.message);
    } else {
        console.log("Folder Removed");
    }
})


// Understanding HTTP module

// Protocol - Rules
// Internet pe kuch bhi karne ke liye rules banaye gaye hai unke dwaara jinhone internet banaya hai, ab un rules ko follow karna zaruri hai, ye rules follow ho isiliye ye rules aap ke Operating System mein pre installed hota hai

// HTTP
// Yahi protocol hai ya rule hai jisko follow kare bina naa hi kuch bhejte sakte ho ,naa hi kuch mangva sakte ho

const http = require('http');

const server = http.createServer(function (req, res) {
    res.end("Hello World!!")
})

server.listen(3000);