//TESTS

var testIntArray = [1, 2, 3, 4];
var testObjArray = [
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 },
  { name: "matt", age: 31 },
  { name: "lizzy", age: 27 },
  { name: "landon", age: 6 },
  { name: "avery", age: 0 }
];
var testString = "hello world!";

/*Loop(testIntArray)
  .for()
  .to()
  .do(function(i, val, sender) {
    console.log(val[i]);
  });

Loop(testIntArray)
  .forr()
  .to()
  .do(function(i, val, sender) {
    console.log(val[i]);
  });
function loop1(a, b, c) {
  //console.log("1-" + a);
  Loop()
    .for(0)
    .to(c.end)
    .do(loop2);
}

function loop2(a, b, c) {
  //console.log("2-" + a);
  Loop()
    .for(0)
    .to(c.end)
    .do(endLoop);
}

function endLoop(a, b, c) {
  if (a == 99) {
    console.log("3-" + a.toString());
  }
}*/
var testArray = [];
for (var x = 0; x < 50000; x++) {
  for (var y = 0; y < testObjArray.length; y++) {
    testArray.push(testObjArray[y]);
  }
}

function testTime(num, callback) {
  var totalTime = 0.0,
    startTime = Date.now(),
    endTime = Date.now();
  for (var x = 0, len = num; x < len; x++) {
    startTime = Date.now();
    callback();
    endTime = Date.now();
    totalTime += endTime - startTime;
  }
  console.log(Number(totalTime / (num + 0.0)).toFixed(6));
}

//Loop().for(0).to(100).do(loop1);
var testOut1 = [];

function forTest1() {
  Loop(testArray)
    .forr()
    .to()
    .do(test1Return);
}

function forTest2() {
  Loop(testArray).pop(test2Return, true);
}

function jsForTest1() {
  for (var x = 0; x < testArray.length; x++) {
    testOut1.push(testArray[x].name + " : " + testArray[x].age);
  }
}

function test1Return(a, b, c) {
  testOut1.push(b[a].name + " : " + b[a].age);
}

function test2Return(a, b) {
  testOut1.push(b.name + " : " + b.age);
}

testTime(1, forTest1);
console.log("output length: " + testOut1.length);
testOut1 = [];
testTime(1, jsForTest1);
console.log("output length: " + testOut1.length);
testOut1 = [];
testTime(1, forTest2);
console.log("output length: " + testOut1.length);
