const candidateDOM = document.querySelector(".candidate");
const productBacklogDOM = document.querySelector(".productBacklog");
const btnOk = document.querySelector(".btnOk");
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
        // 答對彈跳視窗 start
        const modalTestOk = document.querySelector(".modal__test--ok");
        addClass(btnOk,"bg-secondary")
        btnOk.addEventListener("click",function(e){
        e.preventDefault();
        addClass(modalTestOk,"open"); 
      })
    // 答對彈跳視窗 end
    } else {
      answerMessage.innerHTML =
        "<p class='messageWrong'>" + "順序錯誤" + "</p>";
        // 答錯彈跳視窗 start
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
  if (el.classList)
      return el.classList.contains(className);
  else
      return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}
    
function addClass(el, className) {
  if (el.classList)
      el.classList.add(className);
  else if (!hasClass(el, className)) {
      el.className += " " + className;
  }
}

function removeClass(el, className) {
  if (el.classList)
      el.classList.remove(className);
  else if (hasClass(el, className)) {
      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
      el.className=el.className.replace(reg, ' ');
  }
}



const backlogDOM = document.querySelector(
  ".backlog-section .droppable-container"
);
const sprintDOM = document.querySelector(
  ".sprint-section .droppable-container"
);

const backlogArr = [
  { content: "前台職缺列表（職缺詳細內容、點選可發送應徵意願）", score: 5 },
  { content: "應徵者的線上履歷編輯器", score: 13 },
  { content: "會員系統（登入、註冊、權限管理）", score: 8 },
  { content: "後台職缺管理功能（資訊上架、下架、顯示應徵者資料）", score: 8 }
];

let totalScore = 0;
let totalScoreDOM = document.querySelector(".total-score");
totalScoreDOM.textContent = totalScore;

// 以map方式創造DOM node, 並塞入backlog的container
backlogArr.map((ele) => {
  let draggableCard = document.createElement("div");
  draggableCard.setAttribute("data-score", ele.score);
  draggableCard.setAttribute("draggable", "true");
  draggableCard.classList.add("draggble");
  draggableCard.textContent = ele.content;

  let timeAvatar = document.createElement("div");
  timeAvatar.classList.add("time-avatar");
  timeAvatar.textContent = ele.score;

  draggableCard.appendChild(timeAvatar);

  backlogDOM.appendChild(draggableCard);
});














