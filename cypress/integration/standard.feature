Feature: Testing Login

 Scenario: Login With Valid Credentials
    Given that I already have an account on the OrangeHRM site
    When I type my valid username in the Username field
    And types my valid password in the Password field
    And click on the Login button
    Then I should access my account

  Scenario: Login With Invalid Password
    When I types my valid username in the Username field
    And type an invalid password in the Password field
    And click on the Login button
    Then I should get an error message says Invalid credentials

  Scenario: Login With Invalid UserName
    When I type an invalid username in the Username field
    And type valid password in the Password field
    And click on the Login button
    Then I should get an error message says Invalid credentials

  Scenario: Login With Blank Credentials
    When I click on the Login button without entering credentials
    Then I should get an error message says Required for both fields

  Scenario: Forget Password Verification
    Given that I already have an account on the OrangeHRM site
    When I click on the Forgot your password? link
    And type my username in the Username field
    And click on the Reset Password button
    Then I should get a message says Reset Password link sent successfully