// $(document).ready(function () {
//     $("h1").css("color", "red");
// });

/* 
   This code uses jQuery to select and manipulate elements in the HTML document.
   The $(document).ready() function is often used to ensure that the JavaScript code
   inside it runs when the HTML document has fully loaded.

   However, for the purpose of this example, I am commenting it out.
   When active, it would change the text color of "h1" elements to red when the
   document is ready.
*/

// $("h1").css("color", "red"); // if there is one value it will select and if there is two then it will update

// This code uses jQuery to select and manipulate elements in the HTML document.

// Select all "button" elements
$("button");

// Select "h1" elements and change their CSS color property to red
$("h1").css("color", "red");

// Add classes "big-title" and "margine-50" to "h1" elements
$("h1").addClass("big-title margine-50");

// Check if "h1" elements have the class "margine-50"
$("h1").hasClass("margine-50");

// Set the text content of "h1" elements to "Bye"
$("h1").text("Bye");

// Change the HTML content of "button" elements to "<em>Hey</em>"
$("button").html("<em>Hey</em>");

// Get the "src" attribute of "img" elements
$("img").attr("src");

// Set the "href" attribute of "a" elements to "https://www.yahoo.com"
$("a").attr("href", "https://www.yahoo.com");

// Add a click event listener to "h1" elements
$("h1").click(function() {
    // Change the CSS color property to purple on click
    $("h1").css("color", "purple");
});

// Add a click event listener to "button" elements
$("button").click(function() {
    // Change the CSS color property to red on click
    $("h1").css("color", "red");
});

// Add a keydown event listener to the entire document
$(document).keydown(function(event) {
    // Set the text content of "h1" elements to the key pressed
    $("h1").text(event.key);
});

// Best practice for adding event listeners using "on"
$("h1").on("click", function() {
    // Change the CSS color property to purple on click
    $("h1").css("color", "purple");
});

// Add HTML content before and after "h1" elements
$("h1").before("<button> New </button>");
$("h1").after("<button> New </button>");

// Add HTML content before and after "h1" elements in the same line
$("h1").prepend("<button> prepend </button>");
$("h1").append("<button> append </button>");

// Add a click event listener to elements with class "animation"
$(".animation").on("click", function() {
    // Animate the opacity of "h1" elements
    $("h1").animate({ opacity: 0.5 });
});

// Chaining animations on "h1" elements
$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});

