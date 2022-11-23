const candidateDOM = document.querySelector(".candidate");
const productBacklogDOM = document.querySelector(".productBacklog");
const isArrEqual = (arr1, arr2) => {
  return arr1.join("") === arr2.join("") ? true : false;
};
const answerAry = ["1", "2", "3", "4"];

var candidate = Sortable.create(candidateDOM, { 
  group: "shart",
  animation: 500
});

var productBacklog = Sortable.create(productBacklogDOM, {
  group: "shart",
  onSort: () => {
    const answerMessage = document.querySelector(".message");
    let order = productBacklog.toArray();
    console.log(order);
    const answerrr = isArrEqual(order, answerAry); // true
    if (answerrr === true) {
      answerMessage.innerHTML =
        "<p class='messageCorrect'>" + "順序正確" + "</p>";
    } else {
      answerMessage.innerHTML =
        "<p class='messageWorng'>" + "順序錯誤" + "</p>";
    }
  }
});
