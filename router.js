/**
 * A vanilla JS router for the Forums
 */

// Create the 'Router' class
class Router {
    // Create the 'setPg' function, which'll set (and change) the page
    setPg(page, target) {
        // Set the 'page' variable as 'global' for this class
        this.page = page;
        // Set the 'target' variable as 'global' for this class
        this.target = target;
        // Get the 'base' URL defined
        this.meta = document.querySelector("base").getAttribute("href");
        // Set the current 'route' variable as 'global' for this class
        this.croute = window.location.href.substr(window.origin.length);
        this.croute = this.croute.substr(this.meta.length);
        // Set the 'routes' array as 'global' for this class
        this.routes = Array(
            '',
            '/',
            'about',
            '/fsv2/a'
        );
        // Set the 'routeURLs' array as 'global' for this class
        this.routeURLs = {
            '': "index.php",
            'about': "about.php",
        };
        // Set the 'routeTitles' array as 'global' for this class
        this.routeTitles = Array(
            'Stylesheet',
            '404: Not Found',
            '/fv2/',
            '/fsv2/a'
        );
        // Call the 'changePg' function
        this.changePg();
    }

    // Create the 'changePg' function, which'll load (change) the page
    // Unfortunately, we can't use the ES6 syntax-based function declaration, so back to normal!
    changePg() {
        // Check if the 'current route' is in the 'routes' array
        if(this.routes.includes(this.croute)) {
            // Display a success message in the console
            console.log("Navigated to '/" + this.croute + "'.");
            // Set the page's content
            this.setPgContent();
        } else {
            // Display an error message in the console
            console.error("Error: Cannot find '" + this.croute + "'.");
            // Set the page's content
            this.setPgContent();
        }
    }

    async setPgContent() {
        // Show the 'splash-screen' until the load time
        target.innerHTML = "<div class=\"spscr\"><div class=\"spldr\"></div></div>";
        // Set the page's content
        try {
            // Check if "this.routeURLs[this.croute]" is "undefined"
            if(this.routeURLs[this.croute] == undefined) {
                // Load the "404: Not Found" error page, and log an error
                this.response = await fetch("docs/404.html");
                console.error("Error: '" + this.croute + "' is not in the 'routeURLs' array.");
            } else {
                // Load the requested page
                this.response = await fetch("pages/" + this.routeURLs[this.croute]);
            }
        } catch(error) {
            console.warn(error);
        }
        // And check if we received a positive response
        if(this.response.status == 200) {
            // Set the content
            // Get the response
            this.response = this.response.text();
            // Resolve the Promise
            this.resolvedProm = Promise.resolve(this.response);
            // Write the value of the Promise
            this.resolvedProm.then(function(value) {
                target.innerHTML = value;
            });
            /* this.target.innerHTML = this.response; */
        } else {
            // Over-write the 'response' variable to a '404: Not found' error file
            try {
                await fetch("docs/404.html").then(response => this.response = response);
            } catch(error) {
                console.warn(error);
            }
            // Set the content
            // Get the response
            this.response = this.response.text();
            // Resolve the Promise
            this.resolvedProm = Promise.resolve(this.response);
            // Write the value of the Promise
            this.resolvedProm.then(function(value) {
                target.innerHTML = value;
            });
        }
    }
}