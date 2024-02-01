// wyszukiwarka

// Get the form and input elements
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

// Add event listener for form submission
searchForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the search query
  const query = searchInput.value.toLowerCase();

  // Get all the elements to search through
  const elements = document.querySelectorAll('h2:not(.movie-title), [class^="movie-box"]');

  // Loop through each element
  elements.forEach(element => {
    // Get the text content of the element
    const text = element.textContent.toLowerCase();

    // Check if the text contains the search query
    if (text.includes(query)) {
      // Show the element if it matches the search query
      element.style.display = 'block';

      // Scroll to the matched element
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Add the highlight class to the title
      element.classList.add('highlight');

      // Remove the highlight class after half a second
      setTimeout(() => {
        element.classList.remove('highlight');
      }, 500);
    } else {
      // Hide the element if it doesn't match the search query
      element.style.display = 'none';
      
      // Remove highlight from the title
      element.classList.remove('highlight');
    }
  });

  // Clear the input field
  searchInput.value = '';
});


let isToggleDelayed = false;

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const closeSidebarButton = document.getElementById('close-sidebar-button');

  // Check if the sidebar is currently hidden or shown
  const isSidebarHidden = sidebar.style.left === '-250px';

  // Calculate the new left position based on the sidebar visibility
  const newLeftPosition = isSidebarHidden ? '0' : '-250px';

  // Animate the transition of the sidebar and toggle button
  sidebar.style.left = newLeftPosition;
  sidebarToggle.style.left = isSidebarHidden ? '250px' : '20px';

  // Show/hide the close sidebar button
  closeSidebarButton.style.display = isSidebarHidden ? 'block' : 'none';

  // Show the open button immediately if the sidebar is hidden
  if (isSidebarHidden) {
    sidebarToggle.style.display = 'none';
  } else {
    // Delay the appearance of the open button by 0.3 seconds if the close button is clicked
    setTimeout(function() {
      sidebarToggle.style.display = 'block';
    }, 300);
  }

  // Set the toggle delay flag based on the sidebar visibility
  isToggleDelayed = !isSidebarHidden;
}

const req = document.getElementById("req");
const con = document.getElementById("con");

con.style.display = "none";

req.addEventListener("click", event => {

    if(con.style.display === "none"){
        con.style.display = "block";
        req.textContent = "Hide";
    }
    else{
        con.style.display = "none";
        req.textContent = "REQUEST/CONTACT";
    }
});

