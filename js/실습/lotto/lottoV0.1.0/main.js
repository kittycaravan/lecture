/**********************************************************************
로또 (v0.1.0)
- 1~45 당첨 숫자 6개 출력 기능

todo:
**********************************************************************/
comLotto = new Array(6);
for(var i=0;i<comLotto.length;i++){
    comLotto[i]=Math.floor(Math.random()*45+1);
    dw(comLotto[i]);
    hr();
}