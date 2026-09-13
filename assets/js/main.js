document.addEventListener("DOMContentLoaded", () => {

  /* Mobile menu */

  const menuButton = document.querySelector("[data-menu-button]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("is-open");
      menuButton.classList.toggle("is-active");
    });
  }

  /* Close mobile menu after clicking a link */

  const mobileLinks = document.querySelectorAll(
    "[data-mobile-menu] a"
  );

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (mobileMenu) {
        mobileMenu.classList.remove("is-open");
      }

      if (menuButton) {
        menuButton.classList.remove("is-active");
      }
    });
  });

  /* FAQ accordion */

  const faqItems = document.querySelectorAll("[data-faq]");

  faqItems.forEach(item => {
    const question = item.querySelector("[data-faq-question]");

    if (!question) return;

    question.addEventListener("click", () => {

      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove("is-open");
        }
      });

      item.classList.toggle("is-open");
    });
  });

  /* Current year */

  document.querySelectorAll("[data-year]").forEach(element => {
    element.textContent = new Date().getFullYear();
  });

});
