/**********************************************************************
rpg (v0.2.0)
***********************************************************************
[기존 기능]
- 몬스터 클래스 생성
- 플레이어 클래스 생성
- 몬스터 객체 생성(orc)
- 플레이어 객체 생성(elf)

[v0.2.0 업데이트 내용]
- 전투 시작 메세지 출력
- 전투 처리 ( 한 턴 <한차례의 서로간의 공격> )

**********************************************************************/
function Monster(name,hp,attack){ 
    //속성, 프로퍼티    
    this.name = name;  // 이름
    this.hp = hp;    // 체력
    this.attack = attack; // 공격력

    this.info = function(){
        hr();
        dw("["+this.name+"]["+this.hp+"][atk:"+this.attack+"]");
        hr();
    }
}
function Character(name,hp,attack){ 
    //속성, 프로퍼티    
    this.name = name;  // 이름
    this.hp = hp;    // 체력
    this.attack = attack; // 공격력

    this.info = function(){
        hr();
        dw("["+this.name+"]["+this.hp+"][atk:"+this.attack+"]");
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

orc.hp = orc.hp - elf.attack;
elf.hp = elf.hp - orc.attack;


orc.info();
elf.info();