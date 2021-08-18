//переход по ссылкам на странице
$(document).on("click", "nav a", function(e) {
    e.preventDefault();
    var id  = $(this).attr('href');
    var top = $(id).offset().top; // получаем координаты блока
    $('body, html').animate({scrollTop: top}, 800); // плавно переходим к блоку
});
//удаление и добавление классов с интервалом
setInterval (function(){
	var element = document.getElementById("scale-btn");
	element.classList.remove("btn-phone");	
	element.classList.toggle("scale");
	element.classList.toggle("btn-phone");
},500);