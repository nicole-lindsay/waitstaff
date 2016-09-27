angular.module('myApp', [])
	.controller('myCtrl', function(){
		var main = this;

		main.submitAmounts = function(){
			/*there needs to be an if/else statement here to reflect
			that if the inputs are valid, then amounts in custCharges
			and earnInfo change. Else, there is an alert to remind
			to enter positive numbers*/
		};

		main.cancelTransaction = function(){
			main.baseMeal = "";
			main.taxRate = "";
			main.tipPercent = "";
		};

	});