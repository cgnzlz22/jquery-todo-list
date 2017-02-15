$(document).ready(function(){

$("#sort-list").sortable();

	$("#submit").click(function(){
		var todoItem = $("#To-Do").val();
		$("#sort-list").append("<li class='lineitems'>" + todoItem + " " + "<span class='done'>&#10004</span>" + " " + "<br>");
		removeTextInput();
		removeItemList();
	})

//remove the task when checkmark is clicked on, signaling done with item, sound reinforces action
function removeItemList() {
	$(".done").click(function(){
		$(this).parent().remove();
		var checkmarkSound = document.getElementById("checkmark");
		checkmarkSound.play()
	})

};

//once an entry is typed in, make it clear from the input box
function removeTextInput(){
	$("#To-Do").val("").focus() 
}

// this is supposed to make it sortable but is not doing anything.CONSOLE says sortable not a function
    

});


