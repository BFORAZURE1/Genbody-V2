let currentStep = 0;
let stepsData = [
  {
    heading: "Preparation",
    instruction1:
      "Sanitize your hands and work station.  Gloves are recommended before material preparation. ",
    instruction2:
      "Prepare the test device, nasal swab, extraction tube, dropper tip, and extraction solution.",
    instruction3:
      "Open the test device pouch and label the device with the patient identification",
    button_forward: "Next Step",
    button_backward: "Previous Step"
  },
  {
    heading: "Specimen Collection",
    instruction1:
      "Add the Extraction Solution to the fill line indicated on the extraction tube.",
    instruction2:
      "Insert the nasal swab between ½ an inch to ¾ of an inch into the right nostril.  In a circular motion, rub the swab around the entire wall of the nostril with some pressure.  This should be performed for at least 5 circles and 15 seconds.  Withdraw the swab and repeat the same process on the left nostril",
    instruction3:
      "Insert the collected specimen swab into the extraction solution. Mix by squeezing the tube and simultaneously rotating the swab 8-10 times.  Remove the swab and place the dropper tip firmly onto the extraction tube.",
    button_forward: "Next Step",
    button_backward: "Previous Step"
  },
  {
    heading: "Test ",
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
    heading:
      "What is the intended use of the GenBody COVID-19 Ag test?",
    body: " The GenBody COVID-19 Ag is an immunochromatographic rapid diagnostic test (RDT) intended for the qualitative detection of nucleocapsid protein antigen from SARS-CoV-2 in direct nasopharyngeal (NP) or anterior nasal (AN) swab specimens from individuals who are suspected of COVID-19 by their healthcare provider within the first six days of symptom onset."
  },
  {
    heading:
      "What certificate is required to administer the GenBody COVID-19 Ag test? Who can administer the test?",
    body: "The only certificate the administering healthcare provider is required to have is the CLIA Certificate of Waiver. Anyone who is associated with the CLIA Waiver holder (and minimally trained??) can administer the test. There is no mandatory operator certificate involved with our test kits. "
  },
  {
    heading:
      "Can the GenBody COVID-19 Ag test be used for self testing?",
    body: "No, our test is FDA authorized under EUA only for Point of Care sites for professional use. There must be an operator to administer the test on a patient."
  },
  {
    heading:
      "How often should I perform the External Quality Controls?",
    body: "It is recommended that external control testing be performed with each new operator and before using a new lot or shipment of GenBody COVID-19 Ag kits to confirm the expected Quality Control (QC) results. The frequency of additional QC tests should be determined according to your laboratory's standard QC procedures and local, State and Federal regulations or accreditation requirements."
  },
  {
    heading:
      "What are the storage and testing temperature conditions?",
    body: "The GenBody COVID-19 Ag test can be stored in 2°-30°C (35.6°-86°F). Before test administration and quality control testing, let the test materials equilibrate to room temperature at 15°-30°C (59°-86°F). Do not expose the test devices and extraction solutions to temperatures outside of room temperature during testing."
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