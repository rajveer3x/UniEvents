document.addEventListener("DOMContentLoaded", function () {
  // Select all "View Details" links inside #gallery1
  const galleryLinks = document.querySelectorAll("#gallery1 li a.link1");
  if (galleryLinks) {
    galleryLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();  // Prevent navigation
  
        // Get the content of the corresponding <p> tag
        const eventDetails = this.parentElement.innerHTML;
  
        // Insert details into the popup
        const popupDetails = document.getElementById("popup-details");
        if (popupDetails) {
          popupDetails.innerHTML = eventDetails;
        }
  
        // Show the popup
        const popup = document.getElementById("popup");
        if (popup) {
          popup.classList.remove("hidden");
        }
      });
    });
  }
  
  // Close the popup when the close button is clicked
  const closeButton = document.getElementById("close-popup");
  if (closeButton) {
    closeButton.addEventListener("click", function () {
      const popup = document.getElementById("popup");
      if (popup) {
        popup.classList.add("hidden");
      }
    });
  }
  
  // Close the popup when clicking outside the popup content
  const popup = document.getElementById("popup");
  if (popup) {
    popup.addEventListener("click", function (e) {
      if (e.target === this) {
        this.classList.add("hidden");
      }
    });
  }

  // Form Validation
  const sendButton = document.getElementById('sendButton');
  const clearButton = document.getElementById('clearButton');
  
  if (sendButton) {
    sendButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default form submission
  
      const nameField = document.getElementById('name');
      const emailField = document.getElementById('email');
      const mobileField = document.getElementById('mobile');
      const subjectField = document.getElementById('subject');
      const messageField = document.getElementById('message');

      // Check if fields exist and retrieve their values safely
      const name = nameField ? nameField.value : "";
      const email = emailField ? emailField.value : "";
      const mobile = mobileField ? mobileField.value : "";
      const subject = subjectField ? subjectField.value : "";
      const message = messageField ? messageField.value : "";
  
      // Validate form fields
      if (name === "" || email === "" || mobile === "" || subject === "" || message === "") {
        alert("All fields are mandatory");
        return false;
      }
  
      if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
      }
  
      if (mobile.length !== 10 || isNaN(mobile)) {
        alert("Mobile number should be exactly 10 digits and contain only numbers.");
        return false;
      }
  
      alert(`Thank you ${name} for submitting the form!`);
      // Clear the form after successful submission
      clearForm();
    });
  }
  
  if (clearButton) {
    clearButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default action
      clearForm();
    });
  }

  // Helper function to clear the form
  function clearForm() {
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const mobileField = document.getElementById('mobile');
    const subjectField = document.getElementById('subject');
    const messageField = document.getElementById('message');

    if (nameField) nameField.value = "";
    if (emailField) emailField.value = "";
    if (mobileField) mobileField.value = "";
    if (subjectField) subjectField.value = "";
    if (messageField) messageField.value = "";
  }

  // Helper function to validate email format
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
