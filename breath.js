// breath.js
// A bullgit project
// 2014 @LukyVj

$(function(){
  var ctx = $('body');
 ctx.prepend('<style>h1,h2,h3,h4,h5,h6,p,a,strong,small,img{-webkit-transition:all .3s ease;-moz-transition:all .3s ease;transition:all .3s ease;-webkit-animation:breathe 3s ease infinite;-moz-animation:breathe 3s ease infinite;animation:breathe 3s ease infinite}p:hover,a:hover,strong:hover,small:hover,img:hover{-webkit-transform:scale(1.2);-moz-transform:scale(1.2);-ms-transform:scale(1.2);-o-transform:scale(1.2);transform:scale(1.2);letter-spacing:3px}@-webkit-keyframes breathe{66%{-webkit-transform:scale(1.1);letter-spacing:3px}}@-moz-keyframes breathe{66%{-moz-transform:scale(1.1);letter-spacing:3px}}@-o-keyframes breathe{66%{-o-transform:scale(1.1);letter-spacing:3px}}@keyframes breathe{66%{transform:scale(1.1);letter-spacing:3px}}</style>');
});
