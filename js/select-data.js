let currentStep = 0;
let stepsData = [
  {
    heading: "How To Prepare Test",
    instruction1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    instruction2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    instruction3:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    button: "Next Step"
  },
  {
    heading: "How To Prepare Solution",
    instruction1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    instruction2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    instruction3:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    button: "Next Step"
  },
  {
    heading: "See Results",
    instruction1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    instruction2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    instruction3:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    button: "Finish"
  }
];

let faqData = [
  {
    heading:
      "FAQ Question 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
  },
  {
    heading:
      "FAQ Question 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
  },
  {
    heading:
      "FAQ Question 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
  },
  {
    heading:
      "FAQ Question 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
  },
  {
    heading:
      "FAQ Question 5 Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
  }
];

const selectModalContent = step => {
  if (currentStep > 2 && step === 0) {
    $("#myModal").modal("hide");
    $(".modal-backdrop").hide();
  } else {
    if (currentStep < 3) {
      if (step === 0) {
        step = currentStep + 1;
        currentStep += 1;
      } else {
        currentStep = step;
      }
    }

    if (step > 0 && step < 4) {
      document.getElementById("head").innerHTML =
        stepsData[Number(step) - 1].heading;
      document.getElementById("instruction1").innerHTML =
        stepsData[Number(step) - 1].instruction1;
      document.getElementById("instruction2").innerHTML =
        stepsData[Number(step) - 1].instruction2;
      document.getElementById("instruction3").innerHTML =
        stepsData[Number(step) - 1].instruction3;
      document.getElementById("step-btn").innerHTML =
        stepsData[Number(step) - 1].button;
    }
  }
};

const selectFaqModalContent = faqNumber => {
  document.getElementById("faqHead").innerHTML = faqData[faqNumber - 1].heading;
  document.getElementById("faqBody").innerHTML = faqData[faqNumber - 1].body;
};
