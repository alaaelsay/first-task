
// 1. Write a function that logs the current file path and directory.(0.5 Grade)
// • Output Example: {File: “/home/user/project/index.js”, Dir: “/home/user/project”}

const path= require("node:path")
const fs=require('fs')
const EventEmitter= require("events")
const event= new EventEmitter();

const file=path.resolve('assignment.js')

function logFileAndDir(){

    console.log({file:file})

    console.log({dir:__dirname})
}

logFileAndDir();

// 2. Write a function that takes a file path and returns its file name.(0.5 Grade)
// • Input Example: /user/files/report.pdf
// • Output Example:"report.pdf "

function getFileName(){
    const fileName= path.basename(file);

    return fileName
}

console.log(getFileName())


// 3. Write a function that builds a path from an object (0.5 Grade)
// • Input Example:{ dir:"/folder", name:"app", ext:".js"}
// • Output Example: “/folder/app.js”

function wholePath({dir, name, ext}){
    return path.format({dir, name, ext})
}

const obj= path.parse(file)

console.log(wholePath(obj));


// 4. Write a function that returns the file extension from a given file path.(0.5 Grade)
// • Input Example: /docs/readme.md"
// • Output Example: “.md”

function getExt(){

    return path.extname(file)
}

console.log(getExt())


// 5. Write a function that parses a given path and returns its name and ext.(0.5 Grade)
// • Input Example: /home/app/main.js
// • Output Example:{Name: “main”, Ext:“.js”}

function getNameAndExt(){
    const {name, ext}=path.parse(file)
    return {name:name, ext:ext}
}

console.log(getNameAndExt())


// 6. Write a function that checks whether a given path is absolute.(0.5 Grade)
// • Input Example: /home/user/file.txt
// • Output Example: true

function isAbsolutePath(){

    return path.isAbsolute(file)
}

console.log(isAbsolutePath())


// 7. Write a function that joins multiple segments (0.5 Grade)
// • Input:"src","components", "App.js"
// • Output Example: src/components/App.js

function joinedPath(){

    return path.join(file,"components", "app.js")
}
console.log(joinedPath());


// 8. Write a function that resolves a relative path to an absolute one.(0.5 Grade)
// • Input Example: ./index.js
// • Output Example: /home/user/project/src/index.js

function resolvePath(relativePath){

    return path.resolve(relativePath)
}

console.log(resolvePath("./index.js"))

// 9. Write a function that joins two paths.(0.5 Grade)
// • Input Example: /folder1, folder2/file.txt
// • Output Example: /folder1/folder2/file.txt

function joinPath(file, file2){

    return path.join(file, file2)
}
console.log(joinPath(file, "folder2/file.txt"));


// 10. Write a function that deletes a file asynchronously.(0.5 Grade)
// • Input Example: /path/to/file.txt
// • Output Example: The file.txt is deleted.

const file2= path.resolve('assignment3.txt')

function deleteFile(){
    return fs.rm(file2, (err)=>{
        if(err){
            console.log(err)
        }

        console.log('assignment.txt delete sucessfully');
        
    })
}

deleteFile()


// 11. Write a function that creates a folder synchronously.(0.5 Grade)
// • Output Example: “Success”

function createFolder(){

    return fs.mkdir("folderOne", (err)=>{
            if(err){
                console.log(err)
            }
    
            console.log("folder1 created successfully");
            
        })
}

createFolder();


// 12. Create an event emitter that listens for a "start" event and logs a welcome message.(0.5 Grade)
// • Output Example: Welcome event triggered!

event.on("start", ()=>{
    console.log("welcome in event");
    
})

event.emit("start")



// 13. Emit a custom "login" event with a username parameter.(0.5 Grade)
// • Input Example: "Ahmed"
// • Output Example:“User logged in: Ahmed”
event.on('login', (user)=>{
    console.log(` ${user} has logged in sucessfully `);
    
})

event.emit("login", "ahmed")


// 14. Read a file synchronously and log its contents.(0.5 Grade)
// • Input Example: "./notes.txt"
// • Output Example: the file content => “This is a note.”

const readData=fs.readFileSync("./assignment4.txt", {encoding: "utf-8"} )

console.log(readData);


// 15. Write asynchronously to a file.(0.5 Grade)
// • Input: path: "./async.txt", content: "Async save"



fs.writeFile("./async.txt", "Async save",(err)=>{
    if(err){
        console.log(err);
        return;
    }

    console.log("write file successfully");
    
})


// 16. Check if a directory exists. (0.5 Grade)
// • Input Example: "./notes.txt"
// • Output Example: true

const isExist=fs.existsSync("./node.txt");

console.log(isExist);




