$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/RegisterUser.feature");
formatter.feature({
  "name": "To Register in TechFish Bank",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User Registration",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@register"
    }
  ]
});
formatter.step({
  "name": "User is able to launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_is_able_to_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provides the neccessary details for SignUp",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_provides_the_neccessary_details_for_SignUp()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks SignUp button",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_clicks_SignUp_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Add Recipients",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddRecipient"
    }
  ]
});
formatter.step({
  "name": "User is able to launch the application",
  "keyword": "Given "
});
formatter.step({
  "name": "User provides username and password and click sign in button",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks Add/Edit recipient",
  "keyword": "When "
});
formatter.step({
  "name": "User provides Recipient details \"\u003cName\u003e\" and \"\u003cEmail\u003e\" and \"\u003cPhone\u003e\" and \"\u003cAccountNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks Add/Edit Recipient button",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Name",
        "Email",
        "Phone",
        "AccountNumber"
      ]
    },
    {
      "cells": [
        "abc51",
        "abc21@gmail.com",
        "123456",
        "998176"
      ]
    },
    {
      "cells": [
        "abc42",
        "abc32@gmail.com",
        "364567",
        "987695"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Add Recipients",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddRecipient"
    }
  ]
});
formatter.step({
  "name": "User is able to launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_is_able_to_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provides username and password and click sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_provides_username_and_password_and_click_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Add/Edit recipient",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_clicks_Add_Edit_recipient()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provides Recipient details \"abc51\" and \"abc21@gmail.com\" and \"123456\" and \"998176\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_provides_Recipient_details_and_and_and(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Add/Edit Recipient button",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_clicks_Add_Edit_Recipient_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Recipients",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddRecipient"
    }
  ]
});
formatter.step({
  "name": "User is able to launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.user_is_able_to_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provides username and password and click sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_provides_username_and_password_and_click_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Add/Edit recipient",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.user_clicks_Add_Edit_recipient()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User provides Recipient details \"abc42\" and \"abc32@gmail.com\" and \"364567\" and \"987695\"",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_provides_Recipient_details_and_and_and(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks Add/Edit Recipient button",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_clicks_Add_Edit_Recipient_button()"
});
formatter.result({
  "status": "passed"
});
});