const display = document.querySelector('#display')
const buttons = document.querySelectorAll('button')

let calculation=[]
let getRid

buttons.forEach(button =>{
  button.addEventListener( 'click' , e =>{
    calculate(button)
  })
})

function calculate(button) {
  const value = button.textContent
if (value ==="C") {
  calculation = []
  display.textContent= "."
 
} else if (value === "=") {
  display.textContent = eval(getRid)
}else{
  calculation.push(value)
  getRid = calculation.join('')
  display.textContent = getRid
}
}









