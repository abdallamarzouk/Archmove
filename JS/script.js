const observer = new IntersectionObserver((entries) => {
  entries.forEach((entries) => {
    console.log(entries)
    if (entries.isIntersecting) {
      entries.target.classList.add('show')
    } else {
      entries.target.classList.remove('show')
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));