$(document).ready(function(){
    let counter = 0;

$('form').on('submit', function(e){
        e.preventDefault();
        counter++;
        const task = $('#new-task').val();
        const novoItem = $('<li></li>');
        $(`<button type="button" id="task-done-${counter}">${task}</button>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(750);
        $('#new-task').val('');
        
        $( "button" ).click(function(event) {// `this` se refere ao botão clicado
            var buttonId = $(this).attr('id'); // Obtém o ID do botão
            $(`#${buttonId}`).css( "text-decoration", "line-through" );
        });
})
})