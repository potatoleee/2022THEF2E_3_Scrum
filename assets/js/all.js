"use strict";

var candidateDOM = document.querySelector(".candidate");
var productBacklogDOM = document.querySelector(".productBacklog");

var isArrEqual = function isArrEqual(arr1, arr2) {
  return arr1.join("") === arr2.join("") ? true : false;
};

var answerAry = ["1", "2", "3", "4"];
var candidate = Sortable.create(candidateDOM, {
  group: "shart",
  animation: 500
});
var productBacklog = Sortable.create(productBacklogDOM, {
  group: "shart",
  onSort: function onSort() {
    var answerMessage = document.querySelector(".message");
    var order = productBacklog.toArray();
    console.log(order);
    var answerrr = isArrEqual(order, answerAry); // true

    if (answerrr === true) {
      answerMessage.innerHTML = "<p class='messageCorrect'>" + "順序正確" + "</p>";
    } else {
      answerMessage.innerHTML = "<p class='messageWorng'>" + "順序錯誤" + "</p>";
    }
  }
});
//# sourceMappingURL=all.js.map
