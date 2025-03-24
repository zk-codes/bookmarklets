// RSS Feed Finder Bookmarklet
// Minified version (for bookmarking):
// javascript:(function(){var feeds=[];var links=document.getElementsByTagName('link');for(var i=0;i<links.length;i++){var link=links[i];var type=link.getAttribute('type');var rel=link.getAttribute('rel');var href=link.getAttribute('href');if(href&&(type==='application/rss+xml'||type==='application/atom+xml'||(rel==='alternate'&&(type==='application/rss+xml'||type==='application/atom+xml')))){if(href.indexOf('http')!==0){if(href.startsWith('/')){href=window.location.origin+href;}else{href=window.location.href.substring(0,window.location.href.lastIndexOf('/')+1)+href;}}feeds.push(href);}}if(feeds.length>0){window.open(feeds[0],'_blank');}else{alert('No RSS feeds found on this page.');}})();

/**
 * RSS Feed Finder - Expanded Version
 * 
 * This bookmarklet detects and opens any RSS or Atom feeds available on the current webpage.
 * It searches for appropriate link elements and opens the first feed found in a new tab.
 */
(function(){
    // Array to store discovered feed URLs
    var feeds = [];
    
    // Get all link elements on the page
    var links = document.getElementsByTagName('link');
    
    // Loop through link elements to find feeds
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        var type = link.getAttribute('type');
        var rel = link.getAttribute('rel');
        var href = link.getAttribute('href');
        
        // Check if the link is an RSS or Atom feed
        if (href && (
            type === 'application/rss+xml' || 
            type === 'application/atom+xml' || 
            (rel === 'alternate' && (
                type === 'application/rss+xml' || 
                type === 'application/atom+xml'
            ))
        )) {
            // Handle relative URLs
            if (href.indexOf('http') !== 0) {
                if (href.startsWith('/')) {
                    // Root-relative URL
                    href = window.location.origin + href;
                } else {
                    // Document-relative URL
                    href = window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1) + href;
                }
            }
            
            // Add feed URL to the array
            feeds.push(href);
        }
    }
    
    // Take action based on what was found
    if (feeds.length > 0) {
        // Open the first feed in a new tab
        window.open(feeds[0], '_blank');
    } else {
        // Alert if no feeds were found
        alert('No RSS feeds found on this page.');
    }
})();
