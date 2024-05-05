// javascript for dropdown menu for the client notification
function toggleDropdown(event) {
  const clickedElement = event.target;
  const parentElement = clickedElement.closest('.union'); // Find the closest parent with class "union"

  if (parentElement) { // Clicked within the .union element (p or span)
    const dropdown = document.getElementById('user-content'); // Assuming the dropdown ID remains the same
    dropdown.classList.toggle('show');
  } else { // Clicked outside the .union element (close dropdown)
    const openDropdown = document.querySelector('.userdropdown-content.show');
    if (openDropdown && !openDropdown.contains(clickedElement)) {
      openDropdown.classList.remove('show');
    }
  }
}

// Event listener for clicks anywhere on the page
window.onclick = toggleDropdown;


  
 
  
  
  

// javascript for dropdown menu for alert notification
function toggleNotifications() {
    var notifications = document.getElementById("alert-content");
    notifications.style.display = (notifications.style.display === "block") ? "none" : "block";
}

document.addEventListener("click", function(event) {
    var notifications = document.getElementById("alert-content");
    var icon = document.querySelector(".notification-icon");

    // Check if the clicked element is inside the notification dropdown
    var isClickInsideDropdown = notifications.contains(event.target);

    // If the clicked element is not the icon and not inside the dropdown, close the dropdown
    if (!event.target.matches('.notification-icon') && !isClickInsideDropdown) {
        notifications.style.display = 'none';
    }
});

function removeTrialContainer() {
    var trialContainer = document.getElementById("trialContainer");
    trialContainer.parentNode.removeChild(trialContainer);
  }


  //javascript function to fill the progress bar when the checkbox is clicked
  document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('.task-checkbox');
    const progressBar = document.querySelector('.progress');
    const completedText = document.querySelector('.completed');

    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', updateProgress);
    });

    function updateProgress() {
      const completedTasks = document.querySelectorAll('.task-checkbox:checked').length;
      const totalTasks = checkboxes.length;
      const completionPercentage = (completedTasks / totalTasks) * 180;

      progressBar.style.width = `${completionPercentage}%`;
      completedText.textContent = `${completedTasks} / ${totalTasks} completed`;
    }
  });


  //to toggle the checkbox
 // Define an array of class names
const classNames = [
  'customization-container',
  'first-product-container',
  'custom-domain-container',
  'store-name-container',
  'payment-provider-container'
];

// Iterate through each class name
classNames.forEach(className => {
  // Select all elements with the current class name and attach the event listener
  document.querySelectorAll(`.${className} .task-checkbox`).forEach(checkbox => {
    checkbox.addEventListener('change', function () {
      const customCheckbox = this.closest(`.${className}`).querySelector('.custom-checkbox');
      customCheckbox.classList.toggle('clicked', this.checked);
    });
  });
});

// Javascript to toggle the main open and close
const mainContent = document.getElementById('main-content');
    const setupArrow = document.querySelector('.setup-arrow');
    const setdownArrow = document.querySelector('.setdown-arrow');

    setupArrow.addEventListener('click', () => {
      mainContent.classList.remove('hidden');
      setupArrow.style.display = 'none';
      setdownArrow.style.display = 'block';
    });

    setdownArrow.addEventListener('click', () => {
      mainContent.classList.add('hidden');
      setupArrow.style.display = 'block';
      setdownArrow.style.display = 'none';
    });

    //to open the accordion
    const accordionItems = document.querySelectorAll(".containers");

accordionItems.forEach(item => {
  item.addEventListener("click", function() { // Click on the entire item
    // Close any currently open accordion item
    accordionItems.forEach(otherItem => otherItem.classList.remove("active"));

    // Toggle the clicked item
    item.classList.toggle("active");
  });
});

     
