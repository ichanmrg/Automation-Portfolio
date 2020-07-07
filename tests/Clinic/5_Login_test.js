/// <reference path="../../steps.d.ts"/>

const dummy = require('faker');
const format = require('string-template')
const dateFormat = require('dateformat')
//const locator = require('../../common/locator')
const variable = require('../../common/variable')
const login = require('../../pages/login')

Feature('4. Login');

BeforeSuite(async (I) =>  {
    //I.clearMailosaurEmails()
    I.amOnPage("/auth/login")
    I.addMochawesomeContext(await I.grabCurrentUrl())
});


Scenario("User shall be able to login.", async I => {
  I.fillField(
    login.field.email,
    format(variable.credential.email.clinic, {
      placeholder: variable.credential.email.stamp
    })
  );
  I.fillField(login.field.password, variable.credential.password.new);
  I.saveScreenshot("output/Clinic/User shall be able to login.png",true)
  I.click(login.button.login);
  I.seeElementInDOM(login.assert.success);
});
