const selectors = require('../../data/selectors.json');
const expected = require('../../data/expected.json')
const data = require('../../data/testData.json');
const findTextAge = require('../../helpers/findTextAge');
const inputValues4AndClick = require('../../helpers/inputValues4AndClick');
const { findTextName } = require('../../helpers/findTextName')

describe('Additional functionality', function () {

    describe('Age converts to words', function () {

        it('Checking age converts to text ', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            for (let i = 0; i < data.testAge.length; i++) {
                inputValues4AndClick(
                    data.name,
                    data.gender.she,
                    data.testAge[i],
                    data.storyType.Comedy
                );
                let textAge = findTextAge(); //wrote helper which will search
                expect(textAge).toEqual(expected.checkAge[i]);
                $(selectors.tryAgain).click()
            }
        });
    });

    describe('Name correctly appears in the text', function () {

        it('Checking name appears in the text ', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            for (let i = 0; i < data.testNames.length; i++) {
                inputValues4AndClick(
                    data.testNames[i],
                    data.gender.she,
                    data.age,
                    data.storyType.Comedy
                );
                let textName = findTextName(); //wrote helper which will search
                expect(textName).toEqual(expected.checkNames[i]);
                $(selectors.tryAgain).click();
            }
        });
    });

});
