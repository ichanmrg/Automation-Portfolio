/// <reference path="../../steps.d.ts"/>

const login = require('../../pages/login')

Feature('Delete laboratory tests.');

BeforeSuite((I) => {
    I.amOnPage("/");
    I.fillField(login.field.email,"LA2+ITAdmin1.bckiwaav@mailosaur.io");
    I.fillField(login.field.password, "qwerty1");
    I.click(login.button.login);
    //I.seeElementInDOM(login.assert.success);
    
});

Scenario('Delete clinic tests.', async (I) => {
    var clinicTests = []
    clinicTests = await I.grabAttributeFrom("//a[contains(@class,'list-info mrg-top-10')]","href")
    
    var numOfElements = await I.grabNumberOfVisibleElements("//a[contains(@class,'list-info mrg-top-10')]")
    do {
        I.saveScreenshot("Clinic Tests - Before.png");
        clinicTests = await I.grabAttributeFrom("//a[contains(@class,'list-info mrg-top-10')]","href")
        clinicTests.forEach( test => {
            I.amOnPage(test)
            I.scrollTo("//button[text() = 'edit test']");
            I.click("//button[text() = 'edit test']");
            I.scrollTo("//button[text() = 'Remove Test']");
            I.click("//button[text() = 'Remove Test']");
    
        });
        I.wait(5)
        numOfElements = await I.grabNumberOfVisibleElements("//a[contains(@class,'list-info mrg-top-10')]")
    } while (numOfElements != 0 || numOfElements == null);
    I.saveScreenshot("Clinic Tests - After.png");
});