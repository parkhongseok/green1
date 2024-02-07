$(function(){ //비동기 문서 준비 이벤트
  $('.menu-toggle-btn').click(function(){
    //menu toggle btn을 클릭했을 때의 기능은 
    $('.gnb').stop().slideToggle('fast');
    //.gnb가 내려오고 빠르게 올라간다.
  })
})
// $는 선택자라고 한다. $표시가 들어가면 jquery다. 
// cdn이 없으면 선언이 안된다.