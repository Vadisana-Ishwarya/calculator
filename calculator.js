let calculation=localStorage.getItem('calculation')||'';
     
      function updateCalculation(value){
         calculation+=value
         displayCalculation();
         localStorage.setItem('calculation',calculation)
      }
    
     displayCalculation();
     function displayCalculation(){
      document.querySelector('.js-input')
      .value=calculation;
     }
     function deleteLast() {
      calculation = calculation.slice(0, -1);
      displayCalculation();
      localStorage.setItem('calculation', calculation);
    }