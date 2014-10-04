// Execute this script when the document is loaded.
$(document).ready(function() {
	// Within this object (document), when the user clicks on the button object, run the following function.
	$(document).on('click', 'button', function(e) {
		// Prevent default functionality of button to send data to browser and refresh.
		e.preventDefault();

		// Store the value of textarea and selected radio button in two variables.
		var task = $('#task').val();
		// You can also target the input's name, since a group of radio buttons uses the same name.
		var urgency = $('input[type=radio]:checked').val();

		// Add a new task to the task list.
		$('ol').append('<li class="' + urgency + '">' + task + '<span class="remove-task">&times;</span></li>' );

		// Debug within the Developer Console. Verfies var values.
		// console.log(task);
		// console.log(urgency);
	});

	// Within this object (document), when the user clicks on the remove object, run the following function.
	$(document).on('click', '.remove-task', function () {
		// When the user clicks on the remove object, fadeOut slowlhy and run the following function.
		$(this).parent('li').fadeOut('slow', function() {
			// When this object (li) fades out, remove it from the DOM so it doesn't take up space.
			$(this).parent('li').remove();
		});
	});
});
