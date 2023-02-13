#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const treeObj = require("./commands/tree");
const helpObj = require("./commands/help");
const organiseObj = require("./commands/organise");



//taking input from command line
let inputArr = process.argv.slice(2); // node main.js tree "directoryPath"
// console.log(inputArr); // [ 'tree', 'directoryPath' ]



let command = inputArr[0];
switch(command){
    case "tree":
        treeObj.treeKey(inputArr[1]);
        break;
    case "organise":
        organiseObj.organiseKey(inputArr[1],inputArr[2]);
        break;
    case "help":
        helpObj.helpKey();
        break;
    default:
        console.log("Please enter right command");
        break;
}
