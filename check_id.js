const axios = require('axios');

let idList = [];
function requestItem(res) {
    let items = res.data;
    for (let item of items) {
        idList.push(item.id);
    }
}
const url = "http://localhost:3000/items"
axios
    .get(url)
    .then(requestItem)

module.exports = {idList}