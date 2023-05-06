/* 
    플레이어 케릭터 클래스 
    
    name 이름
    hp 현재체력
    attack 공격력 (0~공격력<랜덤> 만큼 데미지를 줌)
*/
function Character(name,hp,attack){ 
    /* 속성, 프로퍼티 */
    this.name = name;  // 이름
    this.currentHp = hp;    // 현재체력
    this.maxHp = hp;    // 최대체력
    this.attack = attack; // 공격력
    this.exp = 0;   // 경험치
    this.lv = 1;    // 레벨    
    this.money = 0; // 돈
    /* 멤버함수, 멤버메소드 */
    this.info = function(){ // 플레이어 정보 창에 플레이어 정보 출력하는 함수. ex. [엠피스(70/100)]<exp: 100>
        tvPlayerInfo("["+this.name+"] <lv:"+ this.lv + "> ❤:"+this.currentHp + "/" + this.maxHp+" 🗡:"+ this.attack);
        divInnerHtmlPlayerExp(this.lv, this.exp);
        span_gold.innerHTML = this.money+"원";  // gold 표시
    }
    /* 현재 레벨의 필요 경험치 리턴. 임시로 lv 1 : 1000 / 2 : 2000 ... 10 : 10000*/ 
    this.getNextLevelRequiredExp = function(){
        return this.lv * 1000;
    }
}