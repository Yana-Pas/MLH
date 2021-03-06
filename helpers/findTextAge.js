const selectors = require ('../data/selectors.json');

function findTextAge () {
    const getStoryText = $(selectors.valuesInText).getText();
    const pattern = "is (.*) years old,";
    const regexp = new RegExp(pattern);

    const matches = regexp.exec(getStoryText);

    return matches[1];
}

module.exports = findTextAge;
