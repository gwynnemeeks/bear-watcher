const printToDom = (selector, textToPrint) => {
    document.querySelector(selector).innerHTML = textToPrint;
  };

  export default { printToDom }