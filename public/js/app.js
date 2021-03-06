
function requestItem(response) {
    let items = response.data;
    const ul = document.querySelector('ul');
    if (ul !== null) {
        ul.remove();
    }
    const newUl = document.createElement('ul');
    for (let item of items) {
        const li = document.createElement('li');
        li.textContent = "☛ book id: " + item.id + "   ☯ | book name:  " + item.name;
        newUl.appendChild(li);
        document.body.appendChild(newUl);
    }
}

function addItemList(event) {
    const id = document.querySelector('#itemId').value;
    const item = document.querySelector('#itemName').value;
    let newItem = {
        id: parseInt(id),
        name: item
    };

    const url = "https://phnom-leap.herokuapp.com/items";
    axios
        .post(url, newItem)
        .then(requestItem);

}

const url = "https://phnom-leap.herokuapp.com/items";
axios
    .get(url)
    .then(requestItem)

const btnAdd = document.querySelector('#addItem');
btnAdd.addEventListener('click', addItemList);
