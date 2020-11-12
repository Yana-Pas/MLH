const selectors = require('../../data/selectors.json');
const data = require('../../data/testData.json');
const inputValues4 = require ('../../helpers/inputValues4');
const inputValues4AndClick = require ('../../helpers/inputValues4AndClick');
const path = require('path');

describe('Checking the main functionality', function () {

    // showing the element
    function makeElementVisible(element) {
        browser.execute(function (el) {
            el.style.display = '';
        }, element);
    }
    describe('Happy path', function () {

        // it('TC-021 Create button is clickable after 1-4 filled in ', function () {
        //     browser.url('https://qa-apps.netlify.app/app_my_hero');
        //     inputValues4(data.name, data.gender.she, data.age, data.storyType.Comedy)
        //     const create = $(selectors.submitButton).isEnabled();
        //     browser.pause(3000)
        //     expect(create).toEqual(true);
        // });

        it('TC-021.1 Should be able to upload a file', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            // --------------- select story type / hero name etc -------
            $(selectors.name).setValue('Ladybug');
            $$(selectors.gender)[2].click();
            $(selectors.age).setValue(22);
            $(selectors.storyClick).click();
            $$(selectors.storyType)[data.storyType.Comedy].click();
            // ---------------------------------------------------------

            const filePath = path.join(__dirname, '../../data/heroPhoto.jpg');
            const inputUpload = $('.ant-upload input');
            makeElementVisible(inputUpload);
            inputUpload.waitForDisplayed();
            inputUpload.setValue(filePath);

            const createBtn = $(selectors.submitButton);
            createBtn.click();

            browser.pause(5000);
        });

    });

  /*  describe('Other path', function () {

        it('TC-022 Gender he is working', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            inputValues4AndClick (data.name, data.gender.he, data.age, data.storyType.Comedy);
            browser.pause(3000)
            const btn = $(selectors.tryAgain).isDisplayed()
            expect(btn).toEqual(true);
        });

        it('TC-023 Gender he is working', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            inputValues4AndClick (data.name, data.gender.she, data.age, data.storyType.Comedy);
            browser.pause(3000)
            const btn = $(selectors.tryAgain).isDisplayed()
            expect(btn).toEqual(true);
        });

        it('TC-024 Gender it is working', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            inputValues4AndClick (data.name, data.gender.it, data.age, data.storyType.Comedy);
            browser.pause(3000)
            const btn = $(selectors.tryAgain).isDisplayed()
            expect(btn).toEqual(true);
        });
    }); */

});