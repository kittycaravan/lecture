/* 이벤트 리스너들 여기에 */
// 스페이스바가 눌리면 cat 함수 실행
document.addEventListener('keydown', function (event) {
    if (event.code === 'Space') {
        turn();
    }
});


