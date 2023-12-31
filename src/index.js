const fs = require('fs').promises;
const fileName = 'myfile.txt';

const updateFile = async (fileName, fileContent) => {
    //Write your code here to overwrite the file content
    //Don't change function name
    const existing=await fs.readFile(fileName, 'utf-8');
    const update=`${existing}${fileContent}`;
    await fs.writeFile(fileName, update, 'utf-8');
    return update;
};


module.exports = updateFile;
