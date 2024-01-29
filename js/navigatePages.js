function navigateToAbout() {
    // Change the window location to the desired page
    // Create a URL object using the current page's URL
    var currentUrl = new URL(window.location.href);
    console.log (currentUrl)
    // Adjust the path based on your project structure
    var newPath = 'other_pages/about.html';

    // Set the new path relative to the root
    currentUrl.pathname = newPath;

    // Navigate to the new URL
    window.location.href = currentUrl.href;

    //window.location.href = "../other_pages/about.html"; // Replace with your actual page URL
}

function navigateToIndex() {
    // Change the window location to the desired page
    // Change the window location to the desired page
    // Create a URL object using the current page's URL
    var currentUrl = new URL(window.location.href);
    console.log(currentUrl)

    // Adjust the path based on your project structure
    var newPath = 'index.html';

    // Set the new path relative to the root
    currentUrl.pathname = newPath;

    // Navigate to the new URL
    window.location.href = currentUrl.href;
}