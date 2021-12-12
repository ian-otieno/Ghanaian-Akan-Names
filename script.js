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

  