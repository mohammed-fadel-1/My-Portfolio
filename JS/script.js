// Observation_1 from top to bottom
document.addEventListener("DOMContentLoaded", () => {
  const observations = {
    threshold: 0.25,
  };
  const callBackFun = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active_1");
      }
    });
  };
  const observer = new IntersectionObserver(callBackFun, observations);
  const elements = document.querySelectorAll(".reveal");
  elements.forEach((el) => {
    observer.observe(el);
  });
});
// Observation_2 from right to left
document.addEventListener("DOMContentLoaded", () => {
  const observations = {
    threshold: 0.25,
  };
  const callBackFun = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active_2");
      }
    });
  };
  const observer = new IntersectionObserver(callBackFun, observations);
  const elements = document.querySelectorAll(".reveal_1");
  elements.forEach((el) => {
    observer.observe(el);
  });
});
// Observation_3 from left to right
document.addEventListener("DOMContentLoaded", () => {
  // Condition
  const observations = {
    threshold: 0.25,
  };
  const callBackFun = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active_2");
      }
    });
  };
  const observer = new IntersectionObserver(callBackFun, observations);
  const elements = document.querySelectorAll(".reveal_2");
  elements.forEach((el) => {
    observer.observe(el);
  });
});
// Links
let navLinks = document.querySelectorAll(".navbar-nav .nav-item .nav-link");
console.log(navLinks);
let section = document.querySelectorAll(".section");
console.log(section);
window.addEventListener("scroll", () => {
  let id = "";
  section.forEach((element) => {
    // ارتفاع كل اللي فوق السكشن
    let offsetTop = element.offsetTop;
    console.log(offsetTop);
    // ارتفاع السكشن نفسه
    let outerHight = element.offsetHeight;
    console.log(outerHight);
    if (scrollY >= offsetTop - 100) {
      id = element.getAttribute("id");
    }
  });
  navLinks.forEach((el) => {
    el.classList.remove("active");
    if (el.getAttribute("href") === `#${id}`) {
      el.classList.add("active");
    }
  });
});
navLinks.forEach((el) => {
  el.classList.remove("active");
  el.addEventListener("click", () => {
    // document.querySelector(".active").classList.remove("active");
    el.classList.add("active");
    console.log("add");
  });
});
// To Top
let toTop = document.querySelector(".to-top");
console.log(toTop);
window.addEventListener("scroll", () => {
  if (this.window.scrollY >= 150) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
});
toTop.onclick = () => {
  (window,
    scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    }));
};

let contet = document.querySelectorAll(".different .content");
console.log(contet);
contet.forEach((element) => {
  element.addEventListener("click", () => {
    let info = element.querySelector(".differert-info");
    console.log(element.querySelector(".differert-info"));
    info.classList.toggle("notDisplay");
  });
});

let skills = document.querySelector(".skills");
console.log(skills);
let prog = document.querySelectorAll(".prog");
console.log(prog);
document.onscroll = () => {
  // ارتفاع كل اللي فوق السكشن
  let offsetTop = skills.offsetTop;
  console.log(offsetTop);
  // ارتفاع السكشن نفسه
  let outerHight = skills.offsetHeight;
  console.log(outerHight);
  // ارتفاع ال window نفسها
  let windowHeigh = this.innerHeight;
  console.log(windowHeigh);
  // الارتفاع في حاله ال scroll
  let scrollTop = this.pageYOffset;
  console.log(scrollTop);

  if (scrollTop > offsetTop + outerHight - windowHeigh) {
    prog.forEach((ele) => {
      ele.style.width = ele.dataset.percent;
    });
  }
};
