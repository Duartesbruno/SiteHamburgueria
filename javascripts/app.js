// Scroll Suave, pequena contribuição minha para deixar seu site mais top =)
// Adicione essa classe "scrollSuave" onde voce queira fazer uma transição (em vez de pular direto)
var $doc = $('html, body');
$('.scrollSuave').click(function() { // quando clicar em um elemento com essa classe
	// fazer uma animação
	$doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500); // Animação de meio segundo
    return false;
});

var alternador = document.querySelector('.js-botao-chaveador');

alternador.onclick = function(){
	var menu = document.querySelector('.js-menu');
	menu.classList.toggle('menu--exibindo');	
}

