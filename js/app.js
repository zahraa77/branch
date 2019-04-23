

$(document).ready(function(){
$('.carousel').carousel({
  interval: 2000
})

});


$(document).ready(function(){

$(".gear-check").click(function()
{
  $(".color-option").toggle();

});

     var colorLi = $(".color-option ul li");
 colorLi
.eq(0).css("backgroundColor","#E41817").end()
.eq(1).css("backgroundColor","#39e417").end()
.eq(2).css("backgroundColor","#e417cd");

colorLi.click(function()
{
$("link[href*='theme']").attr("href".$(this).attr("data-value"));
});

});
