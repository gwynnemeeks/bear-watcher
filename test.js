// let bearArray = [
//     {
//         name: 'Black Betty',
//         imgUrl: 'https://www.tn.gov/content/tn/twra/wildlife/mammals/large/black-bears/jcr%3acontent/contentFullWidth/tn_panel/content/tn_columnctrl/column_parsys2/tn_image.img.jpg/1584046992543.jpg',

//     },
//     { 
//         name: 'Grizz Leigh',
//         imgUrl: 'https://www.quesnelobserver.com/wp-content/uploads/2018/01/10324238_web1_20171003-BPD-grizzly-fishing.jpg',
        
//     },
//     {
//         name: 'Sunny',
//         imgUrl: 'https://imgs.mongabay.com/wp-content/uploads/sites/20/2016/08/01195046/FEATRED-2.jpg',
//     },
//     {
//         name: 'Snowy',
//         imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Polar_Bear_-_Alaska_%28cropped%29.jpg',
//     },
//     {
//         name: 'Dueling Cuties',
//         imgUrl: 'https://i.pinimg.com/originals/8d/ea/16/8dea165db5d4b0d25436872acfcbcabb.jpg',
//     }
// ];

// printToDom function
const printToDom = (selector, textToPrint) => {
    document.querySelector(selector).innerHTML = textToPrint;
  };



// buildBear Domstring
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

//   const addBear = (nameArgument, imageArgument) => {
//       let newBear = {
//           name: nameArgument,
//           imgUrl: imageArgument,
//       }
//       bearArray.push(newBear);
//       buildBears(bearArray);
//       console.log(bearArray);
//   };

//   const clickEvents = () => {
//       document.getElementById("submit").addEventListener("click", function(event) {
//         const newBear.name = document.querySelector("#bearName").value;
//         const newBear.imgUrl = document.querySelector("#imageURL").value;
//         addBear(newBear);
//   }

  const init = () => {
    buildForm();
    buildBears(bearArray);
}

init ();