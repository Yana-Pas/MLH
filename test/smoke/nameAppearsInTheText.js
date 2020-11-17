const selectors = require('../../data/selectors.json');
const expected = require('../../data/expected.json')
const data = require('../../data/testData.json');
const inputValues4AndClick = require('../../helpers/inputValues4AndClick');
const { findTextName, findHeaderName } = require('../../helpers/findTextName')


    describe('Name correctly appears in the story', function () {

        it('TC-040 - TC-044 Name correctly appears in the text ', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            for (let i = 0; i < data.testNames.length; i++) {
                inputValues4AndClick(
                    data.testNames[i],
                    data.gender.she,
                    data.age,
                    data.storyType.Comedy
                );
                let textName = findTextName();

                expect(textName).toEqual(expected.checkNames[i]);

                $(selectors.tryAgain).click();
            }
        });

        it('TC-040 - TC-044 Name correctly appears in the Header ', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            for (let i = 0; i < data.testNames.length; i++) {
                inputValues4AndClick(
                    data.testNames[i],
                    data.gender.she,
                    data.age,
                    data.storyType.Comedy
                );

                let headerName = findHeaderName();

                expect(headerName).toEqual(expected.checkNames[i]);

                $(selectors.tryAgain).click();
            }
        });

        it('TC-045 - TC-047 Names with different length correctly appear in the text ', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            for (let i = 0; i < data.testNamesLength.length; i++) {
                inputValues4AndClick(
                    data.testNamesLength[i],
                    data.gender.she,
                    data.age,
                    data.storyType.Comedy
                );
                let textName = findTextName();

                expect(textName).toEqual(expected.testNamesLength[i]);

                $(selectors.tryAgain).click();
            }
        });

        it('TC-040 - TC-044 Names with different length correctly appear in the Header ', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            for (let i = 0; i < data.testNamesLength.length; i++) {
                inputValues4AndClick(
                    data.testNamesLength[i],
                    data.gender.she,
                    data.age,
                    data.storyType.Comedy
                );

                let headerName = findHeaderName();

                expect(headerName).toEqual(expected.testNamesLength[i]);

                $(selectors.tryAgain).click();
            }
        });

    });

