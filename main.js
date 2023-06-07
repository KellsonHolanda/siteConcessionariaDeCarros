$(document).ready(function () {
    $('#carousel').slick();
})
$('.menu-hamburguer').click(function () {
    $('nav').slideToggle();
})
$('#telefone').mask('(00) 0000-0000', { placeholder: '(xx) xxxx-xxxx' })
$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        veiculoInteresse: {
            required: false
        },
        mensagem: {
            required: true
        }
    },
    messages: {
        nome: "Por favor, insira seu nome."
    },
    submitHandler: function (form) {
        console.log(form)
    },
    invalidHandler: function (evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos sem preenchimento.`)
        }
    }
})
$('.listaDeVeiculos button').click(function(){
    const destino = $('#contato');
    
    const nomeVeiculo = $(this).parent().find('h3').text();
    $('#veiculoInteresse').val(nomeVeiculo);
    
    $('html').animate({
        scrollTop: destino.offset().top
    }, 1000)
})
$('.listaDeVeiculos button')
