
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  let index = 0;
  const intervalTime = 6000; // match the 6s per slide

  function showSlide(i) {
    slides.forEach((s, n) => {
      s.style.opacity = n === i ? "1" : "0";
    });
    dots.forEach((d, n) => {
      d.classList.toggle("active", n === i);
    });
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  showSlide(index);
  setInterval(nextSlide, intervalTime);


  document.addEventListener("DOMContentLoaded", () => {
  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });
});


document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".slogan-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          section.classList.add("active");
        } else {
          section.classList.remove("active");
        }
      });
    },
    { threshold: 0.3 } // 0.3 = activate when 30% of the section is visible
  );

  observer.observe(section);
});
/**/ 
document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".journey-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          section.classList.add("active");
        } else {
          section.classList.remove("active");
        }
      });
    },
    { threshold: 0.3 } // 0.3 = activate when 30% of the section is visible
  );

  observer.observe(section);
});

/*cta-section*/ 

document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".cta-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          section.classList.add("active");
        } else {
          section.classList.remove("active");
        }
      });
    },
    { threshold: 0.3 } // 0.3 = activate when 30% of the section is visible
  );

  observer.observe(section);
});



//journey-section

document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".journey-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          section.classList.add("active");
        } else {
          section.classList.remove("active");
        }
      });
    },
    { threshold: 0.3 } // 0.3 = activate when 30% of the section is visible
  );

  observer.observe(section);
});

document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".content-section");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          section.classList.add("active");
        } else {
          section.classList.remove("active");
        }
      });
    },
    { threshold: 0.4 } // adjust sensitivity
  );

  observer.observe(section);
});

//.cafm-section

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".cafm-section");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach(section => observer.observe(section));
});

//service-container

document.querySelectorAll(".service-container").forEach(box => {
  box.addEventListener("click", () => {

    if (box.classList.contains("open")) {
      box.classList.remove("open");
    } else {
      box.classList.add("open");
    }

  });
});

//all for titles :home ( hero, whyUs_section , services,cafm-section , journey-section, partner-section)
document.addEventListener("DOMContentLoaded", () => {
  
  const sections = document.querySelectorAll("section:not(.hero)");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));
});




// connect slides to the why-item

const images = document.querySelectorAll(".image");
const why_items = document.querySelectorAll(".why_item");

let index2 = 0;
const intervalTime2 = 6000; // each Images lasts 6s

function showImage(i) {
  // Show / hide slides manually
  images.forEach((s, n) => {
    s.style.opacity = n === i ? "1" : "0";
  });

  // Highlight corresponding why-item
  why_items.forEach((item, n) => {
    item.classList.toggle("active", n === i);
  });
}

function nextImage() {
  index2 = (index2 + 1) % images.length;
  showImage(index2);
}

// Start
showImage(index2);
setInterval(nextImage, intervalTime2);

document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".partner-section");
  const logos = document.querySelectorAll(".partner-logo");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          logos.forEach((logo, index) => {
            setTimeout(() => {
              logo.classList.add("active");
            }, index * 550); // delay between logos
          });
        } else {
          logos.forEach(logo => logo.classList.remove("active"));
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(section);
});

