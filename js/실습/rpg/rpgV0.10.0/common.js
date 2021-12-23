/*
    공통함수들을 모아놓음
*/
function print(str){
    var screenString = screenMessage.value;
    screenString = screenString + str;
    screenMessage.value = screenString;
}
function printPlayer(str){
    screenPlayer.value = str;
}
function br(){
    document.write("<br>");
}
function hr(){
    document.write("<hr>");
}
