

function calculateBmi() {
   let weight = document.querySelector('.js-weight').value;
   let height = document.querySelector('.js-height').value;

   let bmi = (10000 * weight) / (height * height)

   document.getElementById('bmi-output').innerHTML = bmi.toFixed(1)

   if (bmi <= 24.9) {
    document.getElementById('bmi-message').innerHTML = 'low'
   } 

   else if (bmi >= 25 && bmi <= 29.9){
    document.getElementById('bmi-message').innerHTML = 'healthy'
   } else {
    document.getElementById('bmi-message').innerHTML = 'high'
   }

}


function reload() {
    window.location.reload()
}

