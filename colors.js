var Link = {
  setColor : function(color){
    // var alist=document.querySelectorAll('a')
    // var i = 0
    // while(i < alist.length){
    //   alist[i].style.color = color
    //   i = i + 1
    // }

    // 이 웹페이지의 모든 a태그를 jQuery로 제어하겠다
    // jQuery는 새 언어가 아니고 JavaScript를 이용해서 우리 대신 CSS라는 함수를
    // 만들어 둔 것임.
    $('a').css('color',color)
  }
}
var Body = {
  setColor : function(color){
  //   document.querySelector('body').style.color = color
  $('body').css('color',color)
  },
  setBackgroundColor : function(color){
    // document.querySelector('body').style.backgroundColor= color
    $('body').css('backgroundColor',color)
  }
}
function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value === 'Night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'Day';
    Link.setColor('powderblue');
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'Night';
    Link.setColor('blue');
  }
}
