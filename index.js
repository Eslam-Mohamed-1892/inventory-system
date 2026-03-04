let table = document.querySelector('#phoneData tbody');
let nameInput = document.querySelector('#nameInput')
let priceInput = document.querySelector('#priceInput')
let qtyInput = document.querySelector('#qtyInput')

let editNameInput = document.querySelector('#editNameInput')
let editPriceInput = document.querySelector('#editPriceInput')
let editQtyInput = document.querySelector('#editQtyInput')

let indexToEdit = false;

let phones = [
    { name: 'iPhone x', price: 400, qty: 3 },
    { name: 'iPhone 11', price: 550, qty: 5 },
    { name: 'iPhone 12', price: 600, qty: 7 },
];

let showPhones = () => {
    table.innerHTML = ""
    phones.forEach((el, index) => {
        table.innerHTML += `
        <tr>
        <td>${index + 1}</td>
        <td>${el.name}</td>
        <td>${el.price}</td>
        <td>${el.qty}</td>
        <td>
        <button onclick="openPhoneEdit(${index})" data-bs-toggle="modal" data-bs-target="#editPhoneData" class="btn btn-warning">Edit Phone</button>
        <button class="btn btn-danger" onclick="removePhone(${index})">Remove Phone</button>
        </td>
        </tr>
        `
    })
}

let addNewPhone = () => {
    let newPhoneData = {
        name: nameInput.value,
        price: +priceInput.value,
        qty: +qtyInput.value
    };
    phones.push(newPhoneData);
    showPhones();
    nameInput.value = "";
    priceInput.value = "";
    qtyInput.value = "";

};

let removePhone = (indexToDelet) => {
    alert("I will remove the phone " + (indexToDelet + 1))
    let makeSure = confirm("Are you sure from remove this phone")
    if (makeSure == true) {
        phones.splice(indexToDelet, 1)
        showPhones()
    }
}

let openPhoneEdit = (index) => {
    let phone = phones[index]
    editNameInput.value = phone.name
    editPriceInput.value = phone.price
    editQtyInput.value = phone.qty
    indexToEdit = index
}

let saveUpdates = () => {
    phones[indexToEdit].name = editNameInput.value;
    phones[indexToEdit].price = editPriceInput.value;
    phones[indexToEdit].qty = editQtyInput.value;

    alert("Saved successfully ✅");
    showPhones()
}