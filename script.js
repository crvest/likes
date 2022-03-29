var count = [1,1,1];
var countElement = [document.querySelector("#count1"), document.querySelector("#count2"), document.querySelector("#count3")];

function addLike1() {
    count[0]++;
    countElement[0].innerText = count[0];
}

function addLike2() {
    count[1]++;
    countElement[1].innerText = count[1];
}

function addLike3() {
    count[2]++;
    countElement[2].innerText = count[2];
}
