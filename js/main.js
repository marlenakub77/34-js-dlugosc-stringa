let cont1 = "Uwielbiam JavaScript";
let cont2 = "Jestem świetnym programistą";

function longerContents(content1, content2) {
    if (content1.length > content2.length) {
        return content1; }
    else if (content2.length > content1.length) {
    return content2;
    }
    else return "teksty są równe";
        }


console.log(longerContents(cont1, cont2));



