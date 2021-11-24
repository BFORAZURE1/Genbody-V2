let currentStep = 0;
let activeStep = 0;
let stepsData = [
  {
    heading: "Preparation",
    instruction1menuImg: "assests/steps_menu/step-wash-hands.svg",
    instruction2menuImg: "assests/steps_menu/step-kit.svg",
    instruction3menuImg: "assests/steps_menu/step-label.svg",
    instruction1heroImg: "assests/steps_hero/graphic-wash-hands.svg",
    instruction2heroImg: "assests/steps_hero/graphic-kit.svg",
    instruction3heroImg: "assests/steps_hero/graphic-label.svg",
    instruction1:
      "Sanitize your hands and work station.  Gloves are recommended before material preparation. ",
    instruction2:
      "Prepare the test device, nasal swab, extraction tube, dropper tip, and extraction solution.",
    instruction3:
      "Open the test device pouch and label the device with the patient identification",

    button: "Next Step",
    button_backward: "Previous Step"
  },
  {
    heading: "Specimen Collection",
    instruction1menuImg: "assests/steps_menu/step-drip.svg",
    instruction2menuImg: "assests/steps_menu/step-swab.svg",
    instruction3menuImg: "assests/steps_menu/step-solution.svg",
    instruction1heroImg: "assests/steps_hero/graphic-drip.svg",
    instruction2heroImg: "assests/steps_hero/graphic-swab.svg",
    instruction3heroImg: "assests/steps_hero/graphic-solution.svg",
    instruction1:
      "Add the Extraction Solution to the fill line indicated on the extraction tube.",
    instruction2:
      "Insert the nasal swab between ½ an inch to ¾ of an inch into the right nostril.  In a circular motion, rub the swab around the entire wall of the nostril with some pressure.  This should be performed for at least 5 circles and 15 seconds.  Withdraw the swab and repeat the same process on the left nostril",
    instruction3:
      "Insert the collected specimen swab into the extraction solution. Mix by squeezing the tube and simultaneously rotating the swab 8-10 times.  Remove the swab and place the dropper tip firmly onto the extraction tube.",
    button: "Next Step",
    button_backward: "Previous Step"
  },
  {
    heading: "Test ",
    instruction1menuImg: "assests/steps_menu/step-test.svg",
    instruction2menuImg: "assests/steps_menu/step-result.svg",
    instruction3menuImg: "assests/steps_menu/step-dispose.svg",
    instruction1heroImg: "assests/steps_hero/graphic-test.svg",
    instruction2heroImg: "assests/steps_hero/graphic-kit.svg",
    instruction3heroImg: "assests/steps_hero/graphic-dispose.svg",

    instruction1:
      "Add 4 drops of the sample mixture to the center of the sample well of the test device. The monitor strip will gradually turn red as the fluid flows through the strip.",
    instruction2:
      "Start the timer. Read the result after 15min and before 20min. Refer to figure on the right for result interpretation. If the control line does not appear, the result is invalid. Please contact technical support.",
    instruction3:
      "All used materials should be treated as biohazardous waste and should be disposed of in accordance with federal, state, and local requirements.",
    button_backward: "Previous Step",
    button: "Finish"
  }
];

let faqData = [
  {
    heading: "What is the intended use of the GenBody COVID-19 Ag test?",
    body: " The GenBody COVID-19 Ag is an immunochromatographic rapid diagnostic test (RDT) intended for the qualitative detection of nucleocapsid protein antigen from SARS-CoV-2 in direct nasopharyngeal (NP) or anterior nasal (AN) swab specimens from individuals who are suspected of COVID-19 by their healthcare provider within the first six days of symptom onset."
  },
  {
    heading:
      "What certificate is required to administer the GenBody COVID-19 Ag test? Who can administer the test?",
    body: "The only certificate the administering healthcare provider is required to have is the CLIA Certificate of Waiver. Anyone who is associated with the CLIA Waiver holder (and minimally trained??) can administer the test. There is no mandatory operator certificate involved with our test kits. "
  },
  {
    heading: "Can the GenBody COVID-19 Ag test be used for self testing?",
    body: "No, our test is FDA authorized under EUA only for Point of Care sites for professional use. There must be an operator to administer the test on a patient."
  },
  {
    heading: "How often should I perform the External Quality Controls?",
    body: "It is recommended that external control testing be performed with each new operator and before using a new lot or shipment of GenBody COVID-19 Ag kits to confirm the expected Quality Control (QC) results. The frequency of additional QC tests should be determined according to your laboratory's standard QC procedures and local, State and Federal regulations or accreditation requirements."
  },
  {
    heading: "What are the storage and testing temperature conditions?",
    body: "The GenBody COVID-19 Ag test can be stored in 2°-30°C (35.6°-86°F). Before test administration and quality control testing, let the test materials equilibrate to room temperature at 15°-30°C (59°-86°F). Do not expose the test devices and extraction solutions to temperatures outside of room temperature during testing."
  }
];

const topFaqsImageUrl = [
  "assests/step-open-swab.svg",
  "assests/step-result.svg",
  "assests/step-solution.svg",
  "assests/step-kit.svg",
  "assests/step-drip.svg"
];

const selectModalContent = step => {
  if (currentStep > 2) {
    $("#myModal").modal("hide");
    $(".modal-backdrop").hide();
    currentStep = 0;
  } else {
    if (currentStep < 3) {
      if (step === 0) {
        step = currentStep + 1;
        currentStep += 1;
      } else {
        currentStep = step;
      }
    }
    activeStep = step;

    if (step > 0 && step < 4) {
      document.getElementById("head").innerHTML =
        stepsData[Number(step) - 1].heading;
      document.getElementById("instruction1").innerHTML =
        stepsData[Number(step) - 1].instruction1;
      document.getElementById("instruction2").innerHTML =
        stepsData[Number(step) - 1].instruction2;
      document.getElementById("instruction3").innerHTML =
        stepsData[Number(step) - 1].instruction3;
      document.getElementById("instructionImg1").src =
        stepsData[Number(step) - 1].instruction1menuImg;
      document.getElementById("instructionImg2").src =
        stepsData[Number(step) - 1].instruction2menuImg;
      document.getElementById("instructionImg3").src =
        stepsData[Number(step) - 1].instruction3menuImg;
      document.getElementById("step-btn").innerHTML =
        stepsData[Number(step) - 1].button;
      document.getElementById("heroImage").src =
        stepsData[Number(step) - 1].instruction1heroImg;
    }
  }
};

const selectHeroImage = menuStepNumber => {
  if (menuStepNumber === 1) {
    document.getElementById("heroImage").src =
      stepsData[Number(activeStep) - 1].instruction1heroImg;
  }
  if (menuStepNumber === 2) {
    document.getElementById("heroImage").src =
      stepsData[Number(activeStep) - 1].instruction2heroImg;
  }
  if (menuStepNumber === 3) {
    document.getElementById("heroImage").src =
      stepsData[Number(activeStep) - 1].instruction3heroImg;
  }
};

const selectFaqModalContent = faqNumber => {
  document.getElementById("faqHead").innerHTML = faqData[faqNumber - 1].heading;
  document.getElementById("faqBody").innerHTML = faqData[faqNumber - 1].body;
};

const selectTopFaqImageUrl = faqNumber => {
  document.getElementById("top-faq-image").src = topFaqsImageUrl[faqNumber - 1];
};
