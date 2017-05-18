@tag
Feature: Testing my Framework

  Background:
    Given I have two numbers
  @tag1
  Scenario: Add two numbers 2 and 4.
    When I add "both" the numbers
    Then numbers should be added

  @tag2
  Scenario: Add three numbers 2 and 4 and 6.
    And there is third number
    When I add "all" the numbers
    Then numbers should be added
    And check the result
