
function helpFn(){
    console.log(
        `
        Types of acceptable commands:
            buddy tree //defaults current working directory
            buddy tree "directoryPath"
            buddy organise "directoryPath" //defaults copy
            buddy organise "directoryPath" copy
            buddy organise "directoryPath" cut
            buddy help
        `
    );
}

module.exports = {
    helpKey:helpFn
}