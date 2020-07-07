/// <reference path="../../../steps.d.ts"/>

const { I } = inject();
const format = require("string-template");
const locator = require("../../../common/locator");
const variable = require("../../../common/variable");

module.exports = {
  field: {
    card: {
      iframe: "//iframe[contains(@title,'Secure payment input frame')]",
      holderName: "//input[@formcontrolname='name' and @placeholder='Cardholder Name']",
      number: "//input[@name='cardnumber']",
      expDate: "//input[@name='exp-date']",
      cvc: "//input[@name='cvc']",
      zip: "//input[@name='postal']"
    },
    billing: {
      address1: "//input[@formcontrolname='address_line1']",
      address2: "//input[@formcontrolname='address_line2']",
      city: "//input[@formcontrolname='address_city']",
      state: "//select[@formcontrolname='address_state']",
      phone: "//input[@formcontrolname='phone_number']",
      email: "//input[@formcontrolname='email']"
    }
  },

  button: {
    next: "//button[@type='submit']"
  },

  dropdown: {
    billing: {
      state: "//ng-select[@formcontrolname='address_state']"
    }
  }
};
