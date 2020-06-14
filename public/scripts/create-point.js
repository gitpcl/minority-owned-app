// function populateUFs() {
//     const ufSelect = document.querySelector("select[name=uf]")

//     fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
//     .then( res => res.json())
//     .then( states => {

//         for( const state of states) {

//             ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`

//         }

//     } )
// }

// populateUFs()

// function getCities(event) {
//     const citySelect = document.querySelector("select[name=city]")
//     const stateInput = document.querySelector("input[name=state]")

//     const ufValue = event.target.value

//     const indexOfSelectedState = event.target.selectedIndex
//     stateInput.value = event.target.options[indexOfSelectedState].text

//     const url =`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

//     citySelect.innerHTML = "<option value>Select a city</option>"
//     citySelect.disabled = true

//     fetch(url)
//     .then( res => res.json())
//     .then( cities => {
        
//         for( const city of cities) {

//             citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`

//         }

//         citySelect.disabled = false
//     } )

// }

// document
//     .querySelector("select[name=uf]")
//     .addEventListener("change", getCities)

//..................................//
function populateCEPs() {
    const cepSelect = document.querySelector('select[name=cep]')

    let ceps = ['77002','77003', '77004']

    cepSelect.addEventListener('click', () => {
    let options = ceps.map(cep => `<options value=${cep()}>${cep}</options>`).join('\n');

    cepSelect.innerHTML = options; 
    })

}

populateCEPs()
//..................................//

//..................................//

// Business type

// Get all the li

const itemsToCollect = document.querySelectorAll(".items-grid li")

for(const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

const colletedItems= document.querySelector("input[name=items")

let selectedItems = []

function handleSelectedItem(event) {
    const itemLi = event.target
    //add or remove class
    itemLi.classList.toggle("selected")

    const itemId = event.target.dataset.id

    console.log('ITEM ID: ', itemId)

    // verify if there are any selected times
    // if so, get the selected items

    const alreadySelected = selectedItems.findIndex( item => {
        const itemFound = item == itemId //this will the true or false
        return itemFound  
    })

    //if it is already, selected, remove from array

    if(alreadySelected >= 0) {
        // remove from selection
        const filteredItems = selectedItems.filter(item => {
            const itemIsDifferent = item != itemId // false
            return itemIsDifferent  
        })


        selectedItems = filteredItems
    } else {
        // if not selected
        // add to array
        selectedItems.push(itemId)
    }

    console.log('selectedItems: ', selectedItems)

    //update the hidden iput with the selected data
    colletedItems.value = selectedItems
    
}



