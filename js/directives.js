angular.module('app.directives', [])

.directive('portfolioItem', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      portfolioData: '=' 
    }, 
    templateUrl: 'templates/partials/portfolio-item.html' 
  }; 
});
