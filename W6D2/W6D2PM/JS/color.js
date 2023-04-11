var tag = document.querySelector('#test'); /* 위의 아이디로 설정한 test의 값을 가져온다 */
   
tag.onclick = function(){ /* 클릭했을 때 이벤트가 발생하게 한다.  */
   /* console.log("클릭했습니다.") /* 클릭했을 때 로그에 몇번 클릭했는지 기록되는 이벤트이다.  */

   tag.style.color="red"; /* 클릭했을 때 색이 변경되는 이벤트가 발생하게 한다.  */
}

console.log(tag);