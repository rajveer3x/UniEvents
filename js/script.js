document.addEventListener("DOMContentLoaded", function () {
    // Select all "View Details" links inside #gallery1
    document.querySelectorAll("#gallery1 li a.link1").forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();  // Prevent navigation
  
        // Get the content of the corresponding <p> tag
        const eventDetails = this.parentElement.innerHTML;
  
        // Insert details into the popup
        document.getElementById("popup-details").innerHTML = eventDetails;
  
        // Show the popup
        document.getElementById("popup").classList.remove("hidden");
      });
    });
  
    // Close the popup when the close button is clicked
    document.getElementById("close-popup").addEventListener("click", function () {
      document.getElementById("popup").classList.add("hidden");
    });
  
    // Close the popup when clicking outside the popup content
    document.getElementById("popup").addEventListener("click", function (e) {
      if (e.target === this) {
        this.classList.add("hidden");
      }
    });
  });
  