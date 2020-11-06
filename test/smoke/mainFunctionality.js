const sel = require('../../data/selectors.json');
const data = require('../../data/testData.json');
const inputValues4 = require ('../../helpers/inputValues4');
const inputValues4AndClick = require ('../../helpers/inputValues4AndClick');

describe('Checking the main functionality', function () {

    describe('Happy path', function () {

        it('TC-021 Create button is clickable after 1-4 filled in ', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            inputValues4(data.name, data.gender.she, data.age, data.storyType.Comedy)
            const create = $(sel.submitButton).isEnabled();
            browser.pause(3000)
            expect(create).toEqual(true);
        });
    });

    describe('Other path', function () {

        it('TC-022 Gender he is working', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            inputValues4AndClick (data.name, data.gender.he, data.age, data.storyType.Comedy);
            browser.pause(3000)
            const btn = $(sel.tryAgain).isDisplayed()
            expect(btn).toEqual(true);
        });

        it('TC-023 Gender he is working', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            inputValues4AndClick (data.name, data.gender.she, data.age, data.storyType.Comedy);
            browser.pause(3000)
            const btn = $(sel.tryAgain).isDisplayed()
            expect(btn).toEqual(true);
        });

        it('TC-024 Gender it is working', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            inputValues4AndClick (data.name, data.gender.it, data.age, data.storyType.Comedy);
            browser.pause(3000)
            const btn = $(sel.tryAgain).isDisplayed()
            expect(btn).toEqual(true);
        });
    });

});