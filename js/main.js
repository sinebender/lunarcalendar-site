
window.LUNAR_SITE_CONFIG = {
  API_BASE: "https://lunar-api.freehosting.dev/api/contact.php"
};

document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("[data-contact-form]");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const notice = form.querySelector(".notice");
      const button = form.querySelector('button[type="submit"]');

      const language =
        form.querySelector('[name="language"]')?.value || "English";

      const isBulgarian = language === "Български";

      notice.style.display = "block";
      notice.textContent = isBulgarian
        ? "Изпращане..."
        : "Sending...";

      button.disabled = true;

      try {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        const response = await fetch(
          window.LUNAR_SITE_CONFIG.API_BASE,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          }
        );

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || "Sending failed.");
        }

        notice.textContent = isBulgarian
          ? "Заявката беше изпратена успешно! Ще се свържа с Вас."
          : "Your request was sent successfully! I will contact you.";

        form.reset();

      } catch (error) {
        console.error("Lunar contact form:", error);

        notice.textContent = isBulgarian
          ? "Възникна грешка при изпращането. Моля, опитайте отново."
          : "There was a problem sending your request. Please try again.";

      } finally {
        button.disabled = false;
      }
    });
  }

  const booking = document.querySelector("[data-booking-form]");

  if (booking) {
    booking.addEventListener("submit", (event) => {
      event.preventDefault();

      const notice = booking.querySelector(".notice");

      notice.style.display = "block";
      notice.textContent =
        "Online booking is being configured. Please contact us directly.";
    });
  }

});
