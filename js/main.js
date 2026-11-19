// The static website is ready to publish. Set API_BASE after the InfinityFree backend is installed.
window.LUNAR_SITE_CONFIG = window.LUNAR_SITE_CONFIG || { API_BASE: "" };

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const notice = form.querySelector(".notice");
      notice.style.display = "block";
      notice.textContent = "The contact form is not connected yet. Please use the email address shown on this page.";
    });
  }

  const booking = document.querySelector("[data-booking-form]");
  if (booking) {
    booking.addEventListener("submit", (event) => {
      event.preventDefault();
      const notice = booking.querySelector(".notice");
      notice.style.display = "block";
      notice.textContent = "Online booking is being configured. Please contact us directly to arrange your consultation.";
    });
  }
});
