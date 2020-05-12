Feature: To Register in TechFish Bank

@register
Scenario: User Registration
Given User is able to launch the application
When User provides the neccessary details for SignUp
Then User clicks SignUp button

@AddRecipient
Scenario Outline: Add Recipients
Given User is able to launch the application
And User provides username and password and click sign in button
When User clicks Add/Edit recipient 
And User provides Recipient details "<Name>" and "<Email>" and "<Phone>" and "<AccountNumber>" 
Then User clicks Add/Edit Recipient button

Examples:
|Name|Email|Phone|AccountNumber|
|abc61|abc21@gmail.com|123456|998176|
|abc62|abc32@gmail.com|364567|987695|
