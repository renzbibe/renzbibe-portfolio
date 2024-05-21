const elementsAnimateLeft = document.querySelectorAll('.slide-left');
const elementsAnimateRight = document.querySelectorAll('.slide-right');

const observerLeft = new IntersectionObserver(
  entries => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('animate-left', entry.isIntersecting)
      if (entry.isIntersecting) {
        observerLeft.unobserve(entry.target);
      }
    })
  }, {
    threshold: 0, 
  }
)

const observerRight = new IntersectionObserver(
  entries => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('animate-right', entry.isIntersecting)
      if (entry.isIntersecting) {
        observerRight.unobserve(entry.target);
      }
    })
  }, {
    threshold: 0, 
  }
)

elementsAnimateLeft.forEach((element) => {
  observerLeft.observe(element);
})

elementsAnimateRight.forEach((element) => {
  observerRight.observe(element);
})
