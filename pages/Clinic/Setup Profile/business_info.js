/// <reference path="../../../steps.d.ts"/>

const { I } = inject();
const format = require("string-template");
const locator = require("../../../common/locator");
const variable = require("../../../common/variable");

module.exports = {
  field: {
    clinicAffiliation: "//ng-select[@placeholder='Affiliation']//input",
    locationName: "//input[@formcontrolname='location_name']",
    locationAffiliation: "//input[@formcontrolname='location_affiliation']",
    address: "//input[@formcontrolname='address']",
    county: "//ng-select[@formcontrolname='county_id']//input",
    city: "//input[@formcontrolname='city']",
    zip: "//input[@formcontrolname='zip']",
    clinicPhoneNumber: "//input[@formcontrolname='phone']",
    webAddress: "//input[@formcontrolname='web_address']",
    secondaryRecoveryEmailAddress:
      "//input[@formcontrolname='secondary_email']",
    state: "//ng-select[@placeholder='State']//input"
  },

  button: {
    next: "//button[text () = 'Next']"
  },

  dropdown: {
    state: "//select[@formcontrolname='state']"
  }
};
