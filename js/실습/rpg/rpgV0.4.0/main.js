/**********************************************************************
rpg (v0.4.0)
***********************************************************************
[기존 기능]
- 몬스터 클래스 생성
- 플레이어 클래스 생성
- 몬스터 객체 생성(orc)
- 플레이어 객체 생성(elf)
- 전투 시작 메세지 출력
- 전투 처리 ( 한 턴 <한차례의 서로간의 공격> )
- 공격력을 해당 공격력 수치와 0사이의 값이 랜덤으로 나오도록 수정하였습니다.
- 공격 메세지 출력 추가( ex. 오크전사가 엠피스에게 데미지를 10 입혔습니다. )

[v0.4.0 업데이트 내용]
- 체력 표시를 [현재체력/최대체력] 식으로 변경하였습니다.
- 케릭터 정보 표시를 수정하였습니다. ex. [엠피스(70/100)]
- 케릭터 정보 표시에서 공격력 수치를 제거하였습니다.

**********************************************************************/
function Monster(name,hp,attack){ 
    //속성, 프로퍼티    
    this.name = name;  // 이름
    this.currentHp = hp;    // 현재체력
    this.maxHp = hp;    // 최대체력
    this.attack = attack; // 공격력

    this.info = function(){
        hr();
        // - 케릭터 정보 표시를 수정하였습니다. ex. [엠피스(70/100)]
        // - 케릭터 정보 표시에서 공격력 수치를 제거하였습니다.
        dw("["+this.name+"("+this.currentHp + "/" + this.maxHp+")]");
        hr();
    }
}
function Character(name,hp,attack){ 
    //속성, 프로퍼티    
    this.name = name;  // 이름
    this.currentHp = hp;    // 현재체력
    this.maxHp = hp;    // 최대체력
    this.attack = attack; // 공격력

    this.info = function(){
        hr();
        dw("["+this.name+"("+this.currentHp + "/" + this.maxHp+")]");
        hr();
    }
}

var orc = new Monster("오크전사",100,10);
var elf = new Character("엠피스",200,30);

orc.info();
elf.info();

//todo 전투 처리 ( 한 턴 <한차례의 서로간의 공격> )
//전투 시작 메세지
hr();
dw("전투 시작")
hr();

// 공격 메세지 출력 추가( ex. 오크전사가 엠피스에게 데미지를 10 입혔습니다. )
var monsterDamage = getRandomAttackValue(orc.attack);
var playerDamage = getRandomAttackValue(elf.attack);

orc.currentHp = orc.currentHp - playerDamage;
dw(elf.name + "가 " + orc.name + "에게 데미지를 "+playerDamage +" 입혔습니다.<br>");
elf.currentHp = elf.currentHp - monsterDamage;
dw(orc.name + "가 " + elf.name + "에게 데미지를 "+monsterDamage +" 입혔습니다.<br>");


orc.info();
elf.info();

function getRandomAttackValue(attack){
    attack = attack + 1;    //ex. 공격력이 10이라고 하면 0~10의 수치로 나와야 하므로
    var random = Math.floor(Math.random()*attack);  // ex. 공격력이 11이고 이 랜덤처리를 하면 랜덤 값은 0~10이 나옴
    return random;
}