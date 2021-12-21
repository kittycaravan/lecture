/**********************************************************************
로또 (v0.5.0)
***********************************************************************
[기존 기능]
- 1~45 당첨 숫자 6개 출력 기능
- 내 구매 로또 한 게임을 유저 배열에 6개 수 임의로 정하셔서 넣는 기능(하드코딩)
ex. 11, 12, 13, 14, 15, 16		
myLotto = [11, 12, 13, 14, 15, 16] ;
- 컴퓨터의 6개의 숫자랑 내꺼랑 비교해서 몇개가 일치하는 지 출력하기					 
ex. 3개 일치
- 컴퓨터가 1~45 수를 6개 뽑아서 출력. 단, 중복해서 번호가 나올 경우 다시 뽑기. 6개 다 뽑을 때 까지.
(계속 도중에 앞에 뽑은 번호와 중복 되는 번호가 나오면 다시 뽑게 처리 해야 함)
- 등수 출력
 	3개가 일치하면	5등입니다.	출력
	4 //	4등 //	
	5 //	3 //	
	6 //	1 //	
- 유저가 산 로또 번호 6개도 출력

[v0.5.0 업데이트 내용]
- 보너스 번호의 처리 구현
		* 보너스번호? *	추첨하는 번호는 6개 뿐만 아니라 1개의 보너스 번호도 추가로 추첨함.
			내가 산 로또 번호가 5개가 일치하면 3등인데 나머지 하나가 이 보너스 번호와 일치할 경우 2등이 됨.
			보너스 번호는 3등(번호 5개 당첨자) 만 2등 여부를 확인하는데 쓰는 번호로 5개 미만 당첨자들은 해당사항 없습니다.
- 등수도 5등~1등까지 다 출력		
**********************************************************************/
comLotto = new Array(6);
userLotto = [1,2,3,4,5,6];  // 유저 구매 로또
comBonusLotto = 0;

/* - 유저가 산 로또 번호 6개도 출력 */
dw("당신의 로또 번호: " + userLotto);
hr();

//추첨 번호 뽑기
//todo 단, 중복 시 다시 번호 뽑기

// 첫번째 번호:
comLotto[0]=Math.floor(Math.random()*45+1);
dw("첫번호: "+comLotto[0]);
hr();
// 두번째 번호:
while(true){
    comLotto[1]=Math.floor(Math.random()*45+1);
    if(comLotto[0] == comLotto[1]){
        continue;
    } else {
        dw("두번째 번호:"+comLotto[1]);
        hr();
        break;
    }
}
// 세번째 번호:
while(true){
    comLotto[2]=Math.floor(Math.random()*45+1);
    if(comLotto[0] == comLotto[2]){
        continue;
    } else if(comLotto[1] == comLotto[2]){
        continue;
    } else {
        dw("세번째 번호:"+comLotto[2]);
        hr();
        break;
    }
}
// 네번째 번호:
while(true){
    comLotto[3]=Math.floor(Math.random()*45+1);
    if(comLotto[0] == comLotto[3]){
        continue;
    } else if(comLotto[1] == comLotto[3]){
        continue;
    } else if(comLotto[2] == comLotto[3]){
        continue;
    } else {
        dw("네번째 번호:"+comLotto[3]);
        hr();
        break;
    }
}
// 다섯번째 번호:
while(true){
    comLotto[4]=Math.floor(Math.random()*45+1);
    if(comLotto[0] == comLotto[4]){
        continue;
    } else if(comLotto[1] == comLotto[4]){
        continue;
    } else if(comLotto[2] == comLotto[4]){
        continue;
    } else if(comLotto[3] == comLotto[4]){
        continue;
    } else {
        dw("다섯번째 번호:"+comLotto[4]);
        hr();
        break;
    }
}
// 여섯번째 번호:
while(true){
    comLotto[5]=Math.floor(Math.random()*45+1);
    if(comLotto[0] == comLotto[5]){
        continue;
    } else if(comLotto[1] == comLotto[5]){
        continue;
    } else if(comLotto[2] == comLotto[5]){
        continue;
    } else if(comLotto[3] == comLotto[5]){
        continue;
    } else if(comLotto[4] == comLotto[5]){
        continue;
    } else {
        dw("여섯번째 번호:"+comLotto[5]);
        hr();
        break;
    }
}
// 보너스번호
while(true){
    comBonusLotto=Math.floor(Math.random()*45+1);
    if(comLotto[0] == comBonusLotto){
        continue;
    } else if(comLotto[1] == comBonusLotto){
        continue;
    } else if(comLotto[2] == comBonusLotto){
        continue;
    } else if(comLotto[3] == comBonusLotto){
        continue;
    } else if(comLotto[4] == comBonusLotto){
        continue;
    } else if(comLotto[5] == comBonusLotto){
        continue;
    } else {
        dw("보너스 번호:"+comBonusLotto);
        hr();
        break;
    }
}



/* 일치 수 비교 */
var winningCount = 0;
for(var i=0;i<userLotto.length;i++){
    for(var j=0;j<comLotto.length;j++){
        if(userLotto[i] == comLotto[j]){
            dw("하나 당첨");
            hr();
            winningCount++;
        }
    }
}

dw("총 당첨된 갯수는 :"+winningCount);

hr();
/* 등수 출력 */
var rank = "";
switch(winningCount){
    case 3:
        rank = "5등입니다.";
        break;
    case 4:
        rank = "4등입니다.";
        break;
    case 5:
        rank = "3등입니다.";
        //보너스 번호가 맞았는지 체크(이 3등 당첨자 만을 대상으로 하면 되므로)
        for(var i=0;i<6;i++){
            if(userLotto[i] == comBonusLotto){
                rank = "2등입니다.";
            }
        }
        break;
    case 6:
        rank = "1등입니다.";
        break;
    default:
        rank = "꽝입니다."        
        break;
}
dw("등수: "+rank);