
  
       let calculation = localStorage.getItem('calculation') || '';
       document.querySelector('.showCalculation').value = calculation ;
      
      function updateCalculation(value) {
        calculation += value;
        console.log(calculation);
        localStorage.setItem('calculation',calculation);
        document.querySelector('.showCalculation').value = calculation ;

      }

      function saveCalculation() {
        localStorage.setItem('calculation', calculation);
        document.querySelector('.showCalculation').value = calculation ;
      }