const selectors = require('../../data/selectors.json');
const expected = require('../../data/expected.json');

describe('My Little Hero', function () {
    describe('Getting to the page', function () {
        before(() => {
            browser.maximizeWindow();
            browser.url('https://qa-apps.netlify.app/app_my_hero');
        });
        it('TC-001 Title is correct ', function () {
            let title = browser.getTitle();
            expect(title).toEqual('MLH trial');
        });

        it('TC-002 The Page header is present ', function () {
            const pageHeader = $(selectors.pageHeader);
            expect(pageHeader.isDisplayed()).toEqual(true);
        });

        it('TC-003 The Page header is My Little Hero ', function () {
            const pageHeader = $(selectors.pageHeader);
            expect(pageHeader.getText()).toEqual(expected.pageHeader);
        });

        it('TC-004 The text in description equals: Let\'s create your own HERO! It\'s super easy with our application!', function () {
            const pageDescription = $(selectors.pageDescription);
            expect(pageDescription.getText()).toEqual(expected.pageDescription);
        });

    });

    describe('Labels exist', function () {
        before(() => {
            browser.maximizeWindow();
            browser.url('https://qa-apps.netlify.app/app_my_hero');
        });
        it('TC-005 Label for name', function () {
            const label = $$(selectors.label)[0].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-006 Label for gender', function () {
            const label = $$(selectors.label)[1].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-007 Label for age', function () {
            const label = $$(selectors.label)[2].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-008 Label for story', function () {
            const label = $$(selectors.label)[3].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-009 Label for image upload', function () {
            const label = $$(selectors.label)[4].isDisplayed();
            expect(label).toEqual(true);
        });

    });

    describe('Labels are correct', function () {
        before(() => {
            browser.maximizeWindow();
            browser.url('https://qa-apps.netlify.app/app_my_hero');
        });
        it('TC-010 Label for name is correct', function () {
            const text = $$(selectors.label)[0].getAttribute('title');
            expect(text).toEqual(expected.labelName);
        });

        it('TC-011 Label for gender is correct', function () {
            const text = $$(selectors.label)[1].getAttribute('title');
            expect(text).toEqual(expected.labelGender);
        });

        it('TC-012 Label for age is correct', function () {
            const text = $$(selectors.label)[2].getAttribute('title');
            expect(text).toEqual(expected.labelAge);
        });

        it('TC-013 Label for story is correct', function () {
            const text = $$(selectors.label)[3].getAttribute('title');
            expect(text).toEqual(expected.labelStory);
        });

        it('TC-014 Label for image is correct', function () {
            const text = $$(selectors.label)[4].getAttribute('title');
            expect(text).toEqual(expected.labelImage);
        });

    });

    describe('Submit button', function () {
        before(() => {
            browser.maximizeWindow();
            browser.url('https://qa-apps.netlify.app/app_my_hero');
        });
        it('TC-015 Submit button is present on the Home page', function () {
            const submitButton = $(selectors.submitButton);
            expect(submitButton.isDisplayed()).toEqual(true);
        });

        it('TC-016 Submit button caption is correct', function () {
            const submitButton = $(selectors.submitButton);
            expect(submitButton.getText()).toEqual(expected.submitButton);
        });

    });

    describe('Inputs are displayed', function () {
        before(() => {
            browser.maximizeWindow();
            browser.url('https://qa-apps.netlify.app/app_my_hero');
        });
        it('TC-017 Name ', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            const name = $(selectors.name);
            expect(name.isDisplayed()).toEqual(true);
        });

        it('TC-018 Gender He', function () {
            const gender = $$(selectors.gender)[0];
            expect(gender.isDisplayed()).toEqual(true);
        });

        it('TC-019 Gender She', function () {
            const gender = $$(selectors.gender)[1];
            expect(gender.isDisplayed()).toEqual(true);
        });

        it('TC-020 Gender It', function () {
            const gender = $$(selectors.gender)[2];
            expect(gender.isDisplayed()).toEqual(true);
        });

        it('TC-021 Age', function () {
            const age = $(selectors.age);
            expect(age.isDisplayed()).toEqual(true);
        });

        it('TC-022 Story', function () {
            const story = $(selectors.story);
            expect(story.isDisplayed()).toEqual(true);
        });

        it('TC-023 Create', function () {
            const submitButton = $(sel.submitButton);
            expect(submitButton.isDisplayed()).toEqual(true);
        });
    });

    describe('Inputs are displayed', function () {

        it('TC-014 Name ', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            const name = $(selectors.name).isClickable()
            expect(name).toEqual(true);
        });

        it('TC-015 Gender He', function () {
            const gender = $$(selectors.gender)[0].isClickable();
            console.log(gender);
            expect(gender).toEqual(true);
        });

        it('TC-016 Gender She', function () {
            const gender = $$(selectors.gender)[1].isClickable();
            expect(gender).toEqual(true);
        });

        it('TC-017 Gender It', function () {
            const gender = $$(selectors.gender)[2].isClickable();
            expect(gender).toEqual(true);
        });

        it('TC-018 Age', function () {
            const age = $(selectors.age).isClickable();
            expect(age).toEqual(true);
        });

        it('TC-019 Story', function () {
            const story = $(selectors.story).isDisplayed();
            expect(story).toEqual(true);
        });

        it('TC-020 Create', function () {
            const submitButton = $(selectors.submitButton).isDisplayed();
            expect(submitButton).toEqual(true);
        });
    });

    describe('Placeholders are correct', function () {

        it('TC-021 Placeholder for name = Hero\'s name', function () {
            const placeholderName = $(sel.name);
            expect(placeholderName.getAttribute("placeholder")).toEqual(exp.placeholderName);
        });

        it('TC-022 Placeholder for age = Hero\'s age', function () {
            const placeholderAge = $(selectors.age);
            expect(placeholderAge.getAttribute("placeholder")).toEqual(exp.placeholderAge);
        });

        it('TC-023 Placeholder for story = Type of the story', function () {
            const placeholderStory = $(selectors.storyPlaceholder);
            expect(placeholderStory.getText()).toEqual(exp.placeholderStory);
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