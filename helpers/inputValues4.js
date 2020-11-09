const selectors = require ('../data/selectors.json');

function inputValues4 (name, gender, age, storyType){
    $(selectors.name).setValue(name);
    $$(selectors.gender)[gender].click();
    $(selectors.age).setValue(age);
    $(selectors.story).click();
    $$(selectors.storyType)[storyType].click();
}

module.exports = inputValues4;