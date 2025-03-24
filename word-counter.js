// Word Counter Bookmarklet
// Minified version (for bookmarking):
// javascript:(function(){const main=document.querySelector('main');if(!main){alert('No main tag found on this page!');return;}const text=main.textContent.trim();const words=text.split(/\s+/).filter(word=>word.length>0);const wordCount=words.length;const avgReadingSpeed=200;const readingTimeMinutes=wordCount/avgReadingSpeed;const mins=Math.floor(readingTimeMinutes);const secs=Math.floor((readingTimeMinutes-mins)*60);const readingTime=`${mins}:${secs.toString().padStart(2,'0')}`;alert(`The main tag contains ${wordCount} words.\nEstimated reading time: ${readingTime} mins`);})();

/**
 * Word Counter - Expanded Version
 * 
 * This bookmarklet counts the number of words in the main content area
 * of a webpage and provides an estimated reading time based on an
 * average reading speed of 200 words per minute.
 */
(function() {
  // Find the main content area of the page
  const main = document.querySelector('main');
  
  // Check if the main tag exists
  if (!main) {
    alert('No main tag found on this page!');
    return;
  }
  
  // Extract text content and trim whitespace
  const text = main.textContent.trim();
  
  // Split text into words and filter out empty strings
  const words = text.split(/\s+/).filter(word => word.length > 0);
  
  // Count the number of words
  const wordCount = words.length;
  
  // Define average reading speed (words per minute)
  const avgReadingSpeed = 200;
  
  // Calculate reading time in minutes
  const readingTimeMinutes = wordCount / avgReadingSpeed;
  
  // Convert to minutes and seconds
  const mins = Math.floor(readingTimeMinutes);
  const secs = Math.floor((readingTimeMinutes - mins) * 60);
  
  // Format reading time as mm:ss
  const readingTime = `${mins}:${secs.toString().padStart(2, '0')}`;
  
  // Display the result
  alert(`The main tag contains ${wordCount} words.
Estimated reading time: ${readingTime} mins`);
})();
