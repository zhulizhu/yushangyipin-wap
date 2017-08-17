
  $(function(){
$("#titl li").each(function(){

   var index=$(this).index();

$(this).click(function(){

 $(this).addClass("active1").siblings().removeClass("active1");

 $(".content .col-68").eq(index).stop(true).show().siblings().stop(true).hide();

      })

    });
$("#tit li").each(function(){

   var index=$(this).index();

$(this).click(function(){

 $(this).addClass("active2").siblings().removeClass("active2");

 $(".content .col-68").eq(index).stop(true).show().siblings().stop(true).hide();

      })

    });
// $("#inpu").click(){
// 	alert("请输入内容！")
// }

// $(".con img").each(function(){

//    var index=$(this).index();

// $(this).click(function(){

//  $(this).addClass("add").siblings().removeClass("add");

//  // $(".content .col-68").eq(index).stop(true).show().siblings().stop(true).hide();

//       })

//     })

 }
 )