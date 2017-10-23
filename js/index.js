$(function(){
  
  function qqq() {
    var a = $(".val").val();
    if(($.isNumeric(a) == true) && (a>=1) && (a<=100))
      {
        $("div.block").remove();
        $("p").text("А теперь наведите курсор на серый квадрат!");
        for(var i = 1;i<=a*a; i++)
          {
            var div = $("<div></div>").addClass("block");
            $(".pole").append(div);
              
           $(".block").on("mouseenter",function(){
             $(this).css("background","rgb("+ Math.floor(Math.random() * 255) +","+ Math.floor(Math.random() * 255) +","+ Math.floor(Math.random() * 255) +")");
            });
          }
        
        $(".block").css("width",700/a);
        $(".block").css("height",700/a);
      }
  }
  
  $(".but").on("click",function(){
    qqq();
  });
  
  $("#text").keydown(function(event) { //делаем обработку нажатия клавиши при работе со строкой ввода
    if(event.which == "13") //сравниваем код нажатой клавиши с кодом клавишы ЕНТЕР
    {
    qqq();
    }
  });
  
});