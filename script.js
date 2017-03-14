$(document).ready(function(){
  var para = $("<p>Look at me!</p>");
  $("#one").after(para);
  $("#two").append(para);
  para.remove();
});
