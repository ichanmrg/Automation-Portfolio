/// <reference path="../../steps.d.ts"/>

const dummy = require("faker");
const format = require("string-template");
const dateFormat = require("dateformat");
const variable = require("../../common/variable");
const labinfo = require("../../pages/Laboratory/Setup Profile/lab_info");
const opsinfo = require("../../pages/Laboratory/Setup Profile/ops_info");
const opshours = require("../../pages/Laboratory/Setup Profile/ops_hours");
const opspayment = require("../../pages/Laboratory/Setup Profile/ops_payment");

Feature("2. Profile Update");

BeforeSuite(async (I) => {
  //I.clearMailosaurEmails()
  //I.amOnPage("/")
  I.addMochawesomeContext(await I.grabCurrentUrl());
});

Scenario("User shall be able to change laboratory information.", async (I) => {
  I.scrollPageToTop();
  I.click(labinfo.field.labName);
  I.fillField(
    labinfo.field.labName,
    variable.id.laboratory + " Laboratory Name"
  );
  I.fillField(labinfo.field.address, dummy.address.streetAddress());
  I.fillField(labinfo.field.city, dummy.address.city());
  I.click(labinfo.field.state);
  I.selectOption(labinfo.field.state, dummy.address.state());
  I.fillField(labinfo.field.zip, dummy.address.zipCode("#####"));
  I.fillField(
    labinfo.field.businessPhoneNumber,
    dummy.phone.phoneNumberFormat().replace(/[^a-zA-Z0-9]/g, "")
  );
  I.click(labinfo.radio.isThisTheSameAddressWhereSpecimensWillBeDelivered.yes);
  I.fillField(labinfo.field.webAddress, dummy.internet.url());
  I.fillField(
    labinfo.field.secondaryRecoveryEmailAddress,
    format(variable.credential.email.laboratory, {
      placeholder: "secondaryRecovery",
    })
  );
  I.fillField(labinfo.field.description, dummy.lorem.paragraphs(1));
  I.fillField(
    labinfo.field.labName,
    variable.id.laboratory + " Laboratory Name"
  );
  I.saveScreenshot(
    "output/Laboratory/User shall be able to change laboratory information.png",
    true
  );
  I.click(labinfo.button.next);
});

Scenario("User shall be able to change operations information.", (I) => {
  I.scrollPageToTop();

  //CLIA
  I.fillField(opsinfo.field.clia.licenseNumber, dummy.random.alphaNumeric(10));
  I.click(opsinfo.field.clia.expiry.month.self);
  I.fillField(opsinfo.field.clia.expiry.month.type, dummy.date.month());
  I.pressKey("Enter");
  I.click(opsinfo.field.clia.expiry.year.self);
  I.fillField(
    opsinfo.field.clia.expiry.year.type,
    dateFormat(dummy.date.future(4), "yyyy")
  );
  I.pressKey("Enter");

  //CAP
  I.fillField(opsinfo.field.cap.licenseNumber, dummy.random.alphaNumeric(10));
  I.click(opsinfo.field.cap.expiry.month.self);
  I.fillField(opsinfo.field.cap.expiry.month.type, dummy.date.month());
  I.pressKey("Enter");
  I.click(opsinfo.field.cap.expiry.year.self);
  I.fillField(
    opsinfo.field.cap.expiry.year.type,
    dateFormat(dummy.date.future(4), "yyyy")
  );
  I.pressKey("Enter");

  //Payment of Collections
  if (
    variable.paymentOfCollections
      .willYourLabBeResponsibleForPaymentOfCollections.answer
  ) {
    I.click(opsinfo.radio.willYourLabBeResponsibleForPaymentOfCollections.yes);
    I.fillField(
      opsinfo.field.willYourLabBeResponsibleForPaymentOfCollections
        .defaultPaymentPerCollection,
      variable.paymentOfCollections
        .willYourLabBeResponsibleForPaymentOfCollections
        .defaultPaymentOfCollection
    );
    I.saveScreenshot("output/check_this.png",true)
  } else
    I.click(opsinfo.radio.willYourLabBeResponsibleForPaymentOfCollections.no);

  variable.schedule.laboratory.businessDays.forEach((day) => {
    /*     I.scrollTo(
      opshours.checkbox.businessHour[day.toString()],
      variable.axis.x,
      variable.axis.y
    );
    I.wait(1);
    I.click(opshours.checkbox.businessHour[day.toString()]);
    I.selectOption(
      opshours.checkbox.businessHour[day.toString()] +
        opshours.dropdown.openTime,
      variable.schedule.laboratory.businessHours.start[day.toString()]
    );
    I.selectOption(
      opshours.checkbox.businessHour[day.toString()] +
        opshours.dropdown.closeTime,
      variable.schedule.laboratory.businessHours.end[day.toString()]
    ); */
    I.scrollTo(
      opshours.checkbox.businessHour[day.toString()],
      variable.axis.x,
      variable.axis.y
    );
    I.wait(1);
    I.click(opshours.checkbox.businessHour[day.toString()]);
    I.selectTime(
      opshours.checkbox.businessHour[day.toString()] +
        opshours.dropdown.openTime,
      variable.schedule.laboratory.businessHours.start[day.toString()]
    );
    I.selectTime(
      opshours.checkbox.businessHour[day.toString()] +
        opshours.dropdown.closeTime,
      variable.schedule.laboratory.businessHours.end[day.toString()]
    );
  });

  I.selectOption(
    opsinfo.dropdown.labSpecialtyAndDescription.selectYourLabsPrimaryFocus,
    dummy.random.arrayElement(
      variable.array.labSpecialtyAndDescription.labFocus
    )
  );

  I.scrollPageToBottom();
  I.click(opsinfo.field.primaryMarketOfInterest.selectYourLabsPrimaryFocus);
  I.fillField(
    opsinfo.field.primaryMarketOfInterest.selectYourLabsPrimaryFocus,
    dummy.random.arrayElement(variable.array.msa)
  );
  I.pressKey("Enter");

  // I.selectOption(
  //   opsinfo.field.primaryMarketOfInterest.selectYourLabsPrimaryFocus,
  //   dummy.random.arrayElement(variable.array.msa)
  // );
  I.saveScreenshot(
    "output/Laboratory/User shall be able to change operations information.png",
    true
  );
  I.click(opshours.button.next);
});

Scenario("User shall be able to update payment info.", (I) => {
  I.scrollPageToTop();
  I.fillField(
    opspayment.field.card.holderName,
    variable.name.first + " " + variable.name.last
  );
  within({ frame: opspayment.field.card.iframe }, () => {
    I.fillField(
      opspayment.field.card.number,
      variable.credential.creditCard.number.valid
    );
    I.click(opspayment.field.card.expDate);
    I.fillField(
      opspayment.field.card.expDate,
      dateFormat(dummy.date.future(4), "mmyy")
    );
    I.click(opspayment.field.card.cvc);
    I.fillField(
      opspayment.field.card.cvc,
      dummy.random.number({ min: 100, max: 999 })
    );
    I.click(opspayment.field.card.zip);
    I.fillField(opspayment.field.card.zip, dummy.address.zipCode("#####"));
  });
  I.fillField(opspayment.field.billing.address1, dummy.address.streetAddress());
  I.fillField(
    opspayment.field.billing.address2,
    dummy.address.secondaryAddress()
  );
  I.fillField(opspayment.field.billing.city, dummy.address.city());
  I.selectOption(opspayment.field.billing.state, dummy.address.state());
  I.fillField(
    opspayment.field.billing.phone,
    dummy.phone.phoneNumberFormat().replace(/[^a-zA-Z0-9]/g, "")
  );
  I.fillField(
    opspayment.field.billing.email,
    format(variable.credential.email.laboratory, {
      placeholder: variable.credential.email.stamp + "+creditcard",
    })
  );
  I.saveScreenshot(
    "output/Laboratory/User shall be able to update payment info.png",
    true
  );
  I.click(opspayment.button.next);
});
