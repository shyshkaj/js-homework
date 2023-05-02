//task1
const list = document.querySelector("#list");
const firstElement = list.firstElementChild;
const lastElement = list.lastElementChild;
const secondElement = firstElement.nextElementSibling;
const fourthElement = lastElement.previousElementSibling;
const thirdElement = fourthElement.previousElementSibling;
const listOfElementsContent = [
  firstElement.innerText,
  lastElement.innerText,
  secondElement.innerText,
  fourthElement.innerText,
  thirdElement.innerText,
];
alert(listOfElementsContent.toString());