// Client-side validation for story submission
document.addEventListener('DOMContentLoaded', function() {
    const submitStoryBtn = document.getElementById('submit-story');
    const storyInput = document.getElementById('story');
    const errorMsg = document.getElementById('error-msg');
  
    // Add event listener for the submit button
    submitStoryBtn.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent form submission by default
  
      const storyValue = storyInput.value.trim(); // Get the story input value and trim whitespaces
  
      // Validation: Check if the story is at least 3 characters long
      if (storyValue.length < 3) {
        errorMsg.textContent = 'Error: Story must be at least 3 characters long!';
      } else {
        errorMsg.textContent = ''; // Clear the error message if validation passes
        alert('Story submitted successfully!');
        // Optionally: Submit the form if everything is valid (you can add form submission logic here)
      }
    });
  });
  