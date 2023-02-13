const fs = require("fs");
const path = require("path");
const types = require("../utility").types;

function organiseFn(dirPath,method){
    
    //1. input -> directory path given
    if(dirPath==undefined){
        console.log("Path Missing");
        return;
    }

    let doesPathExist = fs.existsSync(dirPath);
    if(!doesPathExist){
        console.log("Kindly Input Right Path");
        return;
    }

    //2. create -> organized_files -> directory
    let newPath = path.join(dirPath,"organizedFiles");
    if(!fs.existsSync(newPath)){
        fs.mkdirSync(newPath);
    }

    let cut = false;
    if(method=="cut") cut = true;
    organiseIdentifier(dirPath,newPath,cut);

}

function organiseIdentifier(src,dest,cut){
    //3. identify categories of all the files present in that input directory
    let allContents = fs.readdirSync(src);

    for(let i=0;i<allContents.length;i++){
        let fileAddress = path.join(src,allContents[i]);
        let detailsObj = fs.lstatSync(fileAddress);
        if (detailsObj.isFile()){
            let category = getCategory(allContents[i]);
    
            //4. copy/cut files to that organized directory inside of any of category folder
            sendFiles(fileAddress,dest,category,cut);
        }
    }
}

function sendFiles(srcFilePath,dest,category,cut){
    let categoryPath = path.join(dest,category);
    if(!fs.existsSync(categoryPath)){
        fs.mkdirSync(categoryPath);
    }

    let newFileName = path.basename(srcFilePath);
    let newDestPath = path.join(categoryPath,newFileName);
    fs.copyFileSync(srcFilePath,newDestPath);
    
    //cut -> delete original file
    if(cut){
        fs.unlinkSync(srcFilePath);
    }

}


function getCategory(file){
    let ext = path.extname(file);
    ext = ext.slice(1);    

    for(let type in types){
        for(let i=0;i<types[type].length;i++){
            if(ext == types[type][i]){
                return type;
            }
        }
    }
    return "others";
}


module.exports = {
    organiseKey:organiseFn
}