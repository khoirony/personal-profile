/**
 * Personal Profile – Main Application Script
 * Handles typing animation, experience accordion, AOS init, and dynamic year.
 */

// ============================================================
// Typing Animation
// ============================================================

const TYPING_SPEED_MS = 200;

const words = [
  { text: "hi,", color: "" },
  { text: "rony", color: "red" },
  { text: "here.", color: "" },
];

/**
 * Creates a typing animation effect in the hero section.
 * Each word is typed character by character with optional color styling.
 */
function typeWriter() {
  const typingElement = document.getElementById("typing");
  if (!typingElement) return;

  let wordIndex = 0;
  let charIndex = 0;
  let output = "";

  function type() {
    if (wordIndex >= words.length) return;

    const currentWord = words[wordIndex];
    const displayText = currentWord.text.substring(0, charIndex + 1);

    let tempOutput = output;
    if (currentWord.color === "red") {
      tempOutput += `<span class="text-red-600">${displayText}</span>`;
    } else {
      tempOutput += displayText;
    }
    typingElement.innerHTML = tempOutput;

    charIndex++;

    if (charIndex === currentWord.text.length) {
      output = tempOutput + " ";
      wordIndex++;
      charIndex = 0;
    }

    setTimeout(type, TYPING_SPEED_MS);
  }

  type();
}

// ============================================================
// Experience Accordion
// ============================================================

/**
 * Toggles the visibility of experience detail sections.
 *
 * @param {HTMLElement} button - The button element that triggers the toggle.
 */
function toggleDetail(button) {
  const detail = button.nextElementSibling;
  if (!detail) return;

  const isHidden = detail.classList.contains("hidden");

  // Toggle active state on button for arrow rotation animation
  button.classList.toggle("active");

  // Toggle detail visibility
  if (isHidden) {
    detail.classList.remove("hidden");
  } else {
    detail.classList.add("hidden");
  }
}

// ============================================================
// Footer – Dynamic Year
// ============================================================

/**
 * Sets the current year in the footer copyright notice.
 */
function setCurrentYear() {
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// ============================================================
// Initialization
// ============================================================

document.addEventListener("DOMContentLoaded", function () {
  // Start typing animation
  typeWriter();

  // Set footer year
  setCurrentYear();

  // Initialize AOS (Animate On Scroll)
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 120,
    });
  }
});
