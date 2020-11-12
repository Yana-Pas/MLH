const selectors = require('../../data/selectors.json');
const expected = require('../../data/expected.json');
const data = require('../../data/testData.json');


describe('Name input field accepts correct inputs', function () {
    before(() => {
        browser.maximizeWindow();
        browser.url('https://qa-apps.netlify.app/app_my_hero');
    });

    function clearInputBox(input) {
        input.click();
        browser.keys(["\ue009" + "a", "\ue017", "\ue000"]); // ctr+a, del
    }

   it('TC-032  Name input field does not accept 71 symbols ', function () {
        const characterName = new Array(71).fill("a").join("");
        const name = $(selectors.name);
        clearInputBox(name);
        name.setValue(characterName);
        expect(name.getValue()).toEqual(characterName);

        browser.pause(500);
        const errorAlert = $(selectors.errorAlert).isExisting();
        expect(errorAlert).toEqual(true);

    });

    it('TC-032  Name input field does not accept 71 symbols by copy/past ', function () {
        const characterName = new Array(71).fill("a").join("");
        const name = $(selectors.name);
        clearInputBox(name);
        name.setValue(characterName);
        $(selectors.name).doubleClick();
        browser.pause(500);
        browser.keys(["\uE009" + "x", "\uE000"]);
        browser.pause(500);
        $(selectors.name).click();
        browser.keys(["\uE009" + "v", "\uE000"]);
        browser.pause(500);
        const errorAlert = $(selectors.errorAlert).isExisting();
        expect(errorAlert).toEqual(true);
        });
});
