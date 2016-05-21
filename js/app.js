//add functions to all the button(add,edit,delete)
//when item checked remove from one list and add to the other list




var addItem = function(){
	var $list = $('<li></li>');
	var item = $('#new-task').val();
	$checkbox = $('<input>').attr('type','checkbox');
	$list.append($checkbox);


	$label = $('<label></label>').text(item);
	$list.append($label);

	$editmodeInput = $('<input>').attr('type','text').val(item);
	$list.append($editmodeInput);

	$editButton = $('<button></button>').text('Edit').addClass('edit');
	$list.append($editButton);

	$deleteButton = $('<button></button>').text('Delete').addClass('delete');
	$list.append($deleteButton);
	
	$("#incomplete-tasks").append($list);

	$('p input').val('');
}

var deleteItem = function(){
	$(this).parent().remove();
}

var editItem = function(){
	var $label = $(this).prev().prev();
	var $input = $(this).prev();
	$(this).parent().toggleClass('editMode');
	if($(this).parent().hasClass('editMode')){
		$(this).html('Save');
		$label.text($input.val());
		console.log('save' + $input.val())
 	}else{
 		$(this).html('Edit');
 		$label.text($input.val());
 		console.log('edit' + $input.val());
 	}
}


var checkItem = function(){
	if($(this).prop('checked')){
		$(this).parent().appendTo('#completed-tasks');
	}else{
		$(this).parent().appendTo('#incomplete-tasks');
	}
}

$('p >button').on('click',addItem);

$('ul').on('click','.delete', deleteItem);

$('ul').on('click','.edit', editItem);

$('ul').on('change','input[type = "checkbox"]',checkItem);

