"use strict";
var a = 3;
var sum = 0;
for (var i = 1; i <= 10; i++) {
    sum = a * i;
    console.log("THE table of 3 is ", a, "X", i, "=", sum);
}
var b = 5;
var sum2 = 0;
var j = 1;
while (j <= 10) {
    sum2 = b * j;
    console.log("THE table of 5 is  ", b, "X", j, "=", sum2);
    j++;
}
var c = 9;
var sum3 = 0;
var k = 1;
do {
    sum3 = c * k;
    console.log("THE table of 9 is   ", c, "X", k, "=", sum3);
    k++;
} while (k <= 10);
