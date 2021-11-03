function newItem() {
  //adding a new item to the list
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === ''){
    alert('You must write something')
  } else {
    $('#list').append(li)
  }

  //Crossing out an item from the list
  function crossOut(){
    li.addClass.toggle('strike');
  }

  li.on('dblclick', function crossOut(){
    li.toggleClass('strike');
  });

  //Adding the delete button "X":
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on("click", deleteListItem);
  //Deleting an item from the list
  function deleteListItem(){
    li.addClass("delete")
  }

  //Reordering the items:
  $('#list').sortable();
}
