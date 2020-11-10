const selectors = require ('../data/selectors.json');

function findTextName () {
    const getStoryText = $(selectors.valuesInText).getText();
    const pattern = "\n(.*), who";
    const regexp = new RegExp(pattern);

    const matches = regexp.exec(getStoryText);

    return matches[1];
}

module.exports = findTextName;