//  ============S L I D E S and GENERAL===========

let steps = document.querySelectorAll(".steps__numeration");
let steps_slides = document.querySelectorAll(".steps__slides");

let next_btn = document.querySelector(".next__btn");
let back_btn = document.querySelector(".back__btn");
let confirm_btn = document.querySelector(".confirm__btn");
let realsubmit = document.querySelector(".realsubmit");

let index = 0;

next_btn.addEventListener("click", next);

function next() {
  if (index < 3) {
    steps_slides[index].style.display = "none";
    steps[index].classList.remove("steps-active");
    index++;
    steps_slides[index].style.display = "block";
    steps[index].classList.add("steps-active");
    back_btn.style.display = "block";

    if (index === steps_slides.length - 1) {
      steps_slides[index].style.display = "block";
    }
    if (index === 3) {
      next_btn.style.display = "none";
      confirm_btn.style.display = "block";
    }
  }
}

back_btn.addEventListener("click", back);

function back() {
  if (index > 0) {
    steps_slides[index].style.display = "none";
    steps[index].classList.remove("steps-active");
    index--;
    steps_slides[index].style.display = "block";
    steps[index].classList.add("steps-active");

    if (index === 0) {
      back_btn.style.display = "none";
    }
    if (index < 3) {
      next_btn.style.display = "block";
      confirm_btn.style.display = "none";
    }
  }
}

// =========== PLANS WINDOW================
let plan_selection = document.querySelectorAll(".plans__info input");
let labels = document.querySelectorAll(".plans__info label");

for (let i = 0; i < plan_selection.length; i++) {
  plan_selection[i].addEventListener("change", () => {
    labels.forEach((item) => item.classList.remove("optionselected"));
    if (plan_selection[i].checked) {
      labels[i].classList.add("optionselected");
    }
  });
}

let period = document.querySelector("#toggle");
let plans_price = document.querySelectorAll(".plans_price");
let m_or_y = document.querySelectorAll(".m-or-y");
let adon_m_y = document.querySelectorAll(".adon-m-y");
let adon_price = document.querySelectorAll(".adonprice");

period.addEventListener("change", () => {
  if (period.checked) {
    plans_price[0].textContent = 90;
    plans_price[1].textContent = 120;
    plans_price[2].textContent = 150;
    m_or_y.forEach((element) => {
      element.textContent = "/yr";
      adon_price[0].textContent = 10;
      adon_price[1].textContent = 20;
      adon_price[2].textContent = 20;
      adon_m_y.forEach((item) => {
        item.textContent = "/yr";
      });
    });
  } else {
    plans_price[0].textContent = 9;
    plans_price[1].textContent = 12;
    plans_price[2].textContent = 15;
    m_or_y.forEach((element) => {
      element.textContent = "/mo";
    });
    adon_price[0].textContent = 1;
    adon_price[1].textContent = 2;
    adon_price[2].textContent = 2;
    adon_m_y.forEach((item) => {
      item.textContent = "/mo";
    });
  }
});

//  ================ADD ONS WINDOW================

let addons = document.querySelectorAll(".addons");
let chkbx = document.getElementsByName("addons");

for (let i = 0; i < chkbx.length; i++) {
  addons[i].addEventListener("change", () => {
    if (chkbx[i].checked) {
      addons[i].classList.add("addonselected");
    } else {
      addons[i].classList.remove("addonselected");
    }
  });
}

//  ======= FINISHING UP WINDOW================

let final_plan = document.querySelector(".final__plan__name");
let subscr_type = document.querySelectorAll(".subscr_type");
let subscr_type_main = document.querySelector(".subscr__type_main");

let selected_plans_price = document.querySelector(".main_prod_price");
let plans_inputs = document.getElementsByName("plans");
let plans__info = document.querySelector(".plans__info");
let plans_name = document.querySelectorAll(".plan_name");

next_btn.addEventListener("click", () => {
  for (let i = 0; i < plans_inputs.length; i++) {
    if (plans_inputs[i].checked) {
      final_plan.textContent = plans_name[i].textContent;
      selected_plans_price.textContent = plans_price[i].textContent;
    }
  }
});

period.addEventListener("change", () => {
  if (period.checked) {
    subscr_type_main.textContent = "(Yearly)";
    subscr_type.forEach((item) => {
      item.textContent = "/yr";
    });
  }
  // else if (!period.checked) {

  // }
});

subscr_type_main.textContent = "(Monthly)";
subscr_type.forEach((item) => {
  item.textContent = "/mo";
});

// =======addon pricing=====
let addon_inputs = document.getElementsByName("addons");
let addon_prices = document.querySelectorAll(".adonprice");
let final_addon_prices = document.querySelectorAll(".chosen_addon_price");
let final_addons = document.querySelectorAll(".addon_choice");

next_btn.addEventListener("click", () => {
  for (let i = 0; i < addon_inputs.length; i++) {
    if (addon_inputs[i].checked) {
      final_addons[i].style.display = "flex";
      final_addon_prices[i].textContent = addon_prices[i].textContent;
    } else if (!addon_inputs[i].checked) {
      final_addons[i].style.display = "none";
      final_addon_prices[i].textContent = 0;
    }
  }
});

let total = document.querySelector(".total_payable");
let sum = 0;

next_btn.addEventListener("click", () => {
  if (steps_slides[3].style.display === "block") {
    for (let i = 0; i < final_addon_prices.length; i++) {
      sum += Number(final_addon_prices[i].textContent);
    }

    total.textContent = sum + Number(selected_plans_price.textContent);
  }
  finalplan.value = final_plan.textContent;
  finalsubscription.value = subscr_type_main.textContent;
  total_payabe.value = total.textContent;
  let array = [];
  for (let i = 0; i < addon_name.length; i++) {
    if (chkbx[i].checked) {
      array.push(addon_name[i].textContent);
    }
  }
  addon_selected.value = JSON.stringify(array);
});
back_btn.addEventListener("click", () => {
  sum = 0;
});

// =========== UPDATING FORM ==========

let finalplan = document.querySelector(".finalplan");
let finalsubscription = document.querySelector(".finalsubscription");
let addon_selected = document.querySelector(".addon_selected");
let total_payabe = document.querySelector(".total_payabe");
let addon_name = document.querySelectorAll(".addon_name");
let slide5 = document.querySelector(".slide5");
let slide4 = document.querySelector(".slide4");

let form1 = document.querySelector(".registration__form");
let form2 = document.querySelector(".plans_form");

confirm_btn.addEventListener("click", () => {
  for (let i = 0; i < form2.length; i++) {
    form1.appendChild(form2[i]);
  }
});

confirm_btn.addEventListener("click", () => {
  form1.submit();
  confirm_btn.style.display = "none";
  back_btn.style.display = "none";
  next_btn.style.display = "none";
  slide4.style.display = "none";
  slide5.style.display = "flex";
});

// ==============VALIDATION=========
let user_inputs = document.querySelectorAll(".slide1 input");
let alerts = document.querySelectorAll(".required");

next_btn.addEventListener("mouseover", () => {
  let allhasvalue = true;
  for (let i = 0; i < user_inputs.length; i++) {
    if (user_inputs[i].value === "") {
      allhasvalue = false;
      next_btn.removeEventListener("click", next);
    }
    if (allhasvalue) {
      next_btn.addEventListener("click", next);
    }
  }
});
next_btn.addEventListener("click", () => {
  for (let i = 0; i < user_inputs.length; i++) {
    if (user_inputs[i].value === "") {
      user_inputs[i].style.outline = "1px solid red";
      alerts[i].style.display = "block";
    }
  }
});
