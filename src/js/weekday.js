export const calculateDay = (inputDate) => {
  let userDate = new Date(inputDate).getDay();
  return userDate;
};

export const dateString = (inputDate) => {
  if ( inputDate === 6) {
    return "This date lands on a Sunday";
  } else if ( inputDate === 5) {
    return "This date lands on a Saturday";
  } else if ( inputDate === 4) {
    return "This date lands on a Friday";
  } else if ( inputDate === 3) {
    return "This date lands on a Thursday";
  } else if ( inputDate === 2) {
    return "This date lands on a Wednesday";
  } else if ( inputDate === 1) {
    return "This date lands on a Tuesday";
  } else if ( inputDate === 0) {
    return "This date lands on a Monday";
  } else {
    return "Make sure the date you entered is correct";
  }
};

