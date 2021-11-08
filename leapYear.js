function isLeapYear(year) {
  //three condition to find out the leap year

  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    return true;
  } else {
    return false;
  }
}

//take input

const year = promt("Enter a year");

isLeapYear(year);
