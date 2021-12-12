var CC, YY, MM, DD, d, dayValue;
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", " Yaa", "Afua", "Ama"];

function validate() {
  var genders = document.getElementsByName("gender");
  if (document.nameForm.year.value == "" || document.nameForm.year.value.length != 4 || document.nameForm.year.value >2100 || document.nameForm.year.value <= 1900) {
    alert("Please enter a valid year of birth! e.g 2016");
    document.nameForm.year.reach();
    return false;
  } else if (document.nameForm.month.value == "" || isNaN(document.nameForm.month.value) ||
    document.nameForm.month.value.length != 2 || document.nameForm.month.value > 12 || document.nameForm.month.value <= 0) {
    alert("Please enter correct month of birth! ranging from 1 to 12");
    document.nameForm.month.reach();
    return false;
  } else if (document.nameForm.date.value == "" || isNaN(document.nameForm.month.value) ||
    document.nameForm.month.value.length != 2 || document.nameForm.date.value > 31 || document.nameForm.date.value <= 0) {
    alert("Please enter a valid date of birth!");
    document.nameForm.day.reach();
    return false;
  } else if (genders[0].checked == false && genders[1].checked == false) {
    alert("You must choose either male or female");
    return false;
  } else {
    return true;
  }

}

function calculateDayValue() {
  year = document.getElementById("year").value;
  CC = parseInt(year.substring(0, 2));
  YY = parseInt(year.substring(2, 4));
  MM = parseInt(document.getElementById("month").value);
  DD = parseInt(document.getElementById("date").value);
  d = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
  console.log(d);
  return (Math.floor(d));
}

function findGender() {
  var genders = document.getElementsByName("gender");
  if (genders[0].checked == true) {
    var gender = "male";
  } else if (genders[1].checked == true) {
    var gender = "female";
  } else {
    return false;
  }

  switch (gender) {
    case "male":
      if (dayValue == 1) {
        alert("Hey you were born on " + dayNames[0] + " ,Your Akan name is " + maleNames[0] + "!");
      } else if (dayValue == 2) {
        alert("Hey you were born on " + dayNames[1] + " ,Your Akan name is " + maleNames[1] + "!");
      } else if (dayValue == 3) {
        alert("Hey you were born on " + dayNames[2] + " ,Your Akan name is " + maleNames[2] + "!");
      } else if (dayValue == 4) {
        alert("Hey you were born on " + dayNames[3] + " ,Your Akan name is " + maleNames[3] + "!");
      } else if (dayValue == 5) {
        alert("Hey you were born on " + dayNames[4] + " ,Your Akan name is " + maleNames[4] + "!");
      } else if (dayValue == 6) {
        alert("Hey you were born on " + dayNames[5] + " ,Your Akan name is " + maleNames[5] + "!");
      } else if (dayValue == -0) {
        alert("Hey you were born on " + dayNames[6] + " ,Your Akan name is " + maleNames[6] + "!");
      }
      break;
    case "female":
      if (dayValue == 1) {
        alert("Hey you were born on " + dayNames[0] + " ,Your Akan name is  " + femaleNames[0] + "!");
      } else if (dayValue == 2) {
        alert("Hey you were born on " + dayNames[1] + " ,Your Akan name is " + femaleNames[1] + "!");
      } else if (dayValue == 3) {
        alert("Hey you were born on " + dayNames[2] + " ,Your Akan name is " + femaleNames[2] + "!");
      } else if (dayValue == 4) {
        alert("Hey you were born on " + dayNames[3] + " ,Your Akan name is " + femaleNames[3] + "!");
      } else if (dayValue == 5) {
        alert("Hey you were born on " + dayNames[4] + " ,Your Akan name is " + femaleNames[4] + "!");
      } else if (dayValue == 6) {
        alert("Hey you were born on " + dayNames[5] + " ,Your Akan name is " + femaleNames[5] + "!");
      } else if (dayValue == -0) {
        alert("Hey you were born on " + dayNames[6] + " ,Your Akan name is " + femaleNames[6] + "!");
      }
      break
    default:

  }

}

