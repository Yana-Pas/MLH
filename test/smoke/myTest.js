const selectors = require('../../data/selectors.json');
const expected = require('../../data/expected.json');

describe('My Little Hero', function () {
    describe('Getting to the page', function () {

        it('TC-001 Title is correct ', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            let title = browser.getTitle();
            browser.pause(2000);
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

        it('TC-015 Submit button is present on the Home page', function () {
            const submitButton = $(selectors.submitButton);
            expect(submitButton.isDisplayed()).toEqual(true);
        });

        it('TC-016 Submit button caption is correct', function () {
            const submitButton = $(selectors.submitButton);
            expect(submitButton.getText()).toEqual(expected.submitButton);
        });

    });
});