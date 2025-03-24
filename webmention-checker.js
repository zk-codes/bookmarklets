// Webmention Checker Bookmarklet
// Minified version (for bookmarking):
// javascript:(function(){function findWebmentionsEndpoint(){const e=document.querySelectorAll('link[rel="webmention"]');if(e.length>0)return e[0].getAttribute('href');const t=document.querySelectorAll('a[rel="webmention"]');if(t.length>0)return t[0].getAttribute('href');const n=document.querySelector('meta[http-equiv="Link"]');if(n){const o=n.getAttribute('content'),r=o.match(/<([^>]+)>;\s*rel=(?:%22|%27)webmention(?:%22|%27)/);if(r)return r[1]}return null}alert(findWebmentionsEndpoint()||'No webmentions endpoint found');})();

/**
 * Webmention Checker - Expanded Version
 * 
 * This bookmarklet checks if the current website supports Webmentions
 * (a W3C recommendation for mentions across websites).
 * It will display the endpoint URL if found.
 */
(function() {
    /**
     * Searches the page for a Webmention endpoint.
     * Returns the endpoint URL or null if none is found.
     */
    function findWebmentionsEndpoint() {
        // Method 1: Check for link elements with rel="webmention"
        const linkTags = document.querySelectorAll('link[rel="webmention"]');
        if (linkTags.length > 0) {
            return linkTags[0].getAttribute('href');
        }
        
        // Method 2: Check for anchor elements with rel="webmention"
        const headerLinks = document.querySelectorAll('a[rel="webmention"]');
        if (headerLinks.length > 0) {
            return headerLinks[0].getAttribute('href');
        }
        
        // Method 3: Check for HTTP headers indicated by meta tags
        const headers = document.querySelector('meta[http-equiv="Link"]');
        if (headers) {
            const content = headers.getAttribute('content');
            const match = content.match(/<([^>]+)>;\s*rel=(?:%22|%27)webmention(?:%22|%27)/);
            if (match) {
                return match[1];
            }
        }
        
        // No endpoint found
        return null;
    }
    
    // Find the endpoint and display it, or show a "not found" message
    const result = findWebmentionsEndpoint();
    alert(result || 'No webmentions endpoint found');
})();
