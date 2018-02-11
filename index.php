<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <base href="/fv2/" />
    <title>Forum Index</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
</head>
<body onload="browsePg('about')">
    <div class="toolbar">
        <div class="h">~</div>
    </div>
    <div class="main-content">
        <div class="nav">
            <a onclick="browsePg('/fv2/about')">about</a>&nbsp;
            <a onclick="window.history.pushState('Routes &mdash; a string', 'Route!', 'abougt');">change url</a>
            <a onclick="browsePg('/fv2/')">b</a>
            <a href="#abe">d</a>
            <a href="#afe">e</a>
        </div>
        <div class="target"></div>
    </div>
    <script>
        // 
        const change = (page) => {}
    </script>
    <script src="router.js"></script>
    <script>
        // Define the 'target'
        let target = document.querySelector(".target");
        browsePg = (page) => {
            // Change the page's title
            window.history.pushState("Route", "Route", page);
            // Initialize the 'Router'
            router = new Router;
            router.setPg(page, document.querySelector(".target"));
        }
    </script>
</body>
</html>