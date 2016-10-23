var storeStuff = [];


angular.module('myApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'info.html'
        }).when('/info', {
            templateUrl: 'info.html'
        }).when('/newmeal', {
            templateUrl: 'newmeal.html',
            controller: 'newMeal',
            controllerAs: 'main'
        }).when('/earnings', {
            templateUrl: 'earnings.html',
            controller: 'myEarnings',
            controllerAs: 'main'
        }).when('/error', {
            template: '<p>Page does not exist</p>'
        }).otherwise('/error')
    }])

.controller('newMeal', function($rootScope, $window) {
    var main = this;
    main.submitted = false;
    main.tip = 0;
    main.tax = 0;
    main.total = 0;
    $rootScope.tipTotal = 0;
    $rootScope.mealCount = 0;
    $rootScope.average = 0;


    main.submitAmounts = function(valid) {
        if (valid) {
            main.submitted = true;
            var tipPercent = main.tipPercent;
            var baseMeal = main.baseMeal;
            var taxRate = main.taxRate;
            main.tip = (tipPercent / 100) * baseMeal;
            main.tax = (taxRate / 100) * baseMeal;
            main.total = main.tip + main.tax + baseMeal;
            $rootScope.mealCount++;
            $rootScope.tipTotal += main.tip;
            $rootScope.average = $rootScope.tipTotal / $rootScope.mealCount;
            storeStuff.push({
                average: $rootScope.average,
                tipTotal: $rootScope.tipTotal
            });
        } else {
            alert("You need to enter a positive number in all fields");
        }
    };

    main.cancelTransaction = function() {
        main.baseMeal = 0;
        main.taxRate = 0;
        main.tipPercent = 0;
        main.tip = 0;
        main.tax = 0;
        main.total = 0;
    };
})

.controller('myEarnings', function($rootScope, $window) {
    var main = this;
    main.resetForm = function() {
        main.cancelTransaction();
        $rootScope.tipTotal = 0;
        $rootScope.mealCount = 0;
        $rootScope.average = 0;
    };
});