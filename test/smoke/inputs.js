const sel = require('../../data/selectors.json');
const exp = require('../../data/expected.json');

describe('Inputs', function () {

    describe('Inputs are displayed', function () {

        it('TC-014 Name ', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            const name = $(sel.name).isDisplayed()
            expect(name).toEqual(true);
        });

        it('TC-015 Gender He', function () {
            const gender = $$(sel.gender)[0].isDisplayed();
            console.log(gender);
            expect(gender).toEqual(true);
        });

        it('TC-016 Gender She', function () {
            const gender = $$(sel.gender)[1].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-017 Gender It', function () {
            const gender = $$(sel.gender)[2].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-018 Age', function () {
            const age = $(sel.age).isDisplayed();
            expect(age).toEqual(true);
        });

        it('TC-019 Story', function () {
            const story = $(sel.story).isDisplayed();
            expect(story).toEqual(true);
        });

        it('TC-020 Image', function () {
            const image = $(sel.imageField).isDisplayed();
            expect(image).toEqual(true);
        });

        it('TC-020 Create', function () {
            const submitButton = $(sel.submitButton).isDisplayed();
            expect(submitButton).toEqual(true);
        });
    });

    describe('Placeholders are correct', function () {
        before(() => {
            browser.maximizeWindow();
            browser.url('https://qa-apps.netlify.app/app_my_hero');

            it('TC-021 Placeholder for name = Hero\'s name', function () {
                const placeholderName = $(sel.name);
                expect(placeholderName.getAttribute("placeholder")).toEqual(exp.placeholderName);
            });

            it('TC-022 Placeholder for age = Hero\'s age', function () {
                const placeholderAge = $(sel.age);
                expect(placeholderAge.getAttribute("placeholder")).toEqual(exp.placeholderAge);
            });

            it('TC-023 Placeholder for story = Type of the story', function () {
                const placeholderStory = $(sel.storyPlaceholder);
                expect(placeholderStory.getText()).toEqual(exp.placeholderStory);
            });

            it('TC-024 Option for gender he is correct', function () {
                const optionHe = $$(sel.genderChoice)[0];
                expect(optionHe.getValue()).toEqual(exp.optionHe);
            });

            it('TC-025 Option for gender she is correct', function () {
                const optionShe = $$(sel.genderChoice)[1];
                expect(optionShe.getValue()).toEqual(exp.optionShe);
            });

            it('TC-026 Option for gender it is correct', function () {
                const optionIt = $$(sel.genderChoice)[2];
                expect(optionIt.getValue()).toEqual(exp.optionIt);
            });

            it('TC-022 Placeholder for age = Hero\'s age', function () {
                const placeholderAge = $(sel.age);
                expect(placeholderAge.getAttribute("placeholder")).toEqual(exp.placeholderAge);
            });


        });
    });

});