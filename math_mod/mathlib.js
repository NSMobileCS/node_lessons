module.exports = function (){
    return {
        add: function(num1, num2) {
            return Number(num1) + Number(num2);// add code here 
        },
        multiply: function(num1, num2) {
            return Number(num1) * Number(num2);
        },
        square: function(num) {
            return Number(num) * Number(num)
        },
        random: function(num1, num2, rounding) {
            if (rounding === true){
                return Math.floor(Math.random()*(1+num2-num1))+num1;
            } 
            else{
                return Math.random()*(num2-num1)+num1;
            }
        }
    }
  };