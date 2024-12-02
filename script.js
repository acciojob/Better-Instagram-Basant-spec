document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.image');
  let draggedElement = null;

  // Attach dragstart, dragover, drop, and dragend event listeners
  images.forEach(image => {
    image.addEventListener('dragstart', handleDragStart);
    image.addEventListener('dragover', handleDragOver);
    image.addEventListener('drop', handleDrop);
    image.addEventListener('dragend', handleDragEnd);
  });

  function handleDragStart(e) {
    draggedElement = this; // Reference to the element being dragged
    setTimeout(() => this.classList.add('dragging'), 0); // Add class for visibility
  }

  function handleDragOver(e) {
    e.preventDefault(); // Necessary for drop to work
  }

  function handleDrop(e) {
    e.preventDefault();

    if (this !== draggedElement) {
      // Swap the innerHTML (content) of the dragged and target elements
      const draggedContent = draggedElement.innerHTML;
      const draggedBackground = draggedElement.style.backgroundImage;

      draggedElement.innerHTML = this.innerHTML;
      draggedElement.style.backgroundImage = this.style.backgroundImage;

      this.innerHTML = draggedContent;
      this.style.backgroundImage = draggedBackground;
    }
  }

  function handleDragEnd() {
    this.classList.remove('dragging'); // Remove the class
    draggedElement = null; // Reset dragged element
  }
});
