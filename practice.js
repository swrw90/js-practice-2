const _id = "34";
let usersId = [];

let userArr = [
    {
        name: "apple",
        price: "27",
        _id: "420"
    },
    {
        name: "peach",
        price: "21",
        _id: "42"
    },
    {
        name: "grape",
        price: "5",
        _id: _id
    },
    {
        name: "berries",
        price: "4",
        _id: "660"
    }
]

let removeUserIndex = (userArr) => {
    let userIndex;
    for (var i = 0; i < userArr.length; i++) {
        usersId.push(userArr[i]._id);
        for (var j = 0; j < usersId.length; j++) {
            if (usersId[j] === _id) {
                userIndex = usersId[j].indexOf(usersId[j]._id)
                usersId.splice(userIndex, 1);
            }
        }
    }
}

removeUserIndex(userArr);

// console.log(usersId + " after");


let filterItem = elem => elem._id != _id;

filterItem(userArr);

let newArr = userArr.filter(filterItem);
console.log(newArr)