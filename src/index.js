import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { calculateDay, dateString } from '../src/js/weekday.js';

function handleSubmission(event){
  event.preventDefault();
  const inputDate = document.querySelector("input#dateInput").value;
  document.querySelector("span#resultOutputSpan").innerText = dateString(calculateDay(inputDate));
}

window.addEventListener("submit", handleSubmission); 
