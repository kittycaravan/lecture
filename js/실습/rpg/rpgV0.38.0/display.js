/*
    화면 출력용 함수들을 모아놓음
*/

/* display 용 전역변수들 */
var isBagOpened = false;


/* 메세지창의 내용이 길어질 경우 상하 스크롤을 맨 아래로 위치시키는 함수 */
function screenMessageBoxScrollToBot() {
    screenMessageBox.scrollTop = screenMessageBox.scrollHeight;
}
/* textarea 의 value 에 텍스트 입력 처리하는 함수 (줄여서 tv 로 함) - 메세지 창 쪽 */
function tv(str){
    var screenString = screenMessageBox.value;
    screenString = screenString + str;
    screenMessageBox.value = screenString;

    screenMessageBoxScrollToBot();
}
/* textarea 텍스트 지우기 */
function tvClear(){
    screenMessageBox.value = "";
}
/* textarea 의 value 에 텍스트 입력 처리하는 함수 (줄여서 tv 로 함) - 플레이어 정보 창 쪽 */
function tvPlayerInfo(str){
    // var screenString = screenPlayerInfo.value;
    screenPlayerInfo.value = str;
}
/* div - 경험치에 표시 */
function divInnerHtmlPlayerExp(lv, exp){    
    var requiredExp = elf.getNextLevelRequiredExp();    // 다음 레벨에 필요한 경험치
    divExp.innerHTML = "[ " + exp + " / " + requiredExp + " exp ]"; // 경험치 바에 경험치 표시
}

/* textarea 텍스트 지우기 */
function tvPlayerInfoClear(){
    screenPlayerInfo.value = "";
}

/* 플레이어 정보 출력 */
function displayCharactersInfo() {
    elf.info();
}
/* 방 정보 보여주기 */
function displayRoomInfo() {
    roomGetCurrentRoom().displayRoomInfo();
    displayCurrentRoomMonstersInfo();
    //todo 방에 있는 npc들 출력
    displayCurrentRoomNpcsInfo();
    
}
/* 현재 턴 출력 */
function displayCurrentTurn() {
    itTurn.value = turnCount;   // 현재 턴 표시
    console.log("현재 턴:" + turnCount);
}
/* 현재 방의 몬스터들을 출력 처리 */
function displayCurrentRoomMonstersInfo(){
    // 현재 방에 있는 몬스터들이 뭐가 있는지 출력
    var currentRoomMonstersArray = roomGetCurrentRoomMobs();
    var monstersString = "";    // 게임 오브젝트 창에 몬스터 간략정보들을 저장할 변수 선언
    
    for(var i=0;i<currentRoomMonstersArray.length;i++){
        console.log(currentRoomMonstersArray[i].name);

        // 게임 오브젝트 창에 몬스터 간략정보들을 저장할 변수에 누적시키기        
        if(currentRoomMonstersArray[i].aggressionType == "H"){  // 적대적인 몹은 class monsters_hostile 로 태그 구성
            monstersString = monstersString + "<span class='monsters_hostile' id='" 
            + currentRoomMonstersArray[i].id + "' onclick='mobClick(this.id)'"
            +  ">" + currentRoomMonstersArray[i].getInfo() + "</span>";
        } else if(currentRoomMonstersArray[i].aggressionType == "N"){ // 비 적대적인 몹은 class monsters_none 로 태그 구성
            monstersString = monstersString + "<span class='monsters_none' id='" 
            + currentRoomMonstersArray[i].id + "' onclick='mobClick(this.id)'"
            +  ">" + currentRoomMonstersArray[i].getInfo() + "</span>";            
        }

    }    
    screenGameObjectNew.innerHTML = monstersString;
}
/* 현재 방의 NPC들을 출력 처리 */
function displayCurrentRoomNpcsInfo(){
    // 현재 방에 있는 NPC들이 뭐가 있는지 출력
    var currentRoomNpcsArray = roomGetCurrentRoomNpcs();
    var npcsString = "";    // 게임 오브젝트 창에 몬스터 간략정보들을 저장할 변수 선언
    
    for(var i=0;i<currentRoomNpcsArray.length;i++){
        console.log(currentRoomNpcsArray[i].name);

        // 게임 오브젝트 창에 NPC 정보들을 저장할 변수에 누적시키기
        npcsString = npcsString + "<span class='npcs' id='" 
        + currentRoomNpcsArray[i].id + "' onclick='npcClick(this.id)'"
        +  ">" + currentRoomNpcsArray[i].getInfo() + "</span>";

    }    
    screenGameObjectNpc.innerHTML = npcsString;
}
/* 가방 클릭 */
function displayBagToggle(){
    // 가방 창 열기/닫기
    if(isBagOpened == true){    // 가방이 열려있으면
        div_bag.style.display = "none"; // 가방 창 닫기
        isBagOpened = false;            // 가방 창 전역변수 수정
    } else {
        div_bag.style.display = "block";// 가방 창 열기
        isBagOpened = true;             // 가방 창 전역변수 수정
        displayBagItemList();
    }
}
/* 가방 창을 열었을 때 가방아이템 리스트를 표시 */
function displayBagItemList(){
    var str = "";
    for(var i=0;i<bagItemArray.length;i++){
        str += "<div class='bag_item' id='" + bagItemArray[i].id + "' onclick='bagItemClick(this.id)'"
        + ">" + bagItemArray[i].itemName + "</div>";
    }
    div_bag.innerHTML = str;
}

