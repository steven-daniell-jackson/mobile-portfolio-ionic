angular.module('app.controllers', [])
  
.controller('portfolioCtrl', function($scope) {

})
   
.controller('overviewCtrl', function($scope) {

})
   
.controller('recentEntriesCtrl', function($scope, PortfolioFac) {

	$scope.preloader = true;

// Access factory and assign the returned data
PortfolioFac.recent()
.success(function(data) {
    
            $scope.entries = data;
            // $scope.entries.reverse()
            $scope.preloader = false;
            // console.log($scope.entries);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });


})
   
.controller('recentWebsitesCtrl', function($scope, PortfolioFac) {

$scope.preloader = true;

// Access factory and assign the returned data
PortfolioFac.latest()
.success(function(data) {
    
            $scope.entries = data;
            // $scope.entries.reverse()
            $scope.preloader = false;
            // console.log($scope.entries);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

})
   
.controller('previousWebsitesCtrl', function($scope, PortfolioFac) {

	$scope.preloader = true;

// Access factory and assign the returned data
PortfolioFac.previous()
.success(function(data) {
    
            $scope.entries = data;
            // $scope.entries.reverse()
            $scope.preloader = false;
            // console.log($scope.entries);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });


})
   
.controller('landingPagesCtrl', function($scope, PortfolioFac) {
	$scope.preloader = true;

// Access factory and assign the returned data
PortfolioFac.landingpages()
.success(function(data) {
    
            $scope.entries = data;
            // $scope.entries.reverse()
            $scope.preloader = false;
            // console.log($scope.entries);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

})
   
.controller('newslettersCtrl', function($scope, PortfolioFac) {

	$scope.preloader = true;

// Access factory and assign the returned data
PortfolioFac.newsletter()
.success(function(data) {
    
            $scope.entries = data;
            // $scope.entries.reverse()
            $scope.preloader = false;
            // console.log($scope.entries);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });


})
   
.controller('otherCtrl', function($scope, PortfolioFac) {
	$scope.preloader = true;

// Access factory and assign the returned data
PortfolioFac.other()
.success(function(data) {
    
            $scope.entries = data;
            // $scope.entries.reverse()
            $scope.preloader = false;
            // console.log($scope.entries);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

})
      
.controller('contactCtrl', function($scope, PortfolioFac) {

})
 