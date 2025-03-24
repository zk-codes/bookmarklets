// Color Inverter Bookmarklet
// Minified version (for bookmarking):
// javascript:(function(){const style=document.createElement('style');style.id='invert-colors-style';if(document.getElementById('invert-colors-style')){document.getElementById('invert-colors-style').remove()}else{style.textContent='html{filter:invert(100%)hue-rotate(180deg)}img,video,canvas{filter:invert(100%)hue-rotate(180deg)}';document.head.appendChild(style)}})();

/**
 * Color Inverter - Expanded Version
 * 
 * This bookmarklet toggles a dark/light mode by inverting the colors on a webpage.
 * It inverts everything, then re-inverts media elements so they appear normal.
 */
(function() {
  // Create a new style element
  const style = document.createElement('style');
  
  // Give it an ID for easy reference
  style.id = 'invert-colors-style';
  
  // Check if the style element already exists
  if (document.getElementById('invert-colors-style')) {
    // If it exists, remove it (toggle off)
    document.getElementById('invert-colors-style').remove();
  } else {
    // If it doesn't exist, create rules for inverting colors
    style.textContent = `
      html {
        filter: invert(100%) hue-rotate(180deg);
      }
      /* Apply inverse filter to media elements to revert them to normal colors */
      img, video, canvas {
        filter: invert(100%) hue-rotate(180deg);
      }
    `;
    
    // Add style element to the page
    document.head.appendChild(style);
  }
})();
