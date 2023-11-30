// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);


function changeVariant(variantName) {
  const modelViewer = document.getElementById('myModelViewer');
  
  if (variantName === 'original') {
    // Switch back to the original variant
    const originalSrc = modelViewer.getAttribute('data-original-src');
    modelViewer.setAttribute('src', originalSrc);
  } else {
    // Set the appropriate src for the selected variant
    modelViewer.setAttribute('src', `assets/${variantName}.glb`);
  }
}

// Save the original src when the page loads
document.addEventListener('DOMContentLoaded', function() {
  const modelViewer = document.getElementById('myModelViewer');
  modelViewer.setAttribute('data-original-src', modelViewer.getAttribute('src'));
});


