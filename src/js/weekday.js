export const calculateDay = () => {
  let inputDate = "August 31, 2022"
  let userDate = new Date(inputDate).getDay();
  return userDate;
  // userDate.prototype.getDay();
  // const day = userDate.getDay();
  // if (userDate === 0) {
  //   return "This date lands on a Monday";
  // } else if (userDate === 1) {
  //   return "This date lands on a Tuesday";
  // } else if (userDate === 2) {
  //   return "This date lands on a Wednesday";
  // } else if (userDate === 3) {
  //   return "This date lands on a Thursday";
  // } else if (userDate === 4) {
  //   return "This date lands on a Friday";
  // } else if (userDate === 5) {
  //   return "This date lands on a Saturday";
  // } else if (userDate === 6) {
  //   return "This date lands on a Sunday"
  // } else {
  //   return "Make sure the date you entered is correct"
  // }
};


