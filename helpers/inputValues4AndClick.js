const sel = require ('../data/selectors.json');

function inputValues4AndClick (name, gender, age, storyType){
    $(sel.name).setValue(name);
    $$(sel.gender)[gender].click();
    $(sel.age).setValue(age);
    $(sel.story).click();
    $$(sel.storyType)[storyType].click();
    $(sel.submitButton).click();
}

module.exports = inputValues4AndClick;