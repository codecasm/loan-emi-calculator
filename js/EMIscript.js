// global declarations

let interestPerYear = 0;
let monthlyInterest = 0;
let monthlyPayment = 0;
let totalInterestCost = 0;
let totalRepayment = 0;

// function for calculation
function calculate() {
    console.log(`calculate`)
  loanAmount = document.getElementById("loan_amount").value;
  interestRate = document.getElementById("interest_per_year").value;
  loanDuration = document.getElementById("loan_duration").value;

  interestPerYear = (loanAmount * interestRate) / 100;
  monthlyInterest = interestPerYear / 12;
  monthlyPayment = monthlyInterest + loanAmount / loanDuration;
  totalInterestCost = monthlyInterest * loanDuration;
  totalRepayment = monthlyPayment * loanDuration;

  //----------------monthly interest----------------------

  document.getElementById("monthly_interest").innerHTML =
    " &#8377; " + monthlyInterest.toFixed(2);

  //-------------Monthly payment------------

  document.getElementById("monthly_payment").innerHTML =
    " &#8377; " + monthlyPayment.toFixed(2);

  //-------------Total repayment-----------

  document.getElementById("total_repayment").innerHTML =
    " &#8377; " + totalRepayment.toFixed(2);

  //--------------Total Interest cost----------------

  document.getElementById("total_interest").innerHTML =
    " &#8377; " + totalInterestCost.toFixed(2);

  if (
    totalRepayment > 0 &&
    document.getElementById("extra_info").style.display == "none"
  ) {
    document.getElementById("extra_info").style.display = "block";
  }
}

// function to reset the form
function reset() {
  console.log("reset clicked");
  document.getElementById("loan_amount").value = 0;
  document.getElementById("interest_per_year").value = 0;
  document.getElementById("loan_duration").value = 0;

  console.log(document.getElementById("extra_info").style.display);
  if (document.getElementById("extra_info").style.display == "block") {
    console.log("clicked");
    document.getElementById("extra_info").style.display = "none";
  }

  document.getElementById("monthly_interest").innerHTML = " &#8377; " + 0;
  document.getElementById("monthly_payment").innerHTML = " &#8377; " + 0;
  document.getElementById("total_interest").innerHTML = " &#8377; " + 0;
  document.getElementById("total_repayment").innerHTML = " &#8377; " + 0;
}

function show() {
  if (document.getElementById("benefits").style.display == "none") {
    document.getElementById("benefits").style.display = "block";
  }
  return false;
}
function hide() {
  if (document.getElementById("benefits").style.display == "block") {
    document.getElementById("benefits").style.display = "none";
  }
  return false;
}
