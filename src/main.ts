import "./styles.css";

const observer = new IntersectionObserver(
  (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.12 }
);

const revealElements = document.querySelectorAll<HTMLElement>(".reveal");

revealElements.forEach((element: HTMLElement) => {
  observer.observe(element);
});
