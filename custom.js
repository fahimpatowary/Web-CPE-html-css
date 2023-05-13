function formShift() {
  var secondForm = document.querySelector(".second-form");
  var fristForm = document.querySelector(".frist-form");
  if (fristForm.style.display === "none") {
    fristForm.style.display = "block";
    secondForm.style.display = "none";
  } else {
    fristForm.style.display = "none";
    secondForm.style.display = "block";
  }
}

function CPSValues() {
  var CPAValue = document.getElementById("CPA").value;
  var Ptin = document.querySelector("#Ptin");

  if (CPAValue === "CPA" || CPAValue === "CPA And EA") {
    Ptin.style.display = "block";
  } else {
    Ptin.style.display = "none";
  }
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    document.querySelector("nav").classList.add("fixed-top");
  } else {
    document.querySelector("nav").classList.remove("fixed-top");
  }
});
