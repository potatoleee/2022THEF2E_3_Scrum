"use strict";

var candidateDOM = document.querySelector(".candidate");
var productBacklogDOM = document.querySelector(".productBacklog");
var btnOk = document.querySelector(".btnOk");

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
      answerMessage.innerHTML = "<p class='messageCorrect'>" + "順序正確" + "</p>"; // 答對彈跳視窗 start

      var modalTestOk = document.querySelector(".modal__test--ok");
      addClass(btnOk, "bg-secondary");
      btnOk.addEventListener("click", function (e) {
        e.preventDefault();
        addClass(modalTestOk, "open");
      }); // 答對彈跳視窗 end
    } else {
      answerMessage.innerHTML = "<p class='messageWrong'>" + "順序錯誤" + "</p>"; // 答錯彈跳視窗 start
      // const modalTestWrong = document.querySelector(".modal__test--wrong");
      // btnOk.addEventListener("click",function(e){
      // e.preventDefault();
      //  addClass(modalTestWrong,"open");
      //  console.log("答錯了");
      // })
      // 答錯彈跳視窗 end
    }
  }
});

function hasClass(el, className) {
  if (el.classList) return el.classList.contains(className);else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

function addClass(el, className) {
  if (el.classList) el.classList.add(className);else if (!hasClass(el, className)) {
    el.className += " " + className;
  }
}

function removeClass(el, className) {
  if (el.classList) el.classList.remove(className);else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
    el.className = el.className.replace(reg, ' ');
  }
}

var backlogDOM = document.querySelector(".backlog-section .droppable-container");
var sprintDOM = document.querySelector(".sprint-section .droppable-container");
var backlogArr = [{
  content: "前台職缺列表（職缺詳細內容、點選可發送應徵意願）",
  score: 5
}, {
  content: "應徵者的線上履歷編輯器",
  score: 13
}, {
  content: "會員系統（登入、註冊、權限管理）",
  score: 8
}, {
  content: "後台職缺管理功能（資訊上架、下架、顯示應徵者資料）",
  score: 8
}];
var totalScore = 0;
var totalScoreDOM = document.querySelector(".total-score");
totalScoreDOM.textContent = totalScore; // 以map方式創造DOM node, 並塞入backlog的container

backlogArr.map(function (ele) {
  var draggableCard = document.createElement("div");
  draggableCard.setAttribute("data-score", ele.score);
  draggableCard.setAttribute("draggable", "true");
  draggableCard.classList.add("draggble");
  draggableCard.textContent = ele.content;
  var timeAvatar = document.createElement("div");
  timeAvatar.classList.add("time-avatar");
  timeAvatar.textContent = ele.score;
  draggableCard.appendChild(timeAvatar);
  backlogDOM.appendChild(draggableCard);
});
//# sourceMappingURL=all.js.map
