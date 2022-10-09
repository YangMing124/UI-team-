var chess = document.getElementById("chess");
var context = chess.getContext('2d');  //getContext() 方法返回一个用于在画布上绘图的环境。

context.strokeStyle = "#bfbfbf";    //strokeStyle 属性设置或返回用于笔触的颜色、渐变或模式。

var logo = new Image();             //Image 对象代表嵌入的图像。
logo.src = "images/小埋.png";
logo.onload = function () {
    context.drawImage(logo, 0, 0, 450, 450); 
    drawChessBoard();      //drawImage() 方法绘制一幅图像。
}


var drawChessBoard = function () {
    for (var i = 0; i < 15; i++) {
        context.moveTo(15 + i * 30, 15);
        context.lineTo(15 + i * 30, 435);
        context.stroke();                   //描边
        context.moveTo(15, 15 + i * 30);
        context.lineTo(435, 15 + i * 30);
        context.stroke();
    }
}

var oneStep = function (i, j, me) {
    context.beginPath();
    context.arc(15 + i * 30, 15 + j * 30, 13, 0, 2 * Math.PI);
    context.closePath();

    var gradient;
    if (me) {
        gradient = "#000";
    }
    else {
        gradient = "#f80";
    }
    context.fillStyle = gradient;
    context.fill();                    //填充
}

//棋盘位置的创建
var me = true;
var chessBoard = [];

for (var i = 0; i < 15; i++) {
    chessBoard[i] = [];
    for (var j = 0; j < 15; j++) {
        chessBoard[i][j] = 0;
    }
}

chess.onclick = function (e) {
    var x = e.offsetX;
    var y = e.offsetY;
    var i = Math.floor(x / 30);
    var j = Math.floor(y / 30);
    if (chessBoard[i][j] == 0) {
        oneStep(i, j, me);
        if (me) {
            chessBoard[i][j] = 1;
        }
        else {
            chessBoard[i][j] = 2;
        }
        me = !me;
    }
    else{
        alert("不能落子");
    }
    console.log(chessBoard);
}
