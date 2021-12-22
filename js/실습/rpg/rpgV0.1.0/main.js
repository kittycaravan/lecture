/**********************************************************************
rpg (v0.1.0)
***********************************************************************

[v0.1.0 업데이트 내용]
- 몬스터 클래스 생성
- 플레이어 클래스 생성
- 몬스터 객체 생성(orc)
- 플레이어 객체 생성(elf)


**********************************************************************/
function Monster(name,hp,attack){ 
    //속성, 프로퍼티    
    this.name = name;  // 이름
    this.hp = hp;    // 체력
    this.attack = attack; // 공격력

    this.info = function(){
        hr();
        dw("["+name+"]["+hp+"][atk:"+attack+"]");
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
        dw("["+name+"]["+hp+"][atk:"+attack+"]");
        hr();
    }
}

var orc = new Monster("오크전사",100,10);
var elf = new Character("엠피스",200,30);

orc.info();
elf.info();