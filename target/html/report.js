$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("First.feature");
formatter.feature({
  "line": 2,
  "name": "Testing my Framework",
  "description": "",
  "id": "testing-my-framework",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I have two numbers",
  "keyword": "Given "
});
formatter.match({
  "location": "firstStep.fetchNumbers()"
});
formatter.result({
  "duration": 379641182,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Add two numbers 2 and 4.",
  "description": "",
  "id": "testing-my-framework;add-two-numbers-2-and-4.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I add \"both\" the numbers",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "numbers should be added",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "both",
      "offset": 7
    }
  ],
  "location": "firstStep.i_add_the_numbers(String)"
});
formatter.result({
  "duration": 4576717,
  "status": "passed"
});
formatter.match({
  "location": "firstStep.numbers_should_be_added()"
});
formatter.result({
  "duration": 48614,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I have two numbers",
  "keyword": "Given "
});
formatter.match({
  "location": "firstStep.fetchNumbers()"
});
formatter.result({
  "duration": 63575,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Add three numbers 2 and 4 and 6.",
  "description": "",
  "id": "testing-my-framework;add-three-numbers-2-and-4-and-6.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "there is third number",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I add \"all\" the numbers",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "numbers should be added",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "check the result",
  "keyword": "And "
});
formatter.match({
  "location": "firstStep.there_is_third_number()"
});
formatter.result({
  "duration": 59603,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "all",
      "offset": 7
    }
  ],
  "location": "firstStep.i_add_the_numbers(String)"
});
formatter.result({
  "duration": 201583,
  "status": "passed"
});
formatter.match({
  "location": "firstStep.numbers_should_be_added()"
});
formatter.result({
  "duration": 61214,
  "status": "passed"
});
formatter.match({
  "location": "firstStep.check_the_result()"
});
formatter.result({
  "duration": 51719,
  "status": "passed"
});
});