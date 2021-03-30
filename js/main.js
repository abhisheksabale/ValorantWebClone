$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();

    $('.specific-tip').tooltip({
        html: true,
        placement: 'right',
        trigger: 'hover'
    });

    $('[data-toggle="popover"]').popover({
        placement: 'left',
        content: 'Follow if you like the agent',
        trigger: 'hover'
    });

    
});