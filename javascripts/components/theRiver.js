import utils from "../helpers/utils.js"
import bearData from "../helpers/data/bearData.js"

const makeCard = () => {
  const newBear = bearData.getBear ()
  let domstring = '';

  for (let i = 0; i < newBear.length; i++) {
    const bear = newBear[i];
      domstring += `
        <div class="card">
            <img class="card-img-top" src="${bear.imageUrl}" alt="Bear pics">
                <class="card-body">
                <h2 class="card-title">${bear.name}</h2>
            </div>
        </div>
    `;
  }

  utils.printToDom("#river", domstring);
}

export default { makeCard }