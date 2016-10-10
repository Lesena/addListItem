function addListItem() {
    var text = $('#new-text').val();
    $("#todolist").append('<li><input type="checkbox" class="done" />' + text + ' <button class="delete">Delete</button></li>');
    $("#new-text").val('');
};

function deleteItem() {
 $(this).parent().remove();
}

function finishItem() {
    if ( $(this).parent().css('textDecoration') == 'line-through' ) {
        $(this).parent().css('textDecoration', 'none')
    }   else    {

        $(this).parent().css('textDecoration', 'line-through');
    }
}

function editItem (e) {
    var $input = $(e.target).closest('li').addClass('editing').find('.edit');
    $input.val($input.val()).focus(); }

    $(function() {
    $('#new-text').keyup(function(e){
        if (e.keyCode === 13) {
            addListItem();
        }
    });
    $(document).on('click', '.delete', deleteItem);
    $(document).on('click', '.done', finishItem);
    $(document).on('dblclick', '.delete', editItem);
    $("#select_all").click(function () {
        $('input:checkbox').not(this).prop('checked', this.checked);
        if ( $('li').css('textDecoration') == 'line-through' ) {
            $('li').css('textDecoration', 'none')
        }   else    {

            $('li').css('textDecoration', 'line-through');
        }
    });

});