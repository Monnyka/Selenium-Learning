Feature: Open Google Page
  This feature will open google page

  Scenario: Open Google Page
    Given https://google.com
    When Search for google website
    Then It should be loaded to https://google.com