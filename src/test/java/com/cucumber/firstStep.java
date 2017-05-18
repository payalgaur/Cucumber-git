package com.cucumber;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;


public class firstStep {

    NumberAPI numberAPI = new NumberAPI();

    @Given("^I have two numbers$")
    public void fetchNumbers() throws Throwable {
        System.out.println("Two Numbers are 2 and 4");
    }

    @And("^there is third number$")
    public void there_is_third_number() throws Throwable {
        System.out.println("Third Number is 6");
    }

    @When("^I add \"([^\"]*)\" the numbers$")
    public void i_add_the_numbers(String parameter) throws Throwable {
        if (parameter.equalsIgnoreCase("all")){
            Assert.assertEquals(12, numberAPI.sumOfAllNumbers(2, 4, 6));//actual = expected result
            System.out.println("Sum of" + parameter + " numbers is: " + numberAPI.sumOfAllNumbers(2,4,6));
        } else if (parameter.equalsIgnoreCase("both")){
            Assert.assertEquals(6,numberAPI.sumOfTwoNumbers(2,4));
            System.out.println("Sum of" + parameter + " numbers is: " + numberAPI.sumOfTwoNumbers(2,4));
        }
    }

    @Then("^numbers should be added$")
    public void numbers_should_be_added() throws Throwable {
        System.out.println("Numbers added successfully");
    }

    @And("^check the result$")
    public void check_the_result() throws Throwable {
        System.out.println("Tested");
    }
}
