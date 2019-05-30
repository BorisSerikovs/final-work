
  function addTask() {
    var inputField1 = $('#task-name1');
    var inputField = $('#task-name');
    var liElement ='<li>';
    var date = new Date ();
    liElement +='<p>' + inputField1.val() +'</p>' +'<h8>' + date + '</h8>';
  
    liElement +='<p>'+ inputField.val() +'</p>';
    liElement += '</li>';
    $('#task-list').append(liElement);
    inputField1.val('');
    inputField.val('');
    inputField.focus();
    inputField1.focus();
  }
  
  $('#add-task').click(addTask);
  
  $('task-name').keypress(function (event) {
    if (event.which == 13) {
      addTask();
    }
  
  });
