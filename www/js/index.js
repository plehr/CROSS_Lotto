document.addEventListener('deviceready', init, false);

var arr;
var maxNum = 6;

function init() {
    arr = [];
    for (let index = 1; index <= 49; index++)
        arr.push(index)
    document.getElementById("btn_play").addEventListener("click", function () {
        document.getElementById("count").innerHTML = "";
        for (let i = 0; i < maxNum; i++) {
            var num;
            do {
                num = getRandNum(1, 49);
            } while (!checkNum(num))
            document.getElementById("count").innerHTML += num + "";
            if (i < maxNum - 1)
                document.getElementById("count").innerHTML += ",";
            arr[num-1] = null;
        }
    })
}
function getRandNum(from, to) {
    return Math.floor(Math.random(from) * Math.floor(to))
}
function checkNum(num) {
    return arr.includes(num);
}