/*
    공통함수들을 모아놓음
*/
function dw(str){    // var str; var str = "고양이";
    var screenString = screen.value;
    screenString = screenString + str;
    screen.value = screenString;
    // document.write(str);
}
function br(){
    document.write("<br>");
}
function hr(){
    document.write("<hr>");
}
