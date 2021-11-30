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
    heading: "What is COVID-19?",
    body: "a.	COVID-19 is caused by the SARS-CoV-2 virus which is a new virus in humans causing a contagious respiratory illness. COVID-19 can present with a mild to severe illness, although some people infected with COVID-19 may have no symptoms at all. Older adults and people of any age who have underlying medical conditions have a higher risk of severe illness from COVID-19. Serious outcomes of COVID-19 include hospitalization and death. The SARS-CoV-2 virus can be spread to others not just while one is sick, but even before a person shows signs or symptoms of being sick (e.g. fever, coughing, difficulty breathing, etc.)."
  },
  {
    heading: "Where can we get the most updated information on COVID-19",
    body: "The most up-to-date information on COVID-19 is available at the CDC General webpage: https://www.cdc.gov/COVID19"
  },
  {
    heading: "Does the test detect new SARS-CoV-2 Variants?",
    body: "Yes."
  },
  {
    heading: "What are known potential risks for using the tests",
    body: "Possible discomfort or other complication taht can happen during sample collection and possible incorrect test result"
  },
  {
    heading: "What is serial testing?",
    body: "Serial testing is when one person is tested for COVID-19 more than once, as antigen test may be less sensitive than other COVID-19 tests and false results may occur. Repeated testing may identify result s more acurately than a single test. <br> After a single test, additional molecular COVID-19 test may be necessary depending on individual risk factors and test results."
  },
  {
    heading:
      "What is the difference between antigen tests and other COVID-19 tests?",
    body: "There are different kinds of test for diagnosing COVID-19. PCR tests or molecular tests detect genetic material from the virus. Antigen tests detect protein from the virus. Antigen tests are more specific for the virus being tested for but is less sensitive than the molecular test. This means that a positive result is highly accurate, but a negative result does not rule out infections. If the patient has recieved two negative tests within a 24 to 36 hours period, but is still experiencing COVID-19 symptoms such as coughing, shortness of breath, or fever, you should discuss the need for additional testing with the patient."
  },
  {
    heading: "Is this test FDA-approved or cleared?",
    body: "No. This test is not yet approved or cleared by the United States FDA. FDA may issue an Emergency Use Authorization (EUA) when certain criteria are met, which includes that there are no adequate, approved, available alternatives. The EUA for this test is supported by the Secretary of Health and Human Services (HHS’s) declaration that circumstances exist to justify the emergency use of in vitro diagnostics for the detection and/or diagnosis of the virus that causes COVID-19."
  },
  {
    heading: "What are the approved alternatives?",
    body: "a.	There are no approved available alternative antigen tests."
  },
  {
    heading: "How many times should the patient be tested to ensure accuracy?",
    body: "If the patient's first test is negative, you should test again in 24 to 46 hours to ensure the best accuracy."
  },
  {
    heading: "Is the test reusable?",
    body: "No. Each test is intended for single use and is to be disposed of after the test is complete."
  },
  {
    heading: "Where is the test made?",
    body: "The GenBody COVID-19 Rapid Ag Test is manufacatured in California, USA."
  },
  {
    heading: "How accurate is GenBody Antigen Rapid Test?",
    body: "GenBody Antigen Rapid Tests were compared to molecular tests (PCR) that were authorized by the FDA for SARS-CoV-2 assay to determine test performance. We have correctly identified 92% sensitivity and 99% specificity (false positive against false negative)"
  },
  {
    heading: "What do I do if I have a positive result?",
    body: "If you have a positive test result, it is very likely that you have COVID-19 because protein from the virus were founding your sample. Therefore, it is also likely that you may be placed in isolation to avoid spreading the virus to others. There is a very small chance that this test can give a positive result that is wrong or false positive. Should you test positive with the GenBody Antigen Rapid Test, you should self-islate and seek follow-up care with your healthcare provider as additional testing may be necessary."
  },
  {
    heading: "What do I do next if I have a negative test result?",
    body: "A negative test result means that protein from the virus that causes the COVID-19 were not found in your sample. It is possible for this test to give a negative result that is incorrect. The amount of antigen in a sample may decrease the longer you have symptoms of infection. In symptomatic people, specimens collected after you have had symptoms for more than seven days may be more likely to be negative compared to a molecular assay. If you test negative and continue to experience COVID-19 like symptoms of fever, cough, and shortness of breath, you should seek follow up care with your healthcare provider and they may suggest you need another test to determine if you have contracted the virus causing COVID-19."
  }
];

const topFaqsImageUrl = [
  "assests/steps_menu/step-kit.svg",
  "assests/faq_assets/CLIA-LOGO.png",
  "assests/faq_assets/nurse-g434d9c4a4_1280.jpg",
  "assests/steps_menu/step-results.svg",
  "assests/step-drip.svg"
];

const selectModalContent = step => {
  let previousBtn = document.getElementById("previous-btn");
  let btnDiv = document.getElementById("btn-div");
  if (currentStep > 2 && step !== -1) {
    $("#myModal").modal("hide");
    $(".modal-backdrop").hide();
    currentStep = 0;
  } else {
    if (currentStep < 3 || step === -1) {
      if (step === 0) {
        step = currentStep + 1;
        currentStep += 1;
      } else if (step === -1) {
        step = currentStep - 1;
        currentStep -= 1;
      } else {
        currentStep = step;
      }
    }
    activeStep = step;
    if (activeStep > 1) {
      previousBtn.style.display = "block";
      btnDiv.classList.remove("justify-content-end");
      btnDiv.classList.add("justify-content-between");
    } else {
      previousBtn.style.display = "none";
      btnDiv.classList.add("justify-content-end");
      btnDiv.classList.remove("justify-content-between");
    }
    if (activeStep === 1) {
      document.getElementById("indicator-1").style.opacity = 1;
      document.getElementById("indicator-2").style.opacity = 0.4;
      document.getElementById("indicator-3").style.opacity = 0.4;
    }

    if (activeStep === 2) {
      document.getElementById("indicator-1").style.opacity = 0.4;
      document.getElementById("indicator-2").style.opacity = 1;
      document.getElementById("indicator-3").style.opacity = 0.4;
    }
    if (activeStep === 3) {
      document.getElementById("indicator-1").style.opacity = 0.4;
      document.getElementById("indicator-2").style.opacity = 0.4;
      document.getElementById("indicator-3").style.opacity = 1;
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
