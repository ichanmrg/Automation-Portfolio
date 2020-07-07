/// <reference path="../../../steps.d.ts"/>

const { I } = inject();
const format = require("string-template");
const locator = require("../../../common/locator");
const variable = require("../../../common/variable");

module.exports = {
  field: {
    clinicAffiliation: "//ng-select[@placeholder='Affiliation']//input",
    labName: "//input[@formcontrolname='name']",
    address: "//input[@formcontrolname='address']",
    city: "//input[@formcontrolname='city']",
    zip: "//input[@formcontrolname='zip']",
    businessPhoneNumber: "//input[@formcontrolname='phone']",
    webAddress: "//input[@formcontrolname='web_address']",
    secondaryRecoveryEmailAddress:
      "//input[@formcontrolname='secondary_email']",
    state: "//select[@formcontrolname='state']",
    description: "//textarea[@formcontrolname='description']"
  },

  button: {
    next: "Next"
  },

  radio: {
    isThisTheSameAddressWhereSpecimensWillBeDelivered: {
      yes: "//label[@for='is_specimen_address_same1']",
      no: "//label[@for='is_specimen_address_same2']"
    }
    
  },

  dropdown: {
    state: "//select[@formcontrolname='state']"
  }
};
