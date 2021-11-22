var tabTriggerBtns = document.querySelectorAll(".dont-redirect");

tabTriggerBtns.forEach(function (tabTriggerBtn, index) {
  tabTriggerBtn.addEventListener("click", function () {
    var currentTabData = document.querySelector(
      '.faqs[data-tab-content="' + this.dataset.tabTrigger + '"]'
    );

    // // remove classess
    document.querySelector(".faqs.faq-active").classList.remove("faq-active");
    document.querySelector(".dont-redirect.active").classList.remove("active");
    // // add classes
    currentTabData.classList.add("faq-active");
    this.classList.add("active");
  });
});
