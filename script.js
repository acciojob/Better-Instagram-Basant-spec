document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.image'); // Select all draggable elements
  let draggedElement = null; // To keep track of the currently dragged element

  // Add drag event listeners to each image
  images.forEach((image) => {
    image.addEventListener('dragstart', (event) => {
      draggedElement = event.target; // Store the dragged element
      event.target.classList.add('selected'); // Highlight the element being dragged
    });

    image.addEventListener('dragend', (event) => {
      event.target.classList.remove('selected'); // Remove highlight after dragging
      draggedElement = null; // Reset dragged element
    });

    image.addEventListener('dragover', (event) => {
      event.preventDefault(); // Allow dropping
    });

    image.addEventListener('drop', (event) => {
      event.preventDefault();
      const targetElement = event.target; // Get the drop target

      // Ensure the drop target is a valid image and not the same as the dragged element
      if (draggedElement && draggedElement !== targetElement) {
        // Swap the content of dragged and target elements
        const draggedContent = draggedElement.innerHTML;
        const draggedStyle = draggedElement.style.backgroundImage;

        draggedElement.innerHTML = targetElement.innerHTML;
        draggedElement.style.backgroundImage = targetElement.style.backgroundImage;

        targetElement.innerHTML = draggedContent;
        targetElement.style.backgroundImage = draggedStyle;
      }
    });
  });
});
