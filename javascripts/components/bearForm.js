import utils from "../helpers/utils.js"
import bearData from "../helpers/data/bearData.js"
import showBear from "./theRiver.js"

const clickSubmitEvent = (e) => {
  e.preventDefault();
  bearData.addBearsToArray ();
  document.getElementById("inputName").value = null;
  document.getElementById("addImage").value = null;
  showBear.makeCard();
}

// buildForm
const makeForm = () => {
  const domString = `
  <form>
      <div class="bears"
            <h4> Use the form below to track your favorite bears!</h4>
        <div class="form-group">
          <input type="text" class="form-control" id="inputName" placeholder="Bear Name!">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" id="addImage" placeholder="Image Url">
        </div>
        <button id="printBears" type="button" class="btn btn-primary">Submit</button>
  </form>
  `;

  utils.printToDom("#bearForm", domString);

  document.querySelector("#printBears").addEventListener("click", clickSubmitEvent)
}

export default { makeForm }