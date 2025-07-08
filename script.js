 const sections = document.querySelectorAll('.fade-in-section');

    if ('IntersectionObserver' in window) {
      sections.forEach(section => {
        section.classList.remove('fade-in-section'); // reset opacity to 0
      });

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      sections.forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
      });
    }
