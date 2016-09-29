angular.module('myApp', [])
	.controller('myCtrl', function(){
		var main = this;
		main.submitted = false;
		main.baseMeal = 0;
		main.taxRate = 0;
		main.tipPercent = 0;
		main.tip = 0;
		main.tax = 0;
		main.total = 0;
		main.tipTotal = 0;
		main.mealCount = 0;
		main.average = 0;

		main.submitAmounts = function(valid){
			if (valid) {
				main.submitted = true;
				var tipPercent = main.tipPercent;
				var baseMeal = main.baseMeal;
				var taxRate = main.taxRate;
				main.tip = (tipPercent / 100) * baseMeal;
				main.tax = (taxRate / 100) * baseMeal;
				main.total = main.tip + main.tax + baseMeal;
				main.mealCount++;
			} else {
				alert("You need to enter a positive number in all fields");
			}
		};

		main.cancelTransaction = function(){
			main.baseMeal = 0;
			main.taxRate = 0;
			main.tipPercent = 0;
		};

		main.resetForm = function(){
			cancelTransaction();
			main.tipTotal = 0;
			main.mealCount = 0;
			main.average = 0;
		};

	});