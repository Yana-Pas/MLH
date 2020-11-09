const selectors = require('../../data/selectors.json');
const expected = require('../../data/expected.json');

describe('Inputs', function () {

    describe('Inputs are displayed', function () {

        it('TC-014 Name ', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            const name = $(selectors.name).isDisplayed()
            expect(name).toEqual(true);
        });

        it('TC-015 Gender He', function () {
            const gender = $$(selectors.gender)[0].isDisplayed();
            console.log(gender);
            expect(gender).toEqual(true);
        });

        it('TC-016 Gender She', function () {
            const gender = $$(selectors.gender)[1].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-017 Gender It', function () {
            const gender = $$(selectors.gender)[2].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-018 Age', function () {
            const age = $(selectors.age).isDisplayed();
            expect(age).toEqual(true);
        });

        it('TC-019 Story', function () {
            const story = $(selectors.story).isDisplayed();
            expect(story).toEqual(true);
        });

        it('TC-020 Image', function () {
            const image = $(selectors.imageField).isDisplayed();
            expect(image).toEqual(true);
        });

        it('TC-020 Create', function () {
            const submitButton = $(selectors.submitButton).isDisplayed();
            expect(submitButton).toEqual(true);
        });
    });

    describe('Placeholders are correct', function () {
        before(() => {
            browser.maximizeWindow();
            browser.url('https://qa-apps.netlify.app/app_my_hero');

            it('TC-021 Placeholder for name = Hero\'s name', function () {
                const placeholderName = $(selectors.name);
                expect(placeholderName.getAttribute("placeholder")).toEqual(expected.placeholderName);
            });

            it('TC-022 Placeholder for age = Hero\'s age', function () {
                const placeholderAge = $(selectors.age);
                expect(placeholderAge.getAttribute("placeholder")).toEqual(expected.placeholderAge);
            });

            it('TC-023 Placeholder for story = Type of the story', function () {
                const placeholderStory = $(selectors.storyPlaceholder);
                expect(placeholderStory.getText()).toEqual(expected.placeholderStory);
            });

            it('TC-024 Option for gender he is correct', function () {
                const optionHe = $$(selectors.genderChoice)[0];
                expect(optionHe.getValue()).toEqual(expected.optionHe);
            });

            it('TC-025 Option for gender she is correct', function () {
                const optionShe = $$(selectors.genderChoice)[1];
                expect(optionShe.getValue()).toEqual(expected.optionShe);
            });

            it('TC-026 Option for gender it is correct', function () {
                const optionIt = $$(selectors.genderChoice)[2];
                expect(optionIt.getValue()).toEqual(expected.optionIt);
            });

        });
    });

});