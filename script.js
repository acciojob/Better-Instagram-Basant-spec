document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.image');
  let draggedElement = null;

  images.forEach(image => {
    // Handle drag start
    image.addEventListener('dragstart', (e) => {
      draggedElement = image;
      e.dataTransfer.setData('text/plain', null); // Required for some testing frameworks
      setTimeout(() => image.classList.add('dragging'), 0); // Add a visual effect
    });

    // Handle drag over
    image.addEventListener('dragover', (e) => {
      e.preventDefault(); // Allows dropping
    });

    // Handle drop
    image.addEventListener('drop', (e) => {
      e.preventDefault();
      if (image !== draggedElement) {
        // Swap elements
        const draggedHTML = draggedElement.innerHTML;
        const draggedBG = draggedElement.style.backgroundImage;

        draggedElement.innerHTML = image.innerHTML;
        draggedElement.style.backgroundImage = image.style.backgroundImage;

        image.innerHTML = draggedHTML;
        image.style.backgroundImage = draggedBG;
      }
    });

    // Handle drag end
    image.addEventListener('dragend', () => {
      draggedElement.classList.remove('dragging');
      draggedElement = null; // Reset dragged element
    });
  });
});
