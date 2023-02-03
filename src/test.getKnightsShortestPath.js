const displayTestResult = (results) => {
  const testsContainer = document.querySelector(".tests-container");
  const resultsDiv = document.createElement("div");
  resultsDiv.textContent = results;
  return testsContainer.appendChild(resultsDiv);
};

const displaySeparation = () => {
  const testsContainer = document.querySelector(".tests-container");
  const div = document.createElement("div");
  div.classList.add("separator");
  return testsContainer.appendChild(div);
};
const testGetKnightsShortestPath = (knightsShortestPathFunc, printPathFunc) => {
  const errMsg = "Please use positive interger coordinates that fall within an 8x8 board i.e. [0,0] to [7, 7]";
  const test1 = [
    [0, 0],
    [1, 2],
  ];
  const test1Expected = 1;

  const test2 = [
    [0, 0],
    [3, 3],
  ];
  const test2Expected = 2;

  const test3 = [
    [3, 3],
    [4, 3],
  ];
  const test3Expected = 3;

  const test4 = [
    [3, 3],
    [7, 7],
  ];
  const test4Expected = 4;

  const test5 = [
    [0, 0],
    [7, 7],
  ];
  const test5Expected = 6;

  const test6 = [
    [6, 3],
    [2, 4],
  ];
  const test6Expected = 3;

  const test7 = [
    [0, 0],
    [1, 0],
  ];
  const test7Expected = 3;

  const test8 = [1, 2];
  const test8Expected = errMsg;

  const test9 = ["hello", "world"];
  const test9Expected = errMsg;

  const test10 = [[], []];
  const test10Expected = errMsg;

  const test11 = [
    [9, 7],
    [0, 0],
  ];
  const test11Expected = errMsg;

  const test12 = [
    [-1, 0],
    [3, 3],
  ];
  const test12Expected = errMsg;

  const test13 = [
    [false, false],
    [true, true],
  ];
  const test13Expected = errMsg;

  const testCases = [
    [test1, test1Expected],
    [test2, test2Expected],
    [test3, test3Expected],
    [test4, test4Expected],
    [test5, test5Expected],
    [test6, test6Expected],
    [test7, test7Expected],
    [test8, test8Expected],
    [test9, test9Expected],
    [test10, test10Expected],
    [test11, test11Expected],
    [test12, test12Expected],
    [test13, test13Expected],
  ];

  testCases.forEach((testCase) => {
    const test = testCase[0];
    const expected = testCase[1];
    const result = knightsShortestPathFunc(test[0], test[1]);

    let pass = false;

    if (Array.isArray(result) && result.length - 1 === expected) {
      pass = true;
    }

    if (typeof result === "string" && result === expected) {
      pass = true;
    }

    if (!pass) {
      const message = `Test case failed for Test: [${test[0]}], [${test[1]}]: Expected ${expected} moves, got ${result}`;
      console.error(message);
      displayTestResult(message);
    } else {
      const message = `Test case passed for Test: [${test[0]}], [${test[1]}]`;
      displayTestResult(message);
      console.log(message);
    }

    printPathFunc(result);
    displaySeparation();
    console.log("");
  });
};

export default testGetKnightsShortestPath;
