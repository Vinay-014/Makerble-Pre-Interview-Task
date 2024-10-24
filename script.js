document.getElementById('post-story-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const storyInput = document.getElementById('story').value.trim();
  const errorMessage = document.getElementById('error-message');

  if (storyInput.length < 3) {
      errorMessage.textContent = 'Story must be at least 3 characters long.';
  } else {
      errorMessage.textContent = ''; // Clear error
      alert('Story submitted successfully!');
      document.getElementById('post-story-form').reset(); // Clear form
  }
});

// Expand button functionality
const expandButtons = document.querySelectorAll('.expand-btn');

expandButtons.forEach(button => {
  button.addEventListener('click', () => {
      const additionalContent = button.nextElementSibling;
      if (additionalContent.style.display === 'none') {
          additionalContent.style.display = 'block';
          button.textContent = 'Collapse'; // Change button text to Collapse
      } else {
          additionalContent.style.display = 'none';
          button.textContent = 'Expand'; // Change button text back to Expand
      }
  });
});
