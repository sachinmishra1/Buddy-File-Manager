const fs = require("fs");
const path = require("path");

function treeFn(dirPath){
    if(dirPath==undefined){
        treeHelper(process.cwd(),"");//if missing path then current directory
        return;
    }

    let doesPathExist = fs.existsSync(dirPath);
    if(!doesPathExist){
        console.log("Kindly Input Right Path");
        return;
    }

    treeHelper(dirPath,"");
}

function treeHelper(dirPath, indent){
    let isFile = fs.lstatSync(dirPath).isFile();
    if(isFile){
        let fileName = path.basename(dirPath);
        console.log(indent,"|---",fileName);
    }else{
        let dirName = path.basename(dirPath);
        console.log(indent,"--->",dirName);
        let childrens = fs.readdirSync(dirPath);
        for(let i=0;i<childrens.length;i++){
            treeHelper(path.join(dirPath,childrens[i]),indent+"\t ");
        }
    }
}

module.exports = {
    treeKey:treeFn
}