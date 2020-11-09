const selectors = require ('../data/selectors.json');

function findTextAge (){
    const getStoryText = $(selectors.valuesInText).getText();
    const pattern = "is " + ".*" + " years old,";
    const start = getStoryText.search(pattern) + 3;
    const end = getStoryText.search(" years old,");

    return getStoryText.slice(start, end);

}

module.exports = findTextAge;