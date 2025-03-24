// Internet Archiver Bookmarklet
// Minified version (for bookmarking):
// javascript:(function(){var url=encodeURIComponent(window.location.href);window.open('https://web.archive.org/save/'+url,'_blank');})();

/**
 * Internet Archiver - Expanded Version
 * 
 * This bookmarklet submits the current webpage to the Internet Archive's
 * Wayback Machine for preservation. It opens a new tab that initiates
 * the archiving process.
 */
(function() {
  // Get the current URL and encode it for use in a query parameter
  var url = encodeURIComponent(window.location.href);
  
  // Open the Wayback Machine's save page with the current URL
  // This will trigger the archiving process in a new tab
  window.open('https://web.archive.org/save/' + url, '_blank');
})();
