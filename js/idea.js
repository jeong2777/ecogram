document.addEventListener("DOMContentLoaded", () => {
  const page2 = document.querySelector(".page2");
  const ideaBtn = page2.querySelector("#idea-button");
  const page2Idea = page2.querySelector(".idea");
  const page2X = page2Idea.querySelector("p");

  const HIDDEN_CLASSNAME = "hidden";

  const page2IdeaHidden = () => {
    page2Idea.classList.toggle(HIDDEN_CLASSNAME);
  };

  ideaBtn.addEventListener("click", page2IdeaHidden);
  page2X.addEventListener("click", page2IdeaHidden);

  document.addEventListener("wheel", (event) => {
    if (event.deltaY < 0 || event.deltaY > 0) {
      page2Idea.classList.add(HIDDEN_CLASSNAME);
    }
  });
});
