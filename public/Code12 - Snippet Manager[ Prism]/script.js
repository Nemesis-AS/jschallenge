import createFooter from "../CommonFiles/common-script.js";

createFooter();

const formats = [/.pdf/, /.docx/];
const files = ['book1.pdf', 'book2.pdf', 'doc1.docx'];

for(let item in files){
    let format = '';
    for(let i=files[item].lastIndexOf('.'); i <= files[item].length-1; i++){
        format += files[item][i];
    }
    console.log(format);
    
}