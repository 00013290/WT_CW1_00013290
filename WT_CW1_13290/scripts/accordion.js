const accordionQuestion = document.querySelectorAll(".accordion_question");

accordionQuestion.forEach(accordionQuestion => {
  accordionQuestion.addEventListener("click", event => {
    //This part of code is used for no more than one accordion to be opened
    const currentlyActiveAccordionQuestion = document.querySelector(".accordion_question.active");
    if(currentlyActiveAccordionQuestion && currentlyActiveAccordionQuestion!==accordionQuestion) {
      currentlyActiveAccordionQuestion.classList.toggle("active");
      currentlyActiveAccordionQuestion.nextElementSibling.style.maxHeight = 0;
    }
    //Controls accordion closing and opening
    accordionQuestion.classList.toggle("active");
    const accordionAnswerHolder = accordionQuestion.nextElementSibling;
    if(accordionQuestion.classList.contains("active")) {
      accordionAnswerHolder.style.maxHeight = accordionAnswerHolder.scrollHeight + "px";
    }
    else {
      accordionAnswerHolder.style.maxHeight = 0;
    }
    
  });
});