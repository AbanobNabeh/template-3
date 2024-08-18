let el = document.querySelector(".scroller");

let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100}%`;
});

let ourSkills = document.querySelector(".our-skills");
window.onscroll = function () {
  let skillsOffesetTop = ourSkills.offsetTop;
  let skillsOuterHeight = ourSkills.offsetHeight;
  let windowHeight = this.innerHeight;
  let windowScrollTop = this.pageYOffset;
  if (windowScrollTop > skillsOffesetTop + skillsOuterHeight - windowHeight) {
    let allSkills = document.querySelectorAll(
      ".our-skills .container .skills .the-progress span"
    );
    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
    console.log(allSkills);
  }
};
