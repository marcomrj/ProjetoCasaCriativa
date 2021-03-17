
function onoff(){ /*Coloquei uma função que eu nomei de onoff, no modal, assim quando eu clicar, ele recebe a classe hide*/
    document
        .querySelector("#modal")
        .classList
        .toggle("hide") /*Vai colocar e tirar dependendo do botão*/
}

function checkFields(event){

    const valuesToCheck =[
        "image",
        "title",
        "category",
        "description",
        "link"
    ]

    const isEmpty = valuesToCheck.find(function (value){
        const checkIfIsString = typeof event.target[value].value === "string"
        const checkIfIsEmpty = !event.target["title"].value.trim()
        
        if(checkIfIsString && checkIfIsEmpty){
            return true
        }
        
    })
    console.log(isEmpty)
    if(isEmpty){
        event.preventDefault()
        alert("Para continuar preencha todos os campos.")
    }
}
