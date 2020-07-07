/// <reference path="../../steps.d.ts"/>

const dummy = require("faker");
const format = require("string-template");
const dateFormat = require("dateformat");
//const locator = require('../../common/locator')
const variable = require("../../common/variable");
const businessinfo = require("../../pages/Clinic/Setup Profile/business_info");
const businesshours = require("../../pages/Clinic/Setup Profile/business_hours");
const businesspayment = require("../../pages/Clinic/Setup Profile/business_payment");
const wouldYouLikeToOfferPhlebotomyServicesDuringAllHoursOfOperation = false;
const phlebotomistOnStaffDuringHoursOfOperations = true;
const doYouHaveACentrifugeOnLocation = true;

Feature("2. Profile Update");

BeforeSuite(async I => {
  //I.clearMailosaurEmails()
  //I.amOnPage("/")
  I.addMochawesomeContext(await I.grabCurrentUrl());
});

Scenario("User shall be able to change business info.", async I => {
  I.fillField(
    businessinfo.field.locationName,
    variable.id.clinic + " Clinic Name"
  );
  I.fillField(
    businessinfo.field.clinicAffiliation,
    dummy.random.arrayElement(variable.array.clinicAffiliation)
  );
  I.pressKey("Enter");
  I.fillField(businessinfo.field.address, dummy.address.streetAddress());
  I.fillField(businessinfo.field.city, dummy.address.city());
  I.fillField(
    businessinfo.field.county,
    dummy.random.arrayElement(variable.array.county)
  );
  I.pressKey("Enter");
  I.click(businessinfo.field.state);
  I.fillField(businessinfo.field.state, dummy.address.state());
  I.pressKey("Enter");
  I.fillField(businessinfo.field.zip, dummy.address.zipCode("#####"));
  I.fillField(
    businessinfo.field.clinicPhoneNumber,
    dummy.phone.phoneNumberFormat().replace(/[^a-zA-Z0-9]/g, "")
  );
  I.fillField(businessinfo.field.webAddress, dummy.internet.url());
  I.fillField(
    businessinfo.field.secondaryRecoveryEmailAddress,
    format(variable.credential.email.clinic, {
      placeholder: "secondaryRecovery"
    })
  );
  I.saveScreenshot("output/Clinic/User shall be able to change business info.png",true)
  I.click(businessinfo.button.next);
});

Scenario("User shall be able to change business hours.", I => {
  I.scrollPageToTop();
  variable.schedule.clinic.businessDays.forEach(day => {
    I.scrollTo(
      businesshours.checkbox.businessHour[day.toString()],
      variable.axis.x,
      variable.axis.y
    );
    I.wait(1);
    I.click(businesshours.checkbox.businessHour[day.toString()]);
    // I.selectTime(businesshours.checkbox.businessHour[day.toString()]+businesshours.dropdown.openTime,variable.schedule.clinic.businessHours.end[day.toString()])
    // I.selectTime(businesshours.checkbox.businessHour[day.toString()]+businesshours.dropdown.closeTime,variable.schedule.clinic.businessHours.start[day.toString()])
    // I.seeElementInDOM(businesshours.warning.closeTimeShouldBeLaterThanOpenTime)
    I.selectTime(
      businesshours.checkbox.businessHour[day.toString()] +
        businesshours.dropdown.openTime,
      variable.schedule.clinic.businessHours.start[day.toString()]
    );
    I.selectTime(
      businesshours.checkbox.businessHour[day.toString()] +
        businesshours.dropdown.closeTime,
      variable.schedule.clinic.businessHours.end[day.toString()]
    );
  });

  if (wouldYouLikeToOfferPhlebotomyServicesDuringAllHoursOfOperation)
    I.click(
      businesshours.radio
        .wouldYouLikeToOfferPhlebotomyServicesDuringAllHoursOfOperation.yes
    );
  else {
    I.click(
      businesshours.radio
        .wouldYouLikeToOfferPhlebotomyServicesDuringAllHoursOfOperation.no
    );
    variable.schedule.clinic.phlebotomyServiceDays.forEach(day => {
      I.scrollTo(
        businesshours.checkbox.phlebotomyServiceHour[day.toString()],
        variable.axis.x,
        variable.axis.y
      );
      I.wait(1);
      I.click(businesshours.checkbox.phlebotomyServiceHour[day.toString()]);
      //  I.selectTime(businesshours.checkbox.phlebotomyServiceHour[day.toString()]+businesshours.dropdown.openTime,variable.schedule.clinic.phlebotomyServiceHours.end[day.toString()])
      //  I.selectTime(businesshours.checkbox.phlebotomyServiceHour[day.toString()]+businesshours.dropdown.closeTime,variable.schedule.clinic.phlebotomyServiceHours.start[day.toString()])
      //  I.seeElementInDOM(businesshours.warning.closeTimeShouldBeLaterThanOpenTime)
      I.selectTime(
        businesshours.checkbox.phlebotomyServiceHour[day.toString()] +
          businesshours.dropdown.openTime,
        variable.schedule.clinic.phlebotomyServiceHours.start[day.toString()]
      );
      I.selectTime(
        businesshours.checkbox.phlebotomyServiceHour[day.toString()] +
          businesshours.dropdown.closeTime,
        variable.schedule.clinic.phlebotomyServiceHours.end[day.toString()]
      );
    });
  }

  if (phlebotomistOnStaffDuringHoursOfOperations)
    I.click(businesshours.radio.phlebotomistOnStaffDuringHoursOfOperation.yes);
  else {
    I.click(businesshours.radio.phlebotomistOnStaffDuringHoursOfOperation.no);
    I.wait(1);
    I.click(businesshours.button.confirm.noPhlebotomist);
    I.wait(1);
  }

  if (doYouHaveACentrifugeOnLocation)
    I.click(businesshours.radio.doYouHaveACentrifugeOnLocation.yes);
  else {
    I.click(businesshours.radio.doYouHaveACentrifugeOnLocation.no);
    I.wait(1);
    I.click(businesshours.button.confirm.noCentrifuge);
    I.wait(1);
  }

  I.click(
    businesshours.dropdown.selectAMaximumNumberOfBloodDrawsAllowedPerHour
  );
  I.fillField(
    ".ng-select-focused input",
    dummy.random.number({ min: 1, max: 20 }).toString()
  );
  I.pressKey("Enter");
  I.scrollPageToBottom();
  I.wait(1);
  I.saveScreenshot("output/Clinic/User shall be able to change business hours.png",true)
  I.click(businesshours.button.next);
});

Scenario("User shall be able to update payment info.", I => {
  I.scrollPageToTop();
  I.fillField(
    businesspayment.field.card.holderName,
    variable.name.first + " " + variable.name.last
  );
  within({ frame: businesspayment.field.card.iframe }, () => {
    I.fillField(
      businesspayment.field.card.number,
      variable.credential.creditCard.number.valid
    );
    I.click(businesspayment.field.card.expDate);
    I.fillField(
      businesspayment.field.card.expDate,
      dateFormat(dummy.date.future(4), "mmyy")
    );
    I.click(businesspayment.field.card.cvc);
    I.fillField(
      businesspayment.field.card.cvc,
      dummy.random.number({ min: 100, max: 999 })
    );
    I.click(businesspayment.field.card.zip);
    I.fillField(businesspayment.field.card.zip, dummy.address.zipCode("#####"));
  });
  I.fillField(
    businesspayment.field.billing.address1,
    dummy.address.streetAddress()
  );
  I.fillField(
    businesspayment.field.billing.address2,
    dummy.address.secondaryAddress()
  );
  I.fillField(businesspayment.field.billing.city, dummy.address.city());
  I.click(businesspayment.dropdown.billing.state);
  I.fillField(businesspayment.field.billing.state, dummy.address.state());
  I.pressKey("Enter");
  I.fillField(
    businesspayment.field.billing.phone,
    dummy.phone.phoneNumberFormat().replace(/[^a-zA-Z0-9]/g, "")
  );
  I.fillField(
    businesspayment.field.billing.email,
    format(variable.credential.email.clinic, {
      placeholder: variable.credential.email.stamp + "+CC"
    })
  );
  I.saveScreenshot("output/Clinic/User shall be able to update payment info.png",true)
  I.click(businesspayment.button.next);
});
