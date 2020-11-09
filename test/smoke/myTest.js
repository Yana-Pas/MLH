const selectors = require('../../data/selectors.json');
const expected = require('../../data/expected.json');


describe('My Little Hero', function () {
  /*  describe('Getting to the page', function () {
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
            const name = $(selectors.name);
            expect(name.isClickable()).toEqual(true);
        });

        it('TC-018 Gender He', function () {
            const gender = $$(selectors.gender)[0];
            expect(gender.isClickable()).toEqual(true);
        });

        it('TC-019 Gender She', function () {
            const gender = $$(selectors.gender)[1];
            expect(gender.isClickable()).toEqual(true);
        });

        it('TC-020 Gender It', function () {
            const gender = $$(selectors.gender)[2];
            expect(gender.isClickable()).toEqual(true);
        });

        it('TC-021 Age', function () {
            const age = $(selectors.age);
            expect(age.isClickable()).toEqual(true);
        });

        it('TC-022 Story', function () {
            const story = $(selectors.story);
            expect(story.isClickable()).toEqual(true);
        });

        it('TC-023 Image', function () {
            const image = $(selectors.imageField).isClickable();
            expect(image).toEqual(true);
        });

    });

    describe('Placeholders are correct', function () {

        it('TC-024 Placeholder for name = Hero\'s name', function () {
            const placeholderName = $(selectors.name);
            expect(placeholderName.getAttribute("placeholder")).toEqual(expected.placeholderName);
        });

        it('TC-025 Placeholder for age = Hero\'s age', function () {
            const placeholderAge = $(selectors.age);
            expect(placeholderAge.getAttribute("placeholder")).toEqual(expected.placeholderAge);
        });

        it('TC-026 Placeholder for story = Type of the story', function () {
            const placeholderStory = $(selectors.storyPlaceholder);
            expect(placeholderStory.getText()).toEqual(expected.placeholderStory);
        });

        it('TC-027 Option for gender he is correct', function () {
            const optionHe = $$(selectors.genderChoice)[0];
            expect(optionHe.getValue()).toEqual(expected.optionHe);
        });

        it('TC-028 Option for gender she is correct', function () {
            const optionShe = $$(selectors.genderChoice)[1];
            expect(optionShe.getValue()).toEqual(expected.optionShe);
        });

        it('TC-029 Option for gender it is correct', function () {
            const optionIt = $$(selectors.genderChoice)[2];
            expect(optionIt.getValue()).toEqual(expected.optionIt);
        });

        it('TC-031 Placeholder for Image is correct', function () {
            const placeholderImage = $(selectors.imageText);
            expect(placeholderImage.getText()).toEqual(expected.imageText);
        });


    }); */
   describe('Name input field accepts correct inputs', function () {
        before(() => {
            browser.maximizeWindow();
            browser.url('https://qa-apps.netlify.app/app_my_hero');
        });

        function clearInputBox(input) {
            input.click();
            browser.keys(["\ue009" + "a", "\ue017", "\ue000"]); // ctr+a, del
        }

        it('TC-032  Name input field accepts Upper case letters ', function () {
            const characterName = "LADYBUG";
            const name = $(selectors.name);
            clearInputBox(name);
            name.setValue(characterName);
            expect(name.getValue()).toEqual(characterName);
        });

        it('TC-033  Name input field accepts Lower case letters ', function () {
            const characterName = "ladybug";
            const name = $(selectors.name);
            clearInputBox(name);
            name.setValue(characterName);
            expect(name.getValue()).toEqual(characterName);
        });

        it('TC-034  Name input field accepts digits ', function () {
            const characterName = "1234567890";
            const name = $(selectors.name);
            clearInputBox(name);
            name.setValue(characterName);
            expect(name.getValue()).toEqual(characterName);
        });

        it('TC-035  Name input field accepts special characters ', function () {
            const characterName = ";)))# ";
            const name = $(selectors.name);
            clearInputBox(name);
            name.setValue(characterName);
            expect(name.getValue()).toEqual(characterName);
        });

        it('TC-036  Name input field accepts mix of letters, digits, and special characters', function () {
            const characterName = "Karabas - Barabas 10";
            const name = $(selectors.name);
            clearInputBox(name);
            name.setValue(characterName);
            expect(name.getValue()).toEqual(characterName);
        });

           it('TC-037  Name input field accepts 1 symbol', function () {
                const characterName = "a";
                const name = $(selectors.name);
                clearInputBox(name);
                name.setValue(characterName);
                expect(name.getValue()).toEqual(characterName);

               browser.pause(500);
               const alerts = $$(selectors.errorAlert);
               expect(alerts.length).toEqual(0);
            });

            it('TC-038  Name input field accepts 35 symbols', function () {
                const characterName = new Array(35).fill("a").join("");
                const name = $(selectors.name);
                clearInputBox(name);
                name.setValue(characterName);
                expect(name.getValue()).toEqual(characterName);

                browser.pause(500);
                const alerts = $$(selectors.errorAlert);
                expect(alerts.length).toEqual(0);
            });

            it('TC-039  Name input field accepts 70 symbols', function () {
                const characterName = new Array(70).fill("a").join("");
                const name = $(selectors.name);
                clearInputBox(name);
                name.setValue(characterName);
                expect(name.getValue()).toEqual(characterName);

                browser.pause(500);
                const alerts = $$(selectors.errorAlert);
                expect(alerts.length).toEqual(0);
            });
        });

   describe('Age input fields accepts correct inputs', function () {
            before(() => {
                browser.maximizeWindow();
                browser.url('https://qa-apps.netlify.app/app_my_hero');
            });

            function clearInputBox(input) {
                input.click();
                browser.keys(["\ue009" + "a", "\ue017", "\ue000"]); // ctr+a, del
            }

            it('TC-040  Age input field accepts 1 digit', function () {
                const digitAge = "1";
                const age = $(selectors.age);
                clearInputBox(age);
                age.setValue(digitAge);
                expect(age.getValue()).toEqual(digitAge);

                browser.pause(500);
                const alerts = $$(selectors.errorAlert);
                expect(alerts.length).toEqual(0);
            });

            it('TC-041  Age input field accepts 5 digits', function () {
                const digitAge = new Array(5).fill("1").join("");
                const age = $(selectors.age);
                clearInputBox(age);
                age.setValue(digitAge);
                expect(age.getValue()).toEqual(digitAge);

                browser.pause(500);
                const alerts = $$(selectors.errorAlert);
                expect(alerts.length).toEqual(0);
            });

            it('TC-042  Age input field accepts 12 digits', function () {
                const digitAge = new Array(12).fill("1").join("");
                const age = $(selectors.age);
                clearInputBox(age);
                age.setValue(digitAge);
                expect(age.getValue()).toEqual(digitAge);

                browser.pause(500);
                const alerts = $$(selectors.errorAlert);
                expect(alerts.length).toEqual(0);
            });
            it('TC-043  Age input value can be increased by spinner', function () {
                const digitAge = "100";
                const age = $(selectors.age);
                clearInputBox(age);
                age.setValue(digitAge);

                browser.keys("ArrowUp");
                expect(age.getValue()).toEqual("101");
            });

            it('TC-044  Age input value can be decreased by spinner', function () {
                const digitAge = "100";
                const age = $(selectors.age);
                clearInputBox(age);
                age.setValue(digitAge);

                browser.keys("ArrowDown");
                expect(age.getValue()).toEqual("99");
            });

        });

    describe('Story dropbox has correct options', function () {
        before(() => {
            browser.maximizeWindow();
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            const story = $(selectors.storyClick);
            story.click();
        });

        it('TC-045  Story dropbox has 7 options ', function () {
            const storyOptions = $$(selectors.storyTypeOptions)
            expect(storyOptions.length).toEqual(7);
        });
        it('TC-046 Option one is present in dropbox', function () {
            const story = $$(selectors.storyTypeOptions)[0];
            expect(story.isDisplayed()).toEqual(true);
        });

        it('TC-047 Option two is present in dropbox', function () {
            const story = $$(selectors.storyTypeOptions)[1];
            expect(story.isDisplayed()).toEqual(true);
        });

        it('TC-048 Option three is present in dropbox', function () {
            const story = $$(selectors.storyTypeOptions)[2];
            expect(story.isDisplayed()).toEqual(true);
        });

        it('TC-049 Option four is present in dropbox', function () {
            const story = $$(selectors.storyTypeOptions)[3];
            expect(story.isDisplayed()).toEqual(true);
        });

        it('TC-050 Option five is present in dropbox', function () {
            const story = $$(selectors.storyTypeOptions)[4];
            expect(story.isDisplayed()).toEqual(true);
        });

        it('TC-051 Option six is present in dropbox', function () {
            const story = $$(selectors.storyTypeOptions)[5];
            expect(story.isDisplayed()).toEqual(true);
        });

        it('TC-052 Option seven is present in dropbox', function () {
            const story = $$(selectors.storyTypeOptions)[6];
            expect(story.isDisplayed()).toEqual(true);
        });

        it('TC-053 Option one is correct', function () {
            const story = $$(selectors.storyTypeOptions)[0];
            expect(story.getText()).toEqual(expected.storyOptionOne);
        });

        it('TC-054 Option two is correct', function () {
            const story = $$(selectors.storyTypeOptions)[1];
            expect(story.getText()).toEqual(expected.storyOptionTwo);
        });

        it('TC-055 Option three is correct', function () {
            const story = $$(selectors.storyTypeOptions)[2];
            expect(story.getText()).toEqual(expected.storyOptionThree);
        });

        it('TC-056 Option four is correct', function () {
            const story = $$(selectors.storyTypeOptions)[3];
            expect(story.getText()).toEqual(expected.storyOptionFour);
        });

        it('TC-057 Option five is correct', function () {
            const story = $$(selectors.storyTypeOptions)[4];
            expect(story.getText()).toEqual(expected.storyOptionFive);
        });

        it('TC-058 Option six is correct', function () {
            const story = $$(selectors.storyTypeOptions)[5];
            expect(story.getText()).toEqual(expected.storyOptionSix);
        });

        it('TC-059 Option seven is correct', function () {
            const story = $$(selectors.storyTypeOptions)[6];
            expect(story.getText()).toEqual(expected.storyOptionSeven);
        });
    });

});
