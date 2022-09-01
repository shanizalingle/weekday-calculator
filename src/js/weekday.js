export const calculateDay = () => {
  let inputDate = "August 31, 2022"
  let userDate = new Date(inputDate).getDay();
  return userDate;
};

export const dateString = () => {
  let day = calculateDay();
  if ( day === 0) {
    return "This date lands on a Sunday";
  } else if ( day === 1) {
    return "This date lands on a Monday";
  } else if ( day === 2) {
    return "This date lands on a Tuesday";
  } else if ( day === 3) {
    return "This date lands on a Wednesday";
  } else if ( day === 4) {
    return "This date lands on a Thursday";
  } else if ( day === 5) {
    return "This date lands on a Friday";
  } else if ( day === 6) {
    return "This date lands on a Saturday"
  } else {
    return "Make sure the date you entered is correct"
  }
}


