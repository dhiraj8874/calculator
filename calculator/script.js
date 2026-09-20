const input= document.querySelector(".inputbox")

function clearData(){
    input.value =" "
}

function value(vol){
    input.value  += vol
}

function calculate(){
    input.value =eval(input.value)
}

function deleteData(){
    input.value= input.value.slice(0,-1)
}