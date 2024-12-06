// JavaScript for image slider functionality
const slider = document.getElementById("slider");
let currentSlide = 0;
const images = document.querySelectorAll(".slider-image");

// Function to show the next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % images.length;
  updateSlider();
}

// Function to show the previous slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + images.length) % images.length;
  updateSlider();
}

// Function to update the slider display
function updateSlider() {
  const offset = -currentSlide * 33.33; // Since there are 3 images in a row
  slider.style.transform = `translateX(${offset}%)`;
}

// Add event listeners for next and previous buttons
document.querySelector(".next-btn").addEventListener("click", nextSlide);
document.querySelector(".prev-btn").addEventListener("click", prevSlide);

// Set up interval for automatic slide change every 3 seconds
setInterval(nextSlide, 3000); // Change slide every 3 seconds

// JavaScript for form validation
const emailInput = document.getElementById("email-input");
const startButton = document.querySelector(".start-button");

startButton.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the form from submitting

  const emailValue = emailInput.value.trim();

  if (isValidEmail(emailValue)) {
    alert("You are now subscribed!");
    emailInput.value = ""; // Clear the input field
  } else {
    alert("Please enter a valid email address.");
  }
});

// Simple email validation function
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Add smooth scrolling effect to FAQ section links
const faqLinks = document.querySelectorAll(".footer-item a");

faqLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50, // Adjust the offset for the navbar
        behavior: "smooth",
      });
    }
  });
});

// Add hover effect to the "Get Started" button
const getStartedBtn = document.querySelector(".start-button");

getStartedBtn.addEventListener("mouseenter", () => {
  getStartedBtn.style.backgroundColor = "#ff3b3f"; // Darker red when hovered
});

getStartedBtn.addEventListener("mouseleave", () => {
  getStartedBtn.style.backgroundColor = "#e50914"; // Original red color
});

// FAQ toggle functionality
function toggleFAQ(element) {
  const answer = element.nextElementSibling;
  const button = element.querySelector(".toggle-btn");

  if (answer.style.display === "block") {
    answer.style.display = "none";
    button.textContent = "+";
  } else {
    answer.style.display = "block";
    button.textContent = "−";
  }
}

// Get references to the video element and the pause button
const video = document.getElementById("background-video");
const pauseButton = document.querySelector(".pause-button");

// Add an event listener to the pause button
pauseButton.addEventListener("click", () => {
  if (video.paused) {
    video.play(); // Play the video
    pauseButton.setAttribute("aria-label", "Pause Video");
    changeIconToPause(); // Update icon to "pause"
  } else {
    video.pause(); // Pause the video
    pauseButton.setAttribute("aria-label", "Play Video");
    changeIconToPlay(); // Update icon to "play"
  }
});

// Function to change the icon to "pause"
function changeIconToPause() {
  pauseButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="16" height="16">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.5 2C3.22386 2 3 2.22386 3 2.5V13.5C3 13.7761 3.22386 14 3.5 14H6.5C6.77614 14 7 13.7761 7 13.5V2.5C7 2.22386 6.77614 2 6.5 2H3.5ZM9.5 2C9.22386 2 9 2.22386 9 2.5V13.5C9 13.7761 9.22386 14 9.5 14H12.5C12.7761 14 13 13.7761 13 13.5V2.5C13 2.22386 12.7761 2 12.5 2H9.5Z"
        fill="currentColor"
      ></path>
    </svg>
  `;
}

// Function to change the icon to "play"
function changeIconToPlay() {
  pauseButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="16" height="16">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 2.5L12 8L3 13.5V2.5Z"
        fill="currentColor"
      ></path>
    </svg>
  `;
}
function toggleFAQ(button) {
  const answerElement = button.parentElement.nextElementSibling;
  const allAnswers = document.querySelectorAll('.faq-answer');

  allAnswers.forEach(answer => {
    if (answer !== answerElement) {
      answer.classList.remove('open');
    }
  });

  answerElement.classList.toggle('open');

  if (answerElement.classList.contains('open')) {
    button.textContent = '-';
  } else {
    button.textContent = '+';
  }
}

