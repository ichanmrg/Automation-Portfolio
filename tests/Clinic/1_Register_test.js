/// <reference path="../../steps.d.ts"/>

const format = require("string-template");
const locator = require("../../common/locator");
const variable = require("../../common/variable");

Feature("1. Register");

BeforeSuite(async I => {
  //I.clearMailosaurEmails()
  I.amOnPage("/");
  I.addMochawesomeContext(await I.grabCurrentUrl());
});

Scenario("User shall be able to select Tier Plan", async (I, register) => {
  I.click(locator.link.signUpNow);
  I.saveScreenshot("output/Clinic/User shall be able to select Tier Plan.png",true)
  I.click(format(register.button.tier, { tierCtr: register.tier.one }));
});

Scenario(
  "User shall be able to provide personal information",
  (I, register) => {
    I.fillField(register.field.firstName, variable.name.first);
    I.fillField(register.field.lastName, variable.name.last);
    I.fillField(
      register.field.email,
      format(variable.credential.email.clinic, {
        placeholder: variable.credential.email.stamp
      })
    );
    I.fillField(register.field.password, variable.credential.password.new);
    I.fillField(
      register.field.confirmPassword,
      variable.credential.password.new
    );
    I.saveScreenshot("output/Clinic/User shall be able to provide personal information.png",true)
  }
);

Scenario(
  "User shall be able to submit personal info for registration",
  (I, register) => {
    I.click(register.button.confirm);
    I.seeElementInDOM(register.assert.success);
    I.seeElementInDOM(register.assert.emailConfirmationSent);
    I.saveScreenshot("output/Clinic/User shall be able to submit personal info for registration.png",true)
  }
);

Scenario(
  "User shall be able to verify provided email address",
  async (I, register) => {
    I.amOnPage(
      await I.getConfirmEmailLink(
        format(variable.credential.email.clinic, {
          placeholder: variable.credential.email.stamp
        })
      )
    );
    I.seeElementInDOM(register.assert.success);
    I.addMochawesomeContext(await I.grabCurrentUrl());
    //I.saveScreenshot(variable.credential.email.clinic + " verify email.png")
    I.saveScreenshot("output/Clinic/User shall be able to verify provided email address.png",true)
  }
);
