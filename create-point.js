function populateUFs(){
    const UFselect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( states => {

        for( const state of states){
            UFselect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
}

populateUFs()


document.querySelector("select[name=uf]")

document.addEventListener("change", () => {
    console.log("mudei")
})

//  Selecionar os items de coleta //

  // atualizar o campo escondido com os items selecionados 
  const  collectedItems = document.querySelector("input[name=items")

// usar todos os LI //

let selectedItems = []


for (let item of itemsToCollect){
    
    item.addEventListener('click', handleSelectedItem)

    function handleSelectedItem(event){
        const itemli =  event.target

        itemli.classList.toggle("selected")

        const itemId =  itemli.dataset.id
    }

    // vamos verificar se o item esta selecionado 
    // se sim, vamos usar esse item 
     
    const alreadySelected = selectedItems.findIndex( item => {
        const itemFound = item == itemId
        return itemFound
    })


    // se ja estiver selecionado, tirar a selecao 

     if ( alreadySelected >= 0){
         //tirar selcao 
         const filteredItems = selectedItems.filter( item => {
             const itemIsDifferent = item != itemId // false 
             return itemIsDifferent
         })
 
         selectedItems = filteredItems

     } else {
         selectedItems.push(itemId)
     };

    collectedItems.value = selectedItems

}
