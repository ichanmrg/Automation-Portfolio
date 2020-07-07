/// <reference path="../steps.d.ts"/>

const { I } = inject();
const format = require("string-template");
const locator = require("../common/locator");
const variable = require("../common/variable");

module.exports = {
  field: {
    firstName: "//input[@formcontrolname = 'first_name']",
    lastName: "//input[@formcontrolname = 'last_name']",
    email: "//input[@formcontrolname = 'email']",
    password: "//input[@formcontrolname = 'password']",
    confirmPassword: "//input[@formcontrolname = 'repeat_password']"
  },

  button: {
    tier:
      "//h4[contains(text(),'Tier {tierCtr} Plan')]/following-sibling::div/label",
    confirm: "//button[text () = 'Confirm']"
  },

  assert: {
    success: "//h2[text()='Success!']",
    emailConfirmationSent: "//*[text()='Email Confirmation Sent']"
  },

  tier: {
    one: "1",
    two: "2"
  },

  createAdminUser(tier, firstName, lastName, email) {
    I.click(locator.link.signUpNow);
    I.say("Selecting tier " + tier);
    I.click(format(this.button.tier, { tierCtr: tier }));
    I.say("First Name: " + firstName);
    I.fillField(this.field.firstName, firstName);
    I.say("Last Name: " + lastName);
    I.fillField(this.field.lastName, lastName);
    I.say("Email: " + email);
    I.fillField(this.field.email, email);
    I.say("Password: " + variable.credential.password.new);
    I.fillField(this.field.password, variable.credential.password.new);
    I.say("Confirm Password: " + variable.credential.password.new);
    I.fillField(this.field.confirmPassword, variable.credential.password.new);
    I.click(this.button.confirm);
  }
};
