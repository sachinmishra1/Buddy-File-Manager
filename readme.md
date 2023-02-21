# Buddy File Manager
## Organise your tedious files into different categories

This File manager offers the user to arrange/organise his files into following directories :
* Audio
* Apps
* Archives
* Documents
* Image
* Video, and
* Others 

You may see your file structure in a tree format as well (It looks cool).

## Enable
To enable, go to the command prompt on your location and type :
```js
npm link
```


## Commands:
```js
//1. Tree: visualises all files & directories in a tree format 
buddy tree //defaults current working directory
buddy tree "directoryPath"

//2. Organise: Organises all files within subfolders as mentioned above in an organised file folder.
buddy organise "directoryPath" //defaults copy
buddy organise "directoryPath" copy //copies the files
buddy organise "directoryPath" cut //cuts the files from original location

//3. Help command
buddy help
```
