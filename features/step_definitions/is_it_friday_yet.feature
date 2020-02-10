Feature: Find is it Friday
    Everybody want to know when it's Friday

    Scenario: Sunday isn't Friday
        Given today is Sunday
        When I ask wether it's Friday yet
        Then I should be told "Nope"