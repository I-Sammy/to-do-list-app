function newItem(){

  let li = $('<li></li>');
  let inputValue = $('#input').val)();
  //adding an item to the list
  li.append(inputValue);

  if (inputValue === '') {
     alert("You must write something!");
   } else {
     $('#list').append(li);
   }
   //crossing an item from the List
  function crossOut() {
		li.toggleClass("strike");
	}
  li.on("dblclick", crossOut());
  li.on("click", function() {
    li.addClass("strike");
  });

   //adding delete button
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);
  function deletelistitem(){
 		li.addclass("delete")
 	}
  crossOutButton.on("click", deleteListItem);

  $('#list').sortable();

}
