import printToDom from "../helpers/utils.js"
import bearData from "../helpers/data/bearData.js"

const buildBears = (theRiver) => {
    let domString = '';

    for (let i = 0; i < theRiver.length; i++) {
        domString += `
    <div class="floating-card sortable">
        <div class="card" style="width: 18rem;">
            <img src="${theRiver[i].imgUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${theRiver[i].name}</h5>
            </div>
        </div>
    </div> 
        `;
    }
        printToDom('#theRiver', domString);
  };

  export default { buildBears }