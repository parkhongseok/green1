// 첫번째 article요소만 선택
const articles = document.querySelectorAll('article');

//패럴렉스 효과
window.addEventListener('scroll', doScroll)



function doScroll(){
  let scrollMove = window.scrollY;
  let ht = articles[0].offsetHeight;
  articles.forEach((el)=>{
    //
    let thisTop = scrollMove_ + el.getBoundingClientRect().top;
    console.log(thistop)
    let start = thisTop - ht;
    let end = thisTop + ht;
    if(scrollMove > start && scrollMove <= end){
      let value = scrollMove - start;
      el.querySelector('.image').style.bottom = -(value/3) + 'px'
    }

  })

}
doScroll