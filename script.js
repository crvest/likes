var count = [1,1,1];
var countElement1 = document.querySelector("#count1");
var countElement2 = document.querySelector("#count2");
var countElement3 = document.querySelector("#count3");

function addLike1() {
    count[0]++;
    countElement1.innerText = count[0];
}

function addLike2() {
    count[1]++;
    countElement2.innerText = count[1];
}

function addLike3() {
    count[2]++;
    countElement3.innerText = count[2];
}
